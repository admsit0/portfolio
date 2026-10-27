La explicación de difusión en una frase es casi demasiado limpia: añadir ruido hasta convertir una imagen en ruido gaussiano y aprender a invertir el proceso. Es una buena intuición, pero oculta la pregunta que hizo interesante este proyecto:

**¿Qué es exactamente el proceso que invertimos y de cuántas maneras podemos invertirlo?**

Trabajé en un sistema modular de generación de imágenes basado en score. No pretendía entrenar un modelo enorme de producción, sino crear una plataforma experimental donde cambiar proceso de difusión, calendario de ruido, sampler y condicionamiento sin reescribirlo todo.

El sistema admitía datasets en escala de grises y RGB, entrenaba una red de score de tipo U-Net, generaba muestras desde ruido y las evaluaba. También incluía generación condicionada por clase e imputación.

Lo que más me gustó fue que el proyecto no se quedó en un único notebook. El código de difusión se vuelve confuso cuando SDE, scheduler, sampler y visualización están mezclados. Puedes obtener imágenes sin saber si una mejora viene del proceso, del integrador, del condicionamiento o de una semilla afortunada. Quería hacer explícitas esas decisiones: si un experimento salía mal, al menos poder seguir el motivo.

## El score apunta de vuelta a los datos

El proceso directo parte de una imagen limpia x_0 y la corrompe progresivamente en x_t. En tiempo continuo puede describirse como una SDE:

```text
dx = f(x, t) dt + g(t) dw
```

f representa la deriva; g controla la magnitud de difusión; dw es ruido browniano. El modelo no aprende este proceso: lo elegimos nosotros.

El aprendizaje ocurre en sentido inverso. La red aproxima una función de score:

```text
score(x_t, t) ~= gradient_x log p_t(x_t)
```

Intuitivamente, apunta hacia regiones en las que la muestra ruidosa resulta más compatible con la distribución de datos a ese nivel de ruido. Muestrear se convierte en navegación numérica: empezar en ruido, preguntar a la red dónde están los datos e integrar hacia atrás.

Volvía continuamente a dos piezas: el objetivo de denoising score matching y la dinámica inversa. La red aprende un campo vectorial condicionado por el tiempo:

```text
theta* = argmin_theta E_t,x0,z [
  lambda(t) || s_theta(x_t, t, y) - target_score(x_t, x0, t) ||_2^2
]

reverse SDE:
dx = [f(x,t) - g(t)^2 * s_theta(x,t)] dt + g(t) d_w_bar

probability-flow ODE:
dx = [f(x,t) - 0.5 * g(t)^2 * s_theta(x,t)] dt
```

Por eso importaba abstraer el sampler. Euler-Maruyama, Predictor-Corrector y Probability Flow ODE no son variaciones estéticas: utilizan de maneras distintas el mismo campo de score aprendido.

El entrenamiento, muy comprimido, es:

```text
for image x0 in dataset:
  sample time t
  sample noise z
  construct noisy image xt from the chosen SDE
  ask ScoreNet(xt, t, condition) to predict the score/noise direction
  update the network with a denoising score-matching loss
```

Ese es el núcleo conceptual. El resto consiste en hacer explícitos y sustituibles sus bloques.

## Tres procesos directos: VE, VP y Sub-VP

El informe implementa tres familias.

**Variance Exploding (VE)** se comporta como un proceso browniano cuya varianza crece con el tiempo. No hay una deriva que empuje la muestra hacia atrás; la imagen se degrada al aumentar la dispersión. Es útil para entender las SDE basadas en score, aunque su escala de ruido puede crecer mucho.

**Variance Preserving (VP)** añade ruido controlando la varianza total. El informe lo describe mediante un proceso de tipo Ornstein-Uhlenbeck con deriva y difusión dependientes del tiempo. La imagen pierde información sin que la distribución simplemente se expanda hacia fuera.

**Sub-Variance Preserving (Sub-VP)** modifica los coeficientes de VP para hacer más progresiva la transición. Comparte bastante maquinaria con VP, pero introduce diferencias suficientes para comparar su comportamiento.

Implementar los tres dejaba clara una cosa: el proceso de difusión no es un detalle de fondo. Cambia la geometría señal-ruido del entrenamiento y el comportamiento numérico del muestreo.

## Calendarios de ruido: lineal y coseno

VP y Sub-VP necesitan un calendario que controle la velocidad de introducción del ruido. Implementé dos opciones:

- Lineal: sencillo de interpretar, con cambios directos de intensidad.
- Coseno: variación más suave y, a menudo, una degradación más natural.

Es una decisión pequeña que tiene consecuencias grandes. Demasiado ruido al principio dificulta el aprendizaje. Una corrupción demasiado suave puede dejar sin aprender el régimen de ruido alto con el que empieza la generación. El sistema se parece más a una cadena de decisiones numéricas compatibles que a un único algoritmo.

## ScoreNet y por qué encaja una U-Net

La red de score utilizaba una arquitectura de tipo U-Net con información temporal. El denoising requiere tanto textura local como contexto global para reconstruir estructuras coherentes.

Utilicé embeddings de Fourier para el tiempo y, en los casos condicionados, información de clase junto al embedding temporal. La red podía aprender:

```text
score(x_t, t)
```

o, con etiquetas:

```text
score(x_t, t | y)
```

Para generar una clase concreta, como un dígito de MNIST, cambia el campo de score. La muestra debe acercarse a imágenes plausibles que además pertenezcan a esa clase.

## Muestrear es hacer análisis numérico

Una vez entrenada la red, generar consiste en integrar. Partimos de ruido y retrocedemos por la dinámica aprendida. Implementé cuatro samplers.

**Euler-Maruyama** es el integrador estocástico básico: combina una actualización de deriva con ruido aleatorio. Es sencillo y una referencia útil, pero puede necesitar muchos pasos para obtener calidad.

**Predictor-Corrector** alterna un predictor que avanza la SDE inversa y un corrector que refina la muestra, a menudo con pasos de tipo Langevin. Puede mejorar las imágenes, pero las correcciones adicionales cuestan cómputo.

**Probability Flow ODE** sustituye el proceso inverso estocástico por una ecuación diferencial ordinaria determinista. Elimina el componente aleatorio durante el muestreo; la diversidad depende más directamente del ruido inicial.

**Exponential Integrator** utiliza exponenciales para tratar con más cuidado partes de la dinámica inversa. Con su parámetro de ruido a cero también puede volverse determinista, acercándose conceptualmente a Probability Flow ODE. Hay una restricción importante en el informe: no se utiliza VE con Exponential Integrator.

La API hacía explícitas estas elecciones:

```text
load trained model
choose diffusion process
choose compatible sampler
choose number of steps and sampler parameters
generate a batch
plot samples
```

Puede parecer modularidad corriente, pero el sampler forma parte del comportamiento del modelo, no solo de su implementación.

Una comprobación útil fue medir tiempos además de mirar imágenes. El siguiente gráfico procede de un experimento pequeño, no de un benchmark universal; no extrapolaría sus ratios CPU/CUDA. Muestra la forma del problema: Predictor-Corrector resulta barato en esta configuración, Euler-Maruyama es más pesado y el integrador exponencial queda entre ambos con un comportamiento distinto.

![Tiempo medio de muestreo por sampler y dispositivo en un experimento Sub-VP de MNIST con el dígito 3.](/blog-plots/diffusion-sampler-runtime.png)

La elección afecta a latencia, repetibilidad y número de pasos que podemos permitirnos. En un notebook didáctico puede quedar escondida. En un paquete reutilizable debe ser visible: el mejor sampler según una métrica puede no ser el adecuado para un flujo interactivo.

## Condicionamiento: dirigir la muestra hacia una clase

Con datasets etiquetados, el sistema permitía entrenar embeddings de clase y pedir una categoría concreta:

```text
sample class = 3
start from Gaussian noise
run reverse process using score(x_t, t | class=3)
return images that should look like that class
```

El informe también explica classifier-free guidance: aprender comportamiento condicionado e incondicional y combinarlos al muestrear.

```text
guided_score =
  unconditional_score
  + guidance_scale * (conditional_score - unconditional_score)
```

Una escala mayor empuja más hacia la condición. Con poca guía, la señal de clase es débil; con demasiada, puede reducirse la diversidad. Una observación útil fue ajustar la intensidad a lo largo del tiempo para equilibrar precisión visual y variedad.

## Imputación: edición con restricciones

La otra forma de control era imputar. La red recibe una imagen parcialmente observada y una máscara binaria de la región que falta. El proceso inverso conserva los píxeles conocidos mientras regenera lo restante.

```text
given original image x and mask M:
  keep observed region fixed
  diffuse or initialize the missing region
  during each reverse step:
    update only the masked region with the score model
    restore observed pixels from the known image
```

En vez de «generar una imagen», el objetivo es «completarla de forma compatible con su contexto». La distribución aprendida aporta posibilidades; la máscara limita dónde puede moverse el proceso.

![Demostración de imputación en MNIST: dígitos originales, entradas enmascaradas y reconstrucción de las regiones que faltan.](/blog-plots/diffusion-imputation.png)

La demostración es pequeña, pero distingue generación condicionada real de muestreo libre con una máscara dibujada encima. Hay que reimponer los píxeles observados durante el proceso inverso; de lo contrario, la muestra se aleja del contexto conocido. Es uno de esos detalles que separan una explicación de una herramienta.

## Evaluación: no confiar en la cuadrícula más bonita

El módulo de evaluación incorporaba tres métricas habituales.

**Bits per dimension (BPD)** estima qué tan bien explica el modelo la distribución de datos, normalizando por dimensión de imagen.

**Fréchet Inception Distance (FID)** compara estadísticas de imágenes reales y generadas en el espacio de características de Inception. Un valor menor es mejor y suele utilizarse como aproximación a semejanza distribucional y realismo.

**Inception Score (IS)** intenta premiar imágenes clasificables y diversidad entre clases.

Son imperfectas, especialmente en experimentos pequeños. Aun así, importan: las cuadrículas son muy persuasivas. Una muestra puede parecer prometedora mientras colapsa la diversidad; una métrica aceptable puede coexistir con imágenes borrosas. Hay que inspeccionar ambas cosas.

## La estructura del software

El sistema se concibió como paquete, separando:

- Definiciones de procesos de difusión.
- Calendarios de ruido.
- Arquitectura ScoreNet.
- Entrenamiento.
- Algoritmos de muestreo.
- Configuración YAML o diccionario.
- Condicionamiento e imputación.
- Evaluación.
- Notebooks de entrenamiento, generación, evaluación y ejemplos avanzados.

Un orquestador de tipo DiffusionExperiment ocultaba el cableado:

```python
experiment = DiffusionExperiment(config)
experiment.train(dataset)
experiment.sample_and_plot(sampler="predictor_corrector")
experiment.evaluate(metrics=["bpd", "fid", "is"])
```

También resolvía necesidades prácticas: entradas RGB o grises, normalización a [-1, 1], formato tensor de PyTorch, guardado y carga, detección CPU/GPU, tests de componentes y notebooks que ejecutan los flujos en orden.

## Qué mostraban las demostraciones

El informe describe cinco notebooks.

El primero entrenaba sobre el dígito 3 de MNIST con VE, VP y Sub-VP, y calendarios lineales o coseno. El segundo comparaba Euler-Maruyama, Predictor-Corrector, Probability Flow ODE y Exponential Integrator. El tercero pasaba a la clase de barcos de CIFAR-10. El cuarto evaluaba con BPD, FID e IS. El quinto mostraba condicionamiento e imputación sobre dígitos de MNIST.

Los resultados se planteaban con cómputo modesto. Una U-Net pequeña, entrenada desde cero durante un número limitado de pasos, no compite con grandes sistemas de difusión. Pero las imágenes eran suficientemente coherentes para mostrar relaciones aprendidas entre ruido, clase y forma visual.

![Progresión de muestras Sub-VP con Predictor-Corrector: de ruido a imágenes de barcos de CIFAR-10.](/blog-plots/diffusion-denoising-samples.png)

No presentaría estas muestras como resultado artístico. Son más útiles como evidencia de depuración. A la izquierda hay ruido; a la derecha, estructura de clase. En el medio aparecen errores de normalización, escala temporal o compatibilidad entre proceso y sampler. Cuando algo sale mal no basta con decir «el modelo es malo»: puede ser el objetivo de score, la marginal, el embedding temporal, la varianza del paso inverso o el condicionamiento.

Su valor como plataforma experimental no es «he recreado un modelo de frontera», sino tener implementadas, intercambiables y comprobables las piezas importantes de generación basada en score.

## Lo que aprendí al construirlo

La difusión se enseña a menudo como denoising repetido. Implementarla deja más clara su estructura:

```text
data preprocessing
  -> forward SDE
  -> noise schedule
  -> score network
  -> training objective
  -> sampler/integrator
  -> conditioning rule
  -> evaluation metric
```

Cada capa puede cambiar y cada cambio tiene consecuencias matemáticas y de software. VE, VP y Sub-VP definen geometrías de ruido distintas. Euler-Maruyama y Probability Flow ODE tratan de forma diferente la aleatoriedad del muestreo. Condicionamiento e imputación convierten la generación en navegación controlada.

Lo más útil fue ver cómo las matemáticas se convierten en ingeniería. Las ecuaciones describen el proceso; el diseño del paquete determina si de verdad podemos comparar variantes sin desmontar el sistema.

Ese es el tipo de proyecto generativo que me interesa: no solo una galería, sino un pequeño laboratorio donde se ven las piezas del algoritmo.
