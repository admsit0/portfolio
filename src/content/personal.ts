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
    en: "My background is engineering: a degree in Data Science and Engineering at UAM, then internships at GMV, building a RAG system over intelligence data, and at Accenture Song, building MCP servers and AI agents. What keeps pulling me in, though, is what happens inside a model, and explaining it to someone who is just starting.",
    es: "Mi base es la ingeniería: el grado en Ciencia e Ingeniería de Datos en la UAM y prácticas en GMV, montando un sistema RAG sobre datos de inteligencia, y en Accenture Song, construyendo servidores MCP y agentes de IA. Pero lo que más me tira es lo que pasa dentro de un modelo, y contárselo a quien está empezando.",
  },
  // Second paragraph of the introduction.
  context: {
    en: "That is why my two theses look inside networks, why I build Atlas, and why I spend part of the week organising workshops at GDG UAM.",
    es: "Por eso mis dos trabajos de fin de estudios miran dentro de las redes, por eso construyo Atlas y por eso dedico parte de la semana a organizar talleres en GDG UAM.",
  },
  interests: [
    {
      id: "understanding",
      title: {
        en: "Understanding, not just using.",
        es: "Entender, no solo utilizar.",
      },
      body: {
        en: "In my bachelor's thesis I measured how seven regularisation techniques change the internal activations of a CNN, not just its accuracy. My MSc thesis asks the same kind of question of LLMs: can you find where deceptive behaviour lives in the latent representations, and edit it out?",
        es: "En el TFG medí cómo siete técnicas de regularización cambian las activaciones internas de una CNN, no solo su precisión. El TFM le hace la misma pregunta a los LLMs: ¿se puede encontrar dónde vive el comportamiento engañoso en las representaciones latentes y quitarlo editándolas?",
      },
    },
    {
      id: "making",
      title: { en: "Giving an idea a shape.", es: "Darle forma a una idea." },
      body: {
        en: `Atlas is where I do this most. Instead of only explaining how a diffusion model removes noise, it shows a small CNN learning to predict that noise, on Atlas's own simulation engine. It now has ${atlasFacts.lessons} lessons and ${atlasFacts.laboratories} interactive labs, in English and Spanish.`,
        es: `Donde más lo hago es en Atlas. En vez de solo explicar cómo un modelo de difusión quita ruido, enseña a una CNN pequeña aprendiendo a predecirlo, con el motor de simulación del propio Atlas. Ya tiene ${atlasFacts.lessons} lecciones y ${atlasFacts.laboratories} laboratorios interactivos, en español e inglés.`,
      },
    },
    {
      id: "perspective",
      title: {
        en: "Looking outside my own field.",
        es: "Mirar fuera de mi campo.",
      },
      body: {
        en: "Not everything has to become a project. I play basketball because I like it. I also got into investing: I won the UAM Investors' League in 2025, and right now I am reading The Intelligent Investor.",
        es: "No todo tiene que convertirse en un proyecto. Juego al baloncesto porque me gusta. También me metí en la inversión: gané la Liga de Inversores de la UAM en 2025 y ahora estoy leyendo The Intelligent Investor.",
      },
    },
    {
      id: "people",
      title: {
        en: "Doing things with other people.",
        es: "Hacer cosas con otras personas.",
      },
      body: {
        en: "With Ibón de Mingo I have given the GDG UAM Git and GitHub workshop twice. In October 2025 it was what we wished someone had told us in first year; in September 2026 we brought real merge conflicts to solve. Most of the people in the room were first- and second-year students.",
        es: "Con Ibón de Mingo he dado dos veces el taller de Git y GitHub de GDG UAM. En octubre de 2025 fue lo que nos habría gustado que nos contaran en primero; en septiembre de 2026 llevamos conflictos de merge reales para resolver. La mayoría de quienes vinieron eran de primero y segundo.",
      },
    },
  ],
  direction: {
    en: "For the next year: finish the thesis, keep adding to Atlas, and keep GDG UAM running workshops for people who are just getting started. Further ahead, I want to start a non-profit.",
    es: "Para el próximo año: terminar el TFM, seguir ampliando Atlas y que GDG UAM siga haciendo talleres para quien está empezando. Más adelante, quiero fundar una asociación sin ánimo de lucro.",
  },
};
