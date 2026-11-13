// Proposed public copy. Private notes informed the tone, not the details.
import { atlasFacts } from "./atlas";

export const personalContent = {
  hero: {
    statement: {
      en: "AI engineer in Madrid. I'm trying to stop LLMs from lying, I lead a community of 275 students, and I'm building Atlas so people can learn AI hands-on.",
      es: "Ingeniero de IA en Madrid. Intento que los LLMs dejen de mentir, presido una comunidad de 275 estudiantes y construyo Atlas para aprender IA tocando.",
    },
    aside: {
      en: "Off-screen: I play basketball, and one day I'll start a non-profit.",
      es: "Fuera de la pantalla: juego al baloncesto y algún día fundaré una asociación sin ánimo de lucro.",
    },
  },
  // Each name is written in its own language; levels match the CV.
  languages: [
    { lang: "es", name: "Español" },
    { lang: "it", name: "Italiano" },
    { lang: "en", name: "English" },
    { lang: "fr", name: "Français" },
  ],
  // "Right now" section on the home page. Update `updated` whenever a line changes.
  // `facet` picks the accent colour: research, community, build or personal.
  now: {
    updated: "2026-11-13",
    items: [
      {
        id: "research",
        facet: "research",
        label: { en: "Researching", es: "Investigando" },
        text: {
          en: "My MSc thesis: editing latent representations in LLMs so they unlearn deceptive behaviour.",
          es: "Mi TFM: editar representaciones latentes en LLMs para que desaprendan el comportamiento engañoso.",
        },
        link: {
          href: "https://github.com/admsit0/slides-llm-alignment-sota",
          en: "State-of-the-art slides",
          es: "Diapositivas del estado del arte",
        },
      },
      {
        id: "building",
        facet: "build",
        label: { en: "Building", es: "Construyendo" },
        text: {
          en: `Atlas, a bilingual place to learn AI by experimenting: ${atlasFacts.lessons} lessons and ${atlasFacts.laboratories} interactive labs so far.`,
          es: `Atlas, un sitio bilingüe para aprender IA experimentando: ${atlasFacts.lessons} lecciones y ${atlasFacts.laboratories} laboratorios interactivos por ahora.`,
        },
        link: { href: "/atlas", en: "About Atlas", es: "Sobre Atlas" },
      },
      {
        id: "organising",
        facet: "community",
        label: { en: "Organising", es: "Organizando" },
        text: {
          en: "GDG on Campus UAM, which I co-founded and have led as president since July 2026. We are 275 members.",
          es: "GDG on Campus UAM, que cofundé y presido desde julio de 2026. Somos 275 miembros.",
        },
        link: { href: "/gdg", en: "About GDG UAM", es: "Sobre GDG UAM" },
      },
      {
        id: "studying",
        facet: "research",
        label: { en: "Studying", es: "Estudiando" },
        text: {
          en: "MSc in Artificial Intelligence at Universidad Autónoma de Madrid (2026–2027).",
          es: "Máster en Inteligencia Artificial en la Universidad Autónoma de Madrid (2026–2027).",
        },
      },
      {
        id: "basketball",
        facet: "personal",
        label: { en: "Playing", es: "Jugando" },
        text: {
          en: "Basketball. I just like playing it.",
          es: "Al baloncesto. Simplemente me gusta jugar.",
        },
      },
      {
        id: "reading",
        facet: "personal",
        cite: "The Intelligent Investor",
        label: { en: "Reading", es: "Leyendo" },
        text: {
          en: "The Intelligent Investor, by Benjamin Graham.",
          es: "The Intelligent Investor, de Benjamin Graham.",
        },
      },
    ],
  },
  introduction: {
    en: "I work in AI, but most of what interests me starts before the code: a question I cannot quite leave alone, an idea worth testing, or a conversation that changes how I see something.",
    es: "Trabajo en IA, pero muchas de las cosas que me interesan empiezan antes del código: una pregunta que no consigo quitarme de la cabeza, una idea que merece una prueba o una conversación que cambia cómo veo algo.",
  },
  interests: [
    {
      id: "understanding",
      title: {
        en: "Understanding, not just using.",
        es: "Entender, no solo utilizar.",
      },
      body: {
        en: "AI is one way into a much wider interest: how we learn, think, and make sense of things. I enjoy the point where a technical question becomes a question about people, and the other way around.",
        es: "La IA es una puerta a un interés más amplio: cómo aprendemos, pensamos y damos sentido a las cosas. Me interesa ese punto en el que una pregunta técnica acaba siendo una pregunta sobre las personas, y al revés.",
      },
    },
    {
      id: "making",
      title: { en: "Giving an idea a shape.", es: "Darle forma a una idea." },
      body: {
        en: "Sometimes that means building something. Sometimes it means reading a little more, writing it down, or taking it apart until I understand it. I like moving between thinking and making; neither feels complete on its own.",
        es: "A veces significa construir algo. Otras, leer un poco más, escribirlo o desmontarlo hasta entenderlo. Me gusta ir de pensar a hacer y volver: por separado, las dos cosas se me quedan cortas.",
      },
    },
    {
      id: "perspective",
      title: {
        en: "Looking outside my own field.",
        es: "Mirar fuera de mi campo.",
      },
      body: {
        en: "Not everything needs to become a project. Books, art, music, and unfamiliar places matter to me in their own right. They are also a good reminder that there are other ways of paying attention.",
        es: "No todo tiene que convertirse en un proyecto. Los libros, el arte, la música y los lugares que no conozco me interesan por sí mismos. También me recuerdan que hay otras formas de prestar atención.",
      },
    },
    {
      id: "people",
      title: {
        en: "Doing things with other people.",
        es: "Hacer cosas con otras personas.",
      },
      body: {
        en: "I like the moment when a conversation turns into something we can actually do together. Sharing what I am learning, hearing a different approach, and helping someone get started are part of the work I want to keep doing.",
        es: "Me gusta cuando una conversación se convierte en algo que podemos hacer juntos. Compartir lo que aprendo, escuchar otra forma de hacerlo y ayudar a alguien a empezar también forman parte del trabajo que quiero seguir haciendo.",
      },
    },
  ],
  direction: {
    en: "I do not have a neat label for everything I want to do. The direction is clearer: keep learning deeply, make things that help someone, and leave room for ideas that need more time.",
    es: "No tengo una etiqueta que reúna todo lo que quiero hacer. Sí tengo algo más clara la dirección: seguir aprendiendo a fondo, hacer cosas que le sirvan a alguien y dejar sitio a ideas que necesitan más tiempo.",
  },
};
