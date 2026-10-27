Hay una diferencia importante entre leer la explicación de un algoritmo y poder seguir una de sus decisiones. Quería que Atlas ayudara a cerrar esa distancia.

La plataforma reúne teoría, ejemplos resueltos, laboratorios y práctica guiada en un mismo recorrido. Incluye IA simbólica, aprendizaje profundo e IA generativa, en inglés y español. La adopción inicial es modesta: **30+ usuarios únicos**, según la cifra que tengo actualmente. Lo tomo como motivo para escuchar, no como validación definitiva del producto.

![Contenidos de IA simbólica y recorrido de aprendizaje en Atlas.](/projects/atlas-learning.png)

## Un recorrido de aprendizaje, no una carpeta de documentos

Cada lección tiene cuatro etapas: **Entender, Explorar, Resolver y Comprobar**. La distinción importa porque cada etapa pide hacer algo diferente.

La explicación presenta el concepto y el ejemplo concreta el razonamiento. El laboratorio permite cambiar entradas e inspeccionar estados. La práctica ofrece pistas progresivas y una solución razonada. Las preguntas explicadas y la autoevaluación ayudan a encontrar lo que merece otra vuelta.

No es un sistema de corrección automática de texto libre. Las respuestas escritas son borradores para comparar con soluciones. Completar una etapa no demuestra dominio, y la interfaz no debería sugerirlo.

## Los experimentos necesitan motores reales

Una simulación no puede ser solo una animación con un nombre convincente. Si cambia una entrada, tiene que cambiar el proceso numérico o lógico. Sus estados intermedios deben poder inspeccionarse y sus límites deben quedar claros.

Los motores específicos están separados de las capas comunes de cuenta y contenido. Así puedo probar cálculos sin la interfaz y añadir una asignatura sin crear otra aplicación con otra autenticación.

```text
manifiesto de asignatura + contenido bilingüe
  -> vistas de aprendizaje comunes
  -> motor aislado y adaptador visual
  -> progreso y preferencias de la cuenta
```

El catálogo actual contiene **157 lecciones y 26 laboratorios interactivos**. Es una fotografía del contenido, no una promesa de cubrir cualquier tema imaginable.

## Una plataforma, no una aplicación por asignatura

La estructura común gestiona navegación, idioma, perfiles, feedback y componentes de aprendizaje. Las asignaturas gestionan su temario. Los plugins gestionan sus cálculos.

Es una restricción útil: una nueva asignatura no debería necesitar su propio sistema de progreso o su propia tarjeta de feedback. Reutilizar también hace que las mejoras lleguen a los contenidos existentes.

Los identificadores estables conservan el progreso al cambiar idioma o selección de asignaturas. Dejar una asignatura no borra lo que ya has hecho.

## El perfil pertenece a la cuenta

Atlas utiliza acceso con Google y un perfil privado en Supabase. El UUID autenticado autoriza la fila, no el nombre mostrado ni el estado guardado en el navegador.

Preferencias, borradores y progreso se guardan automáticamente. La caché del navegador ayuda a conservar cambios pendientes, pero no sustituye la autorización ni crea una identidad alternativa.

## Medir sin pedir datos innecesarios

Las analíticas y el feedback utilizan Supabase Edge Functions y PostgreSQL, separados de la identidad del perfil. El panel de informes es privado.

Los eventos no contienen nombres, correos, fotos, respuestas escritas, borradores ni credenciales. La recogida pasiva respeta desactivación y Global Privacy Control. El feedback deliberado es independiente y no activa las analíticas.

La actividad sirve para ver qué partes se abren y dónde se utiliza ayuda. No demuestra atención ni aprendizaje. Las cifras también dependen de bloqueos, preferencias y cobertura de los eventos.

## Lo siguiente

Me interesa mejorar la relación entre explicación, experimento y práctica, no añadir contenido solo para aumentar el contador. Quiero entender qué recorridos ayudan, dónde se atasca la gente y qué simulaciones hacen visible una idea difícil.

Las primeras personas que lo usan son una oportunidad para aprender de una experiencia real. Todavía no tengo una historia de impacto educativo demostrado que contar. Sí tengo un producto que se puede probar y seguir mejorando.

[Abrir Atlas](https://atlaslearning.es/)
