La mayoría de las explicaciones de regularización terminan en el mismo gráfico: la curva de entrenamiento sigue bajando, la de validación deja de mejorar y llamamos sobreajuste a la distancia entre ambas. Es una imagen útil, pero deja fuera lo que quería estudiar en mi TFG: la representación interna que aprende la red.

La pregunta era:

**Cuando dos CNN alcanzan una precisión de validación parecida, ¿organizan la información de la misma manera por dentro?**

La respuesta fue que no. La regularización no cambiaba solo el resultado final. Cambiaba cómo se distribuían, comprimían y saturaban las activaciones, y cómo respondían a perturbaciones. El proyecto acabó siendo un intento de medir esas diferencias.

Ahora parece evidente, pero no fue mi punto de partida. Al principio quería hacer la comparación habitual, ordenar los métodos por precisión y comentar la tabla. Cuantos más checkpoints inspeccionaba, menos me convencía ese enfoque. Algunos modelos eran precisos, pero frágiles internamente. Otros no ganaban en validación limpia y, sin embargo, toleraban mucho mejor el ruido en los parámetros. El trabajo empezó a interesarme de verdad cuando dejé de tratar la precisión como toda la historia y empecé a mirar la red como un sistema con estados ocultos.

## El experimento: una arquitectura sencilla a propósito

No buscaba un clasificador de última generación. Quería una CNN con capacidad para sobreajustar, pero lo bastante sencilla como para atribuir los cambios al regularizador y no a trucos de arquitectura.

Mantuve la misma arquitectura en todos los experimentos:

```text
input image
  -> conv1: 3x3 conv, 32 channels, ReLU, 2x2 max-pool
  -> conv2: 3x3 conv, 64 channels, ReLU, 2x2 max-pool
  -> conv3: 3x3 conv, 128 channels, ReLU, 2x2 max-pool
  -> flatten
  -> fc1: 128 hidden units, ReLU
  -> fc2: class logits
```

En CIFAR-10 y SVHN, el último tensor convolucional es de 4x4x128. Se aplana en 2048 variables antes de la representación densa de 128 dimensiones. El modelo base podía acercarse a una precisión de entrenamiento perfecta en CIFAR-10 tras 60 épocas: justo la capacidad de memorización que necesitaba para el análisis.

Comparé siete estrategias:

- Penalización L1.
- Penalización L2.
- Dropout.
- Early stopping.
- Inyección de ruido gaussiano durante el entrenamiento.
- Aumento de datos.
- Batch normalization.

Utilicé CIFAR-10, SVHN, CIFAR-100 y FashionMNIST. Cada uno exigía algo distinto: CIFAR-10 fue el dominio principal; SVHN era más homogéneo; CIFAR-100 exponía los límites de capacidad; FashionMNIST ofrecía un régimen cercano al techo en el que casi todos los métodos rendían bien.

## La precisión era una perspectiva demasiado estrecha

La precisión indica si el clasificador acierta las etiquetas. No dice si utiliza una representación compacta, caótica o colapsada. Traté las activaciones ocultas como objetos empíricos que se pueden recoger y medir.

Para cada checkpoint cargué el modelo en evaluación y registré hooks en tres capas:

- conv1: extracción temprana de características.
- conv3: representación convolucional profunda.
- fc1: espacio latente denso anterior a la clasificación.

El pipeline seguía este esquema:

```text
for each dataset:
  for each regularization method:
    for each hyperparameter value:
      train for 60 epochs, saving checkpoints
      for selected epochs:
        load checkpoint in eval mode
        run validation data through the model
        capture conv1, conv3, and fc1 activations
        convert activations into comparable metrics
```

Durante la extracción, Dropout estaba desactivado y BatchNorm utilizaba sus estadísticas aprendidas. Las activaciones correspondían al comportamiento del modelo en inferencia.

Una decisión importante fue discretizar con los mismos rangos de referencia del modelo base. Dividí el rango de activaciones en intervalos y representé cada ejemplo mediante un vector ordenado de identificadores de intervalo. Así conservaba la identidad de las neuronas mejor que con un histograma global. Dos estados con el mismo número de neuronas activadas no tienen por qué ser el mismo estado interno.

## Tres señales internas

Utilicé tres métricas principales.

**Porcentaje de activaciones únicas:** cuántos estados discretizados diferentes aparecen al procesar la validación.

```text
unique_pctg = number of unique activation-state vectors / number of validation examples
```

Un valor demasiado bajo puede indicar que muchas entradas colapsan en el mismo código. Uno demasiado alto puede significar que la red representa cada entrada de forma excesivamente específica.

**Entropía de Shannon:** concentración del histograma de activaciones.

```text
H = - sum over bins p_i log(p_i)
```

Una entropía baja concentra las activaciones en pocos intervalos; una alta las distribuye más.

**Ratio de dispersión:** desviación típica de las activaciones del modelo regularizado respecto a la del modelo base.

```text
dispersion_ratio = activation_std_regularized / activation_std_baseline
```

La dispersión bruta depende de la capa y del dataset. Un ratio inferior a uno indica compresión respecto a la referencia.

No son métricas mágicas. Son deliberadamente sencillas. Su utilidad consiste en poder hablar de regularización como geometría de la representación, no solo como intervención sobre la precisión.

## Lo que decía primero la precisión

Los resultados externos no sorprendían demasiado, pero establecían la referencia. Aumento de datos y BatchNorm dieron las mejoras más fuertes en validación. Dropout y L2 quedaron en posiciones intermedias. Ruido gaussiano, early stopping y L1 fueron más débiles o apenas mejoraron el modelo base.

En CIFAR-10, los resultados del informe incluían:

| Método | Precisión de validación | Estados únicos en fc1 | Entropía en fc1 | Ratio de dispersión en fc1 |
| --- | ---: | ---: | ---: | ---: |
| Aumento de datos | 0.785 | 89.22% | 1.78 | 0.46 |
| BatchNorm | 0.770 | 84.30% | 1.53 | 0.41 |
| Dropout | 0.727 | 37.23% | 1.17 | 0.29 |
| L2 | 0.714 | 97.93% | 2.09 | 0.57 |
| Modelo base | 0.694 | 99.98% | 2.87 | 1.06 |

La brecha de generalización también importaba. En CIFAR-10, el modelo base, L2 y ruido gaussiano alcanzaban una precisión de entrenamiento cercana a 1.0 y mantenían una brecha de alrededor de 0.30. El aumento de datos la reducía a aproximadamente 0.09. BatchNorm conservaba una brecha mayor, próxima a 0.23: parte de su utilidad parecía venir de estabilizar la optimización, no solo de impedir la memorización.

Lo más interesante apareció al leer juntos precisión y estructura interna.

## La zona intermedia

Los modelos fuertes tendían a situarse en una diversidad interna intermedia, especialmente en fc1. Una diversidad muy baja parecía compresión o infrautilización de la representación; una excesiva, memorización o especialización ruidosa.

El modelo base no era simplemente peor por tener menos precisión. En CIFAR-10 producía porcentajes de estados únicos casi máximos y una entropía alta en fc1. Utilizaba muchos estados, pero esa diversidad no se traducía en generalización. Aumento de datos y BatchNorm comprimían la distribución manteniendo variedad suficiente para clasificar.

Dropout fue particularmente interesante. No ganó en validación limpia, pero produjo una fc1 mucho más comprimida y después mostró una fuerte robustez a perturbaciones de parámetros. Mirando solo la precisión, parecía aceptable sin más. Mirando geometría y perturbaciones, era un regularizador cualitativamente distinto.

## El tiempo también importa

No inspeccioné solo el checkpoint final. Seguí los estados internos durante 60 épocas. En muchos casos, la precisión subía rápido durante las primeras 10 épocas y después se saturaba, mientras la diversidad interna seguía aumentando.

En SVHN se veía especialmente bien. El modelo base y el de ruido gaussiano alcanzaban aproximadamente un 90% de precisión pronto, pero sus porcentajes de estados únicos seguían creciendo hasta el final. El aumento de datos crecía más despacio y terminaba con una brecha de generalización menor.

Es una idea útil como diagnóstico: a partir de cierto momento, entrenar más puede complicar la representación sin mejorar significativamente la validación. La red sigue cambiando por dentro, pero no necesariamente de una forma que ayude.

## La robustez cambió el orden

Realicé dos experimentos de perturbación.

Primero añadí ruido gaussiano a las imágenes de validación, sin modificar los pesos. El mejor modelo limpio no fue automáticamente el más robusto. Aumento de datos y BatchNorm se degradaron mucho con ruido gaussiano intenso a nivel de píxel. En CIFAR-10, con sigma = 0.2, conservaron aproximadamente el 49.7% y el 34.9% de su precisión limpia. El modelo base y L2 conservaron alrededor del 71.3% y el 69.0%.

Eso no convierte al modelo base en mejor. Indica que la robustez depende de la perturbación. El aumento de datos entrenaba invariancias a recortes y volteos horizontales, no a ruido gaussiano arbitrario. Un método puede mejorar la generalización limpia y seguir siendo frágil ante otra familia de corrupciones.

Después añadí ruido gaussiano directamente a los pesos de conv1, conv3 y fc1. Era una aproximación práctica a la geometría del mínimo: si una pequeña perturbación destruye la precisión, probablemente estamos en una región más aguda de la superficie de pérdida.

Aquí destacó Dropout. Con sigma = 0.15 en los pesos mantuvo buenos resultados entre capas y datasets. En CIFAR-10 conservó el 83.1% en conv1, el 77.5% en conv3 y el 86.1% en fc1. BatchNorm, pese a su buen rendimiento limpio, se degradó más en las capas convolucionales: 51.2% en conv1 y 42.0% en conv3.

El radar resume esa tensión. Cada eje se normaliza dentro del dataset; no es una escala absoluta. Muestra un perfil de precisión, robustez al ruido en datos, robustez al ruido en los pesos de conv1/conv3/fc1 y consistencia entre capas. No sirve para coronar a un ganador, sino para ver la forma de cada regularizador.

El perfil puede expresarse como un vector multiobjetivo por método y dataset:

```text
v_method,dataset =
  [
    val_acc,
    retention_data_noise_sigma_0.20,
    retention_weight_noise_conv1_sigma_0.15,
    retention_weight_noise_conv3_sigma_0.15,
    retention_weight_noise_fc1_sigma_0.15,
    inter_layer_consistency
  ]

normalized_axis_value =
  15 + 85 * (x - min_axis) / (max_axis - min_axis)
```

El suelo en 15 mantiene visible un método débil sin fingir que vale cero. El escalado min-max por eje evita mezclar porcentajes brutos con medidas heterogéneas de robustez.

![Comparativa radar de regularizadores en precisión, robustez al ruido de datos y pesos, y consistencia entre capas, en CIFAR-10, SVHN, CIFAR-100 y FashionMNIST.](/blog-plots/regularization-radar.png)

Hay algo difícil de ignorar: ningún método llena la estrella. El aumento de datos impulsa la precisión limpia, especialmente cuando las transformaciones coinciden con invariancias de la tarea, pero no domina toda la robustez. Dropout no luce tanto en la tabla de precisión y, sin embargo, tiene una huella amplia frente al ruido en pesos. BatchNorm es fuerte en varios dominios, pero puede volverse frágil al perturbar parámetros convolucionales. L2 mantiene a menudo un espacio interno amplio; una entropía aparentemente saludable no garantiza generalización.

Me gusta este gráfico porque dificulta escribir «el regularizador X es el mejor». Obliga a preguntar: ¿en qué eje, en qué dataset y ante qué perturbación?

La conclusión no es que BatchNorm sea malo. Es que un mismo método puede ser excelente para optimizar y frágil ante cambios en los parámetros. Esa diferencia desaparece si la única columna que leemos es la precisión.

## Qué me llevo a la práctica

Al terminar, ya no veía la regularización como una clasificación de técnicas. La veía como un conjunto de sesgos con fallos diferentes.

El aumento de datos era la mejor opción para priorizar validación en imágenes limpias. Dropout destacaba cuando importaba la estabilidad de parámetros. L2 e incluso el modelo base podían resistir relativamente bien el ruido estocástico de entrada, sacrificando precisión limpia. BatchNorm era potente, pero agudo en el extractor convolucional.

Es una respuesta menos ordenada que un ranking, pero más cercana a cómo utilizaría los resultados. Para un modelo pequeño de visión con entradas limpias e invariancias bien capturadas, empezaría por aumento de datos. Si importaran compresión, poda, pesos ruidosos o pequeñas perturbaciones de hardware, volvería a mirar Dropout. Y una combinación de entropía alta, muchos estados únicos y una brecha grande me parecería una alerta, no «una representación rica» por defecto.

La respuesta a «¿qué regularizador es mejor?» era, por tanto, condicional:

```text
si la prioridad es precisión limpia:
  aumento de datos suele ser la opción más fuerte
si la prioridad es planitud / robustez de parámetros:
  Dropout resulta más atractivo
si la prioridad es retención ante ruido de entrada:
  inspeccionar L2 y el comportamiento del modelo base
si el dataset es demasiado fácil o difícil para la arquitectura:
  la precisión puede ocultar el efecto interno
```

El resultado principal no fue un regularizador nuevo, sino un argumento de medición. Las activaciones pueden ayudar a diagnosticar regularización insuficiente o excesiva. No sustituyen la validación; explican parte de lo que comprime.

## Qué ampliaría

Repetiría el protocolo en arquitecturas más profundas, como ResNet-18 o VGG-16. Estudiaría combinaciones de regularizadores, porque los modelos reales rara vez utilizan solo uno. También compararía similitud de representaciones con CKA, para comprobar si métricas diferentes corresponden realmente a espacios estructuralmente distintos.

A más largo plazo, me interesa una herramienta de diagnóstico automático: entrenar, extraer activaciones, calcular curvas de entropía, dispersión y estados únicos, y advertir de representaciones colapsadas o excesivamente dispersas sin esperar únicamente a la validación tardía.

Ese fue el valor del TFG para mí: dejar de ver la CNN como una caja negra que emite una cifra de precisión y empezar a verla como un sistema dinámico cuyos estados se pueden medir, comparar y cuestionar.
