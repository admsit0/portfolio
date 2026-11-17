// Proposed public copy. Private notes informed the tone, not the details.
import { atlasFacts } from "./atlas";

type Localized = { en: string; es: string; it: string };
// Workshop and event photos for the home page. Put the files in
// public/photos/ and add 2 or 3 entries; the section stays hidden while
// this list is empty (a dashed placeholder shows only in `npm run dev`).
export type HomePhoto = { src: string; alt: Localized; caption: Localized };
const photos: HomePhoto[] = [];

export const personalContent = {
  // Home page title. The English one must match index.html and
  // scripts/build-static-pages.mjs (checked by tests/static-pages.test.mjs).
  meta: {
    title: {
      en: "Adam Maltoni | AI engineer: LLM alignment, Atlas, GDG UAM",
      es: "Adam Maltoni | Ingeniero de IA: alineamiento de LLMs, Atlas, GDG UAM",
      it: "Adam Maltoni | AI engineer: allineamento degli LLM, Atlas, GDG UAM",
    },
  },
  hero: {
    statement: {
      en: "AI engineer in Madrid. I'm trying to stop LLMs from lying, I lead a community of 275 students, and I'm building Atlas so people can learn AI hands-on.",
      es: "Ingeniero de IA en Madrid. Intento que los LLMs dejen de mentir, presido una comunidad de 275 estudiantes y construyo Atlas para aprender IA tocando.",
      it: "AI engineer a Madrid. Cerco di far smettere di mentire gli LLM, presiedo una community di 275 studenti e costruisco Atlas per imparare l'IA mettendoci le mani.",
    },
    aside: {
      en: "Off-screen: I play basketball, and one day I'll start a non-profit.",
      es: "Fuera de la pantalla: juego al baloncesto y algún día fundaré una asociación sin ánimo de lucro.",
      it: "Lontano dallo schermo: gioco a basket e un giorno fonderò un'associazione no profit.",
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
    updated: "2026-11-18",
    items: [
      {
        id: "research",
        facet: "research",
        label: { en: "Researching", es: "Investigando", it: "Ricerca" },
        text: {
          en: "My MSc thesis: editing latent representations in LLMs so they unlearn deceptive behaviour.",
          es: "Mi TFM: editar representaciones latentes en LLMs para que desaprendan el comportamiento engañoso.",
          it: "La mia tesi magistrale: modificare le rappresentazioni latenti degli LLM perché disimparino il comportamento ingannevole.",
        },
        link: {
          href: "https://admsit0.github.io/slides-llm-alignment-sota/",
          en: "State-of-the-art slides",
          es: "Diapositivas del estado del arte",
          it: "Slide sullo stato dell'arte",
        },
      },
      {
        id: "building",
        facet: "build",
        label: { en: "Building", es: "Construyendo", it: "Costruisco" },
        text: {
          en: `Atlas, a bilingual place to learn AI by experimenting: ${atlasFacts.lessons} lessons and ${atlasFacts.laboratories} interactive labs so far.`,
          es: `Atlas, un sitio bilingüe para aprender IA experimentando: ${atlasFacts.lessons} lecciones y ${atlasFacts.laboratories} laboratorios interactivos por ahora.`,
          it: `Atlas, un posto bilingue per imparare l'IA sperimentando: per ora ${atlasFacts.lessons} lezioni e ${atlasFacts.laboratories} laboratori interattivi.`,
        },
        link: {
          href: "/atlas",
          en: "About Atlas",
          es: "Sobre Atlas",
          it: "Su Atlas",
        },
      },
      {
        id: "organising",
        facet: "community",
        label: { en: "Organising", es: "Organizando", it: "Organizzo" },
        text: {
          en: "GDG on Campus UAM, which I co-founded and have led as president since July 2026. We are 275 members, we have just closed our first machine learning contest, and on 20 November we host a session on the environmental and social impact of AI.",
          es: "GDG on Campus UAM, que cofundé y presido desde julio de 2026. Somos 275 miembros, acabamos de cerrar nuestro primer concurso de machine learning y el 20 de noviembre organizamos una sesión sobre el impacto medioambiental y social de la IA.",
          it: "GDG on Campus UAM, che ho cofondato e presiedo da luglio 2026. Siamo 275 membri, abbiamo appena chiuso la nostra prima gara di machine learning e il 20 novembre organizziamo una sessione sull'impatto ambientale e sociale dell'IA.",
        },
        link: {
          href: "/gdg",
          en: "About GDG UAM",
          es: "Sobre GDG UAM",
          it: "Su GDG UAM",
        },
      },
      {
        id: "studying",
        facet: "research",
        label: { en: "Studying", es: "Estudiando", it: "Studio" },
        text: {
          en: "MSc in Artificial Intelligence at Universidad Autónoma de Madrid (2026–2027).",
          es: "Máster en Inteligencia Artificial en la Universidad Autónoma de Madrid (2026–2027).",
          it: "Laurea magistrale in Intelligenza Artificiale all'Universidad Autónoma de Madrid (2026–2027).",
        },
      },
      {
        id: "basketball",
        facet: "personal",
        label: { en: "Playing", es: "Jugando", it: "Gioco" },
        text: {
          en: "Basketball. I just like playing it.",
          es: "Al baloncesto. Simplemente me gusta jugar.",
          it: "A basket. Semplicemente mi piace giocare.",
        },
      },
      {
        id: "reading",
        facet: "personal",
        cite: "The Intelligent Investor",
        label: { en: "Reading", es: "Leyendo", it: "Leggo" },
        text: {
          en: "The Intelligent Investor, by Benjamin Graham.",
          es: "The Intelligent Investor, de Benjamin Graham.",
          it: "The Intelligent Investor, di Benjamin Graham.",
        },
      },
    ],
  },
  introduction: {
    en: "My background is engineering: a degree in Data Science and Engineering at UAM, then internships at GMV, building a RAG system over intelligence data, and at Accenture Song, building MCP servers and AI agents. What keeps pulling me in, though, is what happens inside a model, and explaining it to someone who is just starting.",
    es: "Mi base es la ingeniería: el grado en Ciencia e Ingeniería de Datos en la UAM y prácticas en GMV, montando un sistema RAG sobre datos de inteligencia, y en Accenture Song, construyendo servidores MCP y agentes de IA. Pero lo que más me tira es lo que pasa dentro de un modelo, y contárselo a quien está empezando.",
    it: "La mia base è l'ingegneria: la laurea in Scienza e Ingegneria dei Dati alla UAM e i tirocini in GMV, dove ho costruito un sistema RAG su dati di intelligence, e in Accenture Song, tra server MCP e agenti di IA. Ma quello che mi attira di più è cosa succede dentro un modello, e spiegarlo a chi sta iniziando.",
  },
  // Second paragraph of the introduction.
  context: {
    en: "That is why my two theses look inside networks, why I build Atlas, and why I spend part of the week organising workshops at GDG UAM.",
    es: "Por eso mis dos trabajos de fin de estudios miran dentro de las redes, por eso construyo Atlas y por eso dedico parte de la semana a organizar talleres en GDG UAM.",
    it: "Per questo le mie due tesi guardano dentro le reti, per questo costruisco Atlas e per questo dedico parte della settimana a organizzare workshop in GDG UAM.",
  },
  photos,
  interests: [
    {
      id: "understanding",
      title: {
        en: "Understanding, not just using.",
        es: "Entender, no solo utilizar.",
        it: "Capire, non solo usare.",
      },
      body: {
        en: "In my bachelor's thesis I measured how seven regularisation techniques change the internal activations of a CNN, not just its accuracy. My MSc thesis asks the same kind of question of LLMs: can you find where deceptive behaviour lives in the latent representations, and edit it out?",
        es: "En el TFG medí cómo siete técnicas de regularización cambian las activaciones internas de una CNN, no solo su precisión. El TFM le hace la misma pregunta a los LLMs: ¿se puede encontrar dónde vive el comportamiento engañoso en las representaciones latentes y quitarlo editándolas?",
        it: "Nella tesi triennale ho misurato come sette tecniche di regolarizzazione cambiano le attivazioni interne di una CNN, non solo la sua accuratezza. La tesi magistrale fa la stessa domanda agli LLM: si può trovare dove vive il comportamento ingannevole nelle rappresentazioni latenti e toglierlo modificandole?",
      },
    },
    {
      id: "making",
      title: {
        en: "Giving an idea a shape.",
        es: "Darle forma a una idea.",
        it: "Dare forma a un'idea.",
      },
      body: {
        en: `Atlas is where I do this most. Instead of only explaining how a diffusion model removes noise, it shows a small CNN learning to predict that noise, on Atlas's own simulation engine. It now has ${atlasFacts.lessons} lessons and ${atlasFacts.laboratories} interactive labs, in English and Spanish.`,
        es: `Donde más lo hago es en Atlas. En vez de solo explicar cómo un modelo de difusión quita ruido, enseña a una CNN pequeña aprendiendo a predecirlo, con el motor de simulación del propio Atlas. Ya tiene ${atlasFacts.lessons} lecciones y ${atlasFacts.laboratories} laboratorios interactivos, en español e inglés.`,
        it: `Dove lo faccio di più è Atlas. Invece di spiegare soltanto come un modello di diffusione toglie il rumore, mostra una piccola CNN che impara a prevederlo, con il motore di simulazione di Atlas. Ha già ${atlasFacts.lessons} lezioni e ${atlasFacts.laboratories} laboratori interattivi, in spagnolo e inglese.`,
      },
    },
    {
      id: "perspective",
      title: {
        en: "Looking outside my own field.",
        es: "Mirar fuera de mi campo.",
        it: "Guardare fuori dal mio campo.",
      },
      body: {
        en: "Not everything has to become a project. I play basketball because I like it. I also got into investing: I won the UAM Investors' League in 2025, and right now I am reading The Intelligent Investor.",
        es: "No todo tiene que convertirse en un proyecto. Juego al baloncesto porque me gusta. También me metí en la inversión: gané la Liga de Inversores de la UAM en 2025 y ahora estoy leyendo The Intelligent Investor.",
        it: "Non tutto deve diventare un progetto. Gioco a basket perché mi piace. Mi sono anche avvicinato agli investimenti: nel 2025 ho vinto la Liga de Inversores della UAM e adesso sto leggendo The Intelligent Investor.",
      },
    },
    {
      id: "people",
      title: {
        en: "Doing things with other people.",
        es: "Hacer cosas con otras personas.",
        it: "Fare cose con altre persone.",
      },
      body: {
        en: "With Ibón de Mingo I have given the GDG UAM Git and GitHub workshop twice. In October 2025 it was what we wished someone had told us in first year; in September 2026 we brought real merge conflicts to solve. Most of the people in the room were first- and second-year students. This autumn, together with Héctor Tablero, we also ran the chapter's first machine learning contest.",
        es: "Con Ibón de Mingo he dado dos veces el taller de Git y GitHub de GDG UAM. En octubre de 2025 fue lo que nos habría gustado que nos contaran en primero; en septiembre de 2026 llevamos conflictos de merge reales para resolver. La mayoría de quienes vinieron eran de primero y segundo. Este otoño, junto a Héctor Tablero, organizamos también el primer concurso de machine learning del grupo.",
        it: "Con Ibón de Mingo ho tenuto due volte il workshop di Git e GitHub di GDG UAM. A ottobre 2025 era quello che avremmo voluto sentirci dire al primo anno; a settembre 2026 abbiamo portato conflitti di merge veri da risolvere. Quasi tutti i partecipanti erano del primo e del secondo anno. Quest'autunno, insieme a Héctor Tablero, abbiamo organizzato anche la prima gara di machine learning del gruppo.",
      },
    },
  ],
  direction: {
    en: "For the next year: finish the thesis, keep adding to Atlas, and keep GDG UAM running workshops for people who are just getting started. Further ahead, I want to start a non-profit.",
    es: "Para el próximo año: terminar el TFM, seguir ampliando Atlas y que GDG UAM siga haciendo talleres para quien está empezando. Más adelante, quiero fundar una asociación sin ánimo de lucro.",
    it: "Per il prossimo anno: finire la tesi magistrale, continuare ad ampliare Atlas e far sì che GDG UAM continui a organizzare workshop per chi sta iniziando. Più avanti voglio fondare un'associazione no profit.",
  },
};
