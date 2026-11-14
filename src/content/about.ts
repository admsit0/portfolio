// Public copy for /about: edit each `en` and `es` field freely.
// Keep figures out of this page; they live (dated) on /atlas and /gdg.

export const aboutContent = {
  intro: {
    en: "This is the longer version of the home page: what I work on, why, and what I would like to do next. The CV, projects and results are in the technical portfolio.",
    es: "Esta es la versión larga de la home: en qué trabajo, por qué y qué me gustaría hacer después. El CV, los proyectos y los resultados están en el portfolio técnico.",
  },
  sections: [
    {
      id: "inside-models",
      title: {
        en: "Looking inside models",
        es: "Mirar dentro de los modelos",
      },
      body: {
        en: "Both of my theses ask what happens inside a network, not only at its output. In the bachelor's thesis that meant measuring entropy and activation states in CNNs trained with seven different regularisers. In the MSc thesis it means looking for deceptive behaviour in the latent representations of an LLM. If a model can deceive, I would rather find where that happens and change it than only filter what it says.",
        es: "Mis dos trabajos de fin de estudios se preguntan qué pasa dentro de una red, no solo a la salida. En el TFG eso significó medir entropía y estados de activación en CNNs entrenadas con siete regularizadores distintos. En el TFM significa buscar el comportamiento engañoso en las representaciones latentes de un LLM. Si un modelo puede engañar, prefiero encontrar dónde ocurre y cambiarlo a limitarme a filtrar lo que dice.",
      },
    },
    {
      id: "atlas",
      title: { en: "Why Atlas exists", es: "Por qué existe Atlas" },
      body: {
        en: "Reading about an algorithm and understanding its decisions are not the same thing. So instead of another set of notes, Atlas lets you change a search heuristic, see which nodes an algorithm visits, or follow a gradient through a small network. It covers symbolic AI, deep learning and generative AI, in English and Spanish, and I keep adding to it.",
        es: "Leer sobre un algoritmo y entender sus decisiones no es lo mismo. Por eso, en vez de otros apuntes, Atlas te deja cambiar una heurística de búsqueda, ver qué nodos visita un algoritmo o seguir un gradiente a través de una red pequeña. Cubre IA simbólica, aprendizaje profundo e IA generativa, en español e inglés, y lo sigo ampliando.",
      },
    },
    {
      id: "organising",
      title: { en: "Organising for others", es: "Organizar para otros" },
      body: {
        en: "I helped found GDG on Campus UAM, kept its accounts as treasurer, and have been its president since July 2026. Most of the work is not on stage: finding rooms and speakers, coordinating teams of six to thirteen people, preparing a Git workshop twice with Ibón de Mingo, or organising our first machine learning contest, and writing its guide, with Ibón and Héctor Tablero.",
        es: "Ayudé a fundar GDG on Campus UAM, llevé sus cuentas como tesorero y lo presido desde julio de 2026. Casi todo el trabajo no se ve desde el público: conseguir salas y ponentes, coordinar equipos de seis a trece personas, preparar dos veces un taller de Git con Ibón de Mingo u organizar nuestro primer concurso de machine learning, y escribir su guía, con Ibón y Héctor Tablero.",
      },
    },
    {
      id: "next",
      title: { en: "What comes next", es: "Lo que viene" },
      body: {
        en: "In 2027 I finish the MSc. After that I want to work as an AI engineer on making language models more reliable, close enough to research to keep asking why a model does what it does. I also want to keep explaining things: Atlas and GDG UAM are where I practise that.",
        es: "En 2027 termino el máster. Después quiero trabajar como ingeniero de IA en hacer que los modelos de lenguaje sean más fiables, lo bastante cerca de la investigación como para seguir preguntándome por qué un modelo hace lo que hace. También quiero seguir explicando cosas: Atlas y GDG UAM son donde lo practico.",
      },
    },
    {
      id: "non-profit",
      title: { en: "Further down the road", es: "A más largo plazo" },
      body: {
        en: "One day I want to start a non-profit. It does not have a name or a date yet, and I would rather not describe it before it is real. What I do have is practice in the unglamorous part of making something exist for other people, and that is what I want to bring to it.",
        es: "Algún día quiero fundar una asociación sin ánimo de lucro. Todavía no tiene nombre ni fecha, y prefiero no describirla antes de que sea real. Lo que sí tengo es práctica en la parte menos vistosa de hacer que algo exista para otras personas, y eso es lo que quiero llevar a ella.",
      },
    },
  ],
};
