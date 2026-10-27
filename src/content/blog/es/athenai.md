En un concurso de finance-RL, lo tentador es ir directamente al agente: elegir PPO, definir acciones, entrenar y dibujar una curva de capital bonita. AthenAI me llevó en la dirección contraria.

Lo difícil no era el acrónimo del agente. Era construir un estado del que pudiera aprender sin engañarnos.

Lo enfoqué menos como «sé de finanzas» y más como un problema de representación con reglas estrictas de leakage. Cada idea debía pasar una prueba: ¿existiría esta señal al decidir o está codificando rendimiento futuro por accidente? Si no estaba claro, la variable pasaba a diagnóstico o trabajo futuro.

El universo contenía miles de archivos de algoritmos de trading propietarios, con registros OHLC intradía, y un archivo de operaciones del benchmark. Tratar cada algoritmo como un activo y asignar capital directamente era frágil:

- Muchas series eran cortas, dispersas, constantes o defectuosas.
- El universo no era estacionario.
- La predicción no debía depender de APIs macroeconómicas en directo, aunque sus etiquetas sirvieran para entrenar.

Construí un pipeline offline por capas:

```text
raw algorithm CSVs
  -> daily close reconstruction
  -> quality gate
  -> return and trade encoding
  -> personality features
  -> behavioral clustering
  -> cluster-level time series
  -> rolling state features
  -> macro proxy layers
  -> RL/backtesting interface
```

Suena menos espectacular que «entrené un bot de trading», pero describe mejor el trabajo.

![Pipeline offline de AthenAI: archivos originales, retornos diarios, personalidad, clustering, proxies y conexión con RL y backtesting.](/blog-plots/athenai-pipeline.png)

## El concurso como problema de cartera offline

El planteamiento formal era secuencial: en cada fecha se observa el estado del universo de algoritmos y se elige una asignación de capital. La recompensa llega después mediante retornos, ajustados por riesgo y costes.

La acción sobre C unidades invertibles es un vector:

```text
w_t in simplex(C)
sum_c w_t,c = 1
w_t,c >= 0
```

Podemos pensarlo como un MDP con restricciones, estado reconstruido offline y acciones sobre clusters:

```text
s_t = [cluster_features_t, proxy_scores_t, alive_mask_t, w_t-1]
a_t = w_t

r_t+1 =
  dot(w_t, R_t+1)
  - cost_rate * ||w_t - w_t-1||_1
  - risk_penalty * max(0, drawdown_t+1 - drawdown_limit)
```

El último término no pretende ser una recompensa final de producción. Recuerda que no basta con premiar retornos puntuales: también hay que penalizar trayectorias frágiles.

Había demasiados algoritmos para un espacio de acciones manejable. La decisión central fue comprimirlos en «superactivos» basados en comportamiento antes de intentar RL.

El informe delimita el alcance: la capa final es una interfaz DQN/backtesting, no un resultado de PPO terminado. PPO y SAC son candidatos para asignación continua futura. El trabajo actual se concentra en reconstrucción, estados, clustering, proxies y estructura de RL.

## Reconstruir el panel diario

Cada archivo contiene OHLC intradía, timestamps y cierres. Primero reduzco cada serie a su último cierre del día:

```text
P_i,t = last close observed for algorithm i on day t
```

A partir de ahí calculo retornos diarios simples y logarítmicos:

```text
r_i,t = clip(P_i,t / P_i,t-1 - 1, -0.50, 0.50)
l_i,t = clip(log(P_i,t) - log(P_i,t-1), -0.50, 0.50)
```

El clipping es amplio a propósito. No elimina variaciones normales: evita que saltos de cierre defectuosos dominen estadísticas móviles, PCA y distancias.

En el análisis regenerado del informe se leyeron 14,761 archivos y se produjeron 8,879,120 filas diarias. De 13,663 identificadores con filas utilizables, 9,491 pasaron el filtro: aproximadamente el 69.5%, con mediana de 639 observaciones y cobertura de calendario del 84.6%.

Ese es el primer resultado importante. Antes del modelo existe un universo reconstruido.

## Filtrar calidad sin filtrar rendimiento futuro

El filtro no elegía algoritmos buenos. Elegía series utilizables.

```text
accepted if:
  n_i >= 60
  coverage_i >= 0.70
  unique_closes_i > 2
  std(return_i) > 1e-9
```

Exigía observaciones suficientes, cobertura, más de dos cierres distintos y volatilidad no despreciable. Filtrar por Sharpe, retorno o drawdown habría introducido rendimiento ex post en todo el análisis. Solo excluí series demasiado cortas, incompletas o constantes.

La distribución aceptada mantenía un pico en cero y colas gruesas: muchos algoritmos apenas se mueven un día concreto y unos pocos lo hacen de forma discreta. El informe registra retorno diario medio de aproximadamente -0.008%, desviación típica de 0.493% y cuantiles 1%/99% de -1.67% y 1.53%.

## El benchmark era una traza, no un oráculo

El archivo contenía 5,394 operaciones sobre 271 algoritmos, con mediana de permanencia de 26 días naturales. Incluía producto, volumen con signo, fechas de apertura y cierre, capital invertido, AUM y patrimonio al final del día.

Lo codifiqué como una traza de posiciones:

```text
h_i,t = sum of signed volumes for open trades in algorithm i at time t
w_i,t = h_i,t / (epsilon + sum_k abs(h_k,t))
```

Sirve para auditoría y comprobaciones: permite ver cómo se desplazaba el benchmark por el universo. No debe tratarse como etiqueta de una política óptima. Operaba solo 271 algoritmos y las aperturas se concentraban al final de la muestra. Es informativo, pero arriesgado como único objetivo de imitación.

## La personalidad de un algoritmo

Los algoritmos no debían ser columnas anónimas. Cada uno tiene un perfil: volatilidad, forma del drawdown, riesgo de cola, autocorrelación, momentum y estabilidad. Lo llamé personalidad estática.

Para cada algoritmo aceptado calculé:

- Media y desviación típica de retornos.
- Volatilidad anualizada.
- Ratios Sharpe y Sortino.
- Cuantiles y ratios de cola.
- Asimetría y exceso de curtosis.
- Drawdown máximo e índice ulcer.
- Profundidad media y tiempo en drawdown.
- Autocorrelación de retornos a un día.
- Autocorrelación de retornos absolutos.
- Momentum logarítmico a 120 días.
- Diagnósticos de estabilidad entre mitades de la muestra.

Las fórmulas habituales son sencillas, pero útiles:

```text
Sharpe_i  = sqrt(252) * mean(r_i) / std(r_i)
Sortino_i = sqrt(252) * mean(r_i) / downside_std(r_i)

drawdown_i,t = P_i,t / max_previous_price_i,t - 1
max_drawdown_i = min_t drawdown_i,t
```

El vector aportaba significado económico al clustering. Dos algoritmos con la misma media pueden tener colas, persistencia de caídas y exposición a factores completamente distintas.

## Factores internos y exposiciones

También construí factores internos. El más sencillo es el mercado del universo:

```text
market_factor_t = mean return across alive algorithms at time t
```

Calculé factores PCA sobre retornos estandarizados y exposiciones ridge de cada algoritmo al mercado y a esos factores. No buscaba un modelo factorial perfecto, sino añadir información de movimiento conjunto.

La entrada del clustering era aproximadamente:

```text
algorithm_vector_i =
  [personality_i, factor_exposures_i, R2_i, residual_volatility_i]
```

Escalé con mediana y rango intercuartílico antes de agrupar.

## Clusters de comportamiento como superactivos

La configuración principal, behavioral_k100_v1, utiliza 100 clusters sobre personalidad y diagnósticos factoriales escalados de forma robusta. También implementé una familia de clustering por correlación y embedding PCA, pero la de 100 grupos fue la compresión principal.

Los retornos se agregan sobre algoritmos vivos:

```text
R_c,t = mean return of algorithms assigned to cluster c and alive at time t
alive_ratio_c,t = alive algorithms in cluster c at time t / total algorithms in cluster c
```

En vez de pedir al modelo que entienda unas 9.5k series, el estado pasa a tener 100 superactivos con metadatos, características móviles y máscaras de disponibilidad. No es un cambio cosmético: es la contribución central.

![Diagnósticos de clustering: proyección PCA robusta, tamaños de grupos, riesgo-retorno y perfil de acierto del momentum.](/blog-plots/athenai-clusters.png)

Es la figura que mostraría primero en una entrevista. Explica más que «utilicé k-means». PCA ayuda a detectar outliers y movimiento conjunto. La distribución de tamaños revela si hay unos pocos grupos gigantes y muchos diminutos. Los paneles de riesgo-retorno y acierto aportan información utilizable por el estado de RL. Los clusters no son etiquetas decorativas: son el vocabulario del espacio de acciones.

## Características del estado con ventanas

Utilicé varios horizontes:

- 5 y 10 días para reacción rápida y saltos.
- 20 días para volatilidad realizada y una visión mensual.
- 60 días para proxies trimestrales de Sharpe y drawdown.
- 120 días para momentum lento de la personalidad.

Desde los retornos de clusters calculé amplitud, dispersión, colas, volatilidad, correlaciones móviles, saltos y proxies de drawdown.

```text
breadth_t = fraction of clusters with positive return at t
dispersion_t = cross-sectional std of cluster returns at t
```

Los regímenes de estrés suelen aparecer como patrones conjuntos: menos amplitud, más correlación, volatilidad mayor y una cola izquierda más pesada. Un retorno agregado no captura esa estructura.

![Estado interno del universo: retorno de mercado, amplitud transversal, volatilidad y correlaciones móviles reconstruidas desde los clusters.](/blog-plots/athenai-state.png)

Por eso no quería un estado formado solo por retornos recientes de cartera. Mercado, amplitud, volatilidad y correlación se mueven a ritmos distintos. La amplitud es ruidosa, pero informa de participación; la volatilidad se agrupa; las correlaciones suben y decaen. El agente debería ver esas diferencias: a veces interesa reducir rotación, otras cambiar clusters y otras desconfiar de los proxies.

## Proxies macro sin dependencia macro en directo

VIX, tipos del Tesoro y factores son útiles como contexto de entrenamiento, pero depender de APIs externas al predecir debilitaría el diseño offline.

La solución intermedia era:

```text
during training:
  fetch external macro/factor data
  create targets
  train internal proxy models from algorithm-universe features

during prediction:
  use only internal features and trained proxy models
```

El informe documenta varias capas.

El **proxy de saltos de VIX** intentaba predecir grandes cambios futuros en log VIX. Su AUC fue aproximadamente 0.50 +/- 0.10: casi un resultado base. La calibración mejoró el error esperado de 0.036 a 0.0007, pero no creó una señal clasificadora fuerte.

El **proxy de dirección de tipos** predecía bajada, neutralidad o subida del Treasury a 10 años en un horizonte de 10 días. Fue el más fuerte: precisión de signo de 80.6% +/- 10.8%, con diagnóstico de leakage por mezcla de etiquetas que separaba objetivos reales y barajados.

El **proxy risk-off interno** utilizaba el mínimo retorno futuro a 10 días del mercado de clusters y marcaba el decil inferior. El umbral regenerado era -0.301% y la tasa positiva 9.93%. Su AUC actual, aproximadamente 0.46 +/- 0.10, indicaba que el objetivo era útil como definición, pero el predictor todavía no era fuerte.

El **monitor de factores** agregaba variables mensuales y predecía signos de factores de tipo Fama-French, especialmente momentum. Con solo 54 observaciones mensuales se trataba como diagnóstico o ampliación, no como señal sólida de producción.

Creo que aquí el informe gana fuerza: incluye resultados negativos. No se trataba de fingir que todos los proxies funcionaban, sino de identificar qué conceptos puede reconstruir el universo y cuáles no.

## La interfaz de RL

Tras clustering y proxies, el estado se expresa como:

```text
s_t = [
  rolling cluster features,
  internal universe state,
  proxy scores/probabilities,
  alive mask,
  previous allocation
]
```

La asignación anterior importa porque los costes dependen de rotación:

```text
portfolio_return_t+1 =
  dot(w_t, cluster_returns_t+1)
  - cost_rate * L1_norm(w_t - w_t-1)
```

El backtest sigue el capital:

```text
E_t+1 = E_t * (1 + portfolio_return_t+1)
```

y registra Sharpe, drawdown máximo, tasa de acierto y Calmar.

El repositorio incluye estructura DQN: replay buffer, target network, selección epsilon-greedy, pérdida Smooth L1 y utilidades de backtesting. Como DQN utiliza acciones discretas, hay que discretizar el simplex: conservar asignación, desplazar peso a un cluster, pasar a efectivo o elegir cestas predefinidas.

Para asignación continua futura tendrían sentido PPO o SAC. El informe no afirma rendimiento PPO terminado, y este artículo tampoco.

## Qué mostraba el benchmark

Los retornos anuales fueron positivos en todos los años disponibles. El mejor, 2022, fue 7.13%; después, 2024 con 6.99%. El menor fue 2020 con 0.54%, teniendo en cuenta que la serie mensual empieza en junio. Componer los retornos mensuales dio un 22.95% acumulado y drawdown máximo de -1.87% a resolución mensual.

![Diagnósticos del benchmark: retornos anuales, acumulado mensual, mapa de calor mensual y drawdown realizado.](/blog-plots/athenai-benchmark.png)

Ese drawdown debe leerse con cuidado. Procede de retornos mensuales, no de capital intramensual inventado. Hay que informar de la resolución disponible, no completar sus huecos con imaginación.

## Qué consiguió realmente el proyecto

No fue una política de trading terminada. Fue un pipeline de estados y modelado auditable:

- Reconstrucción del universo en un panel diario.
- Filtro por fiabilidad, no rendimiento ex post.
- Operaciones del benchmark codificadas como traza.
- Personalidad estática de cada algoritmo aceptado.
- Compresión de unas 9.5k series en 100 clusters.
- Retornos agregados, máscaras y variables móviles.
- Entrenamiento y evaluación de proxies con controles de leakage.
- Estado expuesto a la interfaz DQN/backtesting.

La observación principal fue que el clustering cambiaba el problema de aprendizaje: miles de columnas ruidosas y dispersas se convertían en menos series coherentes, con metadatos interpretables.

## La lección

Mucho trabajo de ML aplicado se gana o se pierde antes de entrenar. Aquí las decisiones relevantes no estaban solo en el algoritmo de RL, sino en la representación:

```text
¿Qué es un activo?
¿Qué significa estar vivo?
¿Qué filtros filtran rendimiento futuro?
¿Qué señales macro están disponibles al predecir?
¿Qué debe ver el espacio de acciones?
¿Cómo informamos de resultados no demostrados?
```

AthenAI me enseñó a construir un sistema offline como una cadena de evidencia. Cada transformación necesita un motivo, cada objetivo necesita un análisis de leakage y cada afirmación final debe limitarse a lo que apoyan los artefactos regenerados.

Esa disciplina hace que un proyecto de concurso siga siendo útil después del concurso.
