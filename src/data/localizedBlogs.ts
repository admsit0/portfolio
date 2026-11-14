import regularization from "@/content/blog/es/regularization.md?raw";
import diffusion from "@/content/blog/es/diffusion.md?raw";
import athenai from "@/content/blog/es/athenai.md?raw";
import atlas from "@/content/blog/es/atlas.md?raw";
import { blogPosts, type BlogPost } from "./blogPosts";
import { localeFor, type Language } from "@/i18n/languages";

type Translation = Pick<
  BlogPost,
  "title" | "subtitle" | "excerpt" | "coverAlt"
> &
  Partial<Pick<BlogPost, "content">>;

const spanish: Record<string, Translation> = {
  "regularization-in-cnns-internal-activations": {
    title: "Regularización en CNN: mirar dentro de la red",
    subtitle:
      "Cómo mi TFG estudió la regularización como un cambio en la geometría de las representaciones, no solo en la curva de validación.",
    excerpt:
      "Comparé siete regularizadores en una misma CNN para estudiar activaciones ocultas, robustez y generalización.",
    coverAlt: "Radar de regularizadores en precisión y robustez",
    content: regularization,
  },
  "diffusion-models-from-sdes-to-images": {
    title: "Modelos de difusión: de las SDE a las imágenes",
    subtitle:
      "Un recorrido por el sistema de generación basado en score que construí con procesos VE, VP y Sub-VP, y distintos samplers.",
    excerpt:
      "Una plataforma modular en PyTorch para experimentar con SDE, calendarios de ruido, samplers, condicionamiento, imputación y evaluación.",
    coverAlt: "Muestras de difusión que progresan de ruido a imágenes",
    content: diffusion,
  },
  "athenai-competition-decision-pipeline": {
    title: "AthenAI: comprimir miles de algoritmos en un estado de RL",
    subtitle:
      "Un pipeline offline con clustering de algoritmos, proxies macro y límites explícitos de backtesting.",
    excerpt:
      "Reconstruí un universo diario de algoritmos, agrupé sus comportamientos en superactivos y construí el estado para RL de carteras.",
    coverAlt: "Diagnósticos de clustering de estrategias de AthenAI",
    content: athenai,
  },
  "atlas-building-a-place-to-learn": {
    title: "Atlas: un lugar para aprender, no solo para leer",
    subtitle:
      "Las decisiones de producto e ingeniería de una plataforma interactiva y bilingüe.",
    excerpt:
      "Por qué construí Atlas alrededor de experimentos reales, componentes reutilizables y perfiles privados, y qué quiero aprender de sus primeros usuarios.",
    coverAlt: "Interfaz real de aprendizaje de Atlas",
    content: atlas,
  },
};

// Italian titles and summaries. A post without Italian `content` keeps
// its English body.
const italian: Record<string, Translation> = {
  "regularization-in-cnns-internal-activations": {
    title: "Regolarizzazione nelle CNN: guardare dentro la rete",
    subtitle:
      "Come la mia tesi triennale ha trattato la regolarizzazione come un cambiamento nella geometria delle rappresentazioni, non solo come una curva di validazione migliore.",
    excerpt:
      "Ho confrontato sette regolarizzatori sulla stessa CNN per studiare attivazioni nascoste, robustezza e generalizzazione.",
    coverAlt: "Radar dei regolarizzatori per accuratezza e robustezza",
  },
  "diffusion-models-from-sdes-to-images": {
    title: "Modelli di diffusione: dalle SDE alle immagini",
    subtitle:
      "Un percorso nel sistema di generazione basato sullo score che ho costruito con processi VE, VP e Sub-VP e diversi sampler.",
    excerpt:
      "Una piattaforma modulare in PyTorch per sperimentare con SDE, schedule del rumore, sampler, condizionamento, imputazione e valutazione.",
    coverAlt: "Campioni di diffusione che passano dal rumore alle immagini",
  },
  "athenai-competition-decision-pipeline": {
    title: "AthenAI: comprimere migliaia di algoritmi in uno stato di RL",
    subtitle:
      "Una pipeline offline con clustering degli algoritmi, proxy macroeconomici e limiti espliciti del backtesting.",
    excerpt:
      "Ho ricostruito un universo giornaliero di algoritmi, raggruppato i loro comportamenti in superasset e costruito lo stato per il RL di portafoglio.",
    coverAlt: "Diagnostica del clustering delle strategie di AthenAI",
  },
  "atlas-building-a-place-to-learn": {
    title: "Atlas: un posto per imparare, non solo per leggere",
    subtitle:
      "Le scelte di prodotto e di ingegneria dietro una piattaforma interattiva e bilingue.",
    excerpt:
      "Perché ho costruito Atlas attorno a esperimenti veri, componenti riutilizzabili e profili privati, e cosa voglio imparare dai primi utenti.",
    coverAlt: "La vera interfaccia di apprendimento di Atlas",
  },
};

const translations: Partial<Record<Language, Record<string, Translation>>> = {
  es: spanish,
  it: italian,
};
const readTime: Record<Language, string> = {
  en: "min read",
  es: "min de lectura",
  it: "min di lettura",
};

export function localizedBlogs(language: Language): BlogPost[] {
  if (language === "en") return blogPosts;
  const posts = translations[language] ?? {};
  return blogPosts.map((post) => ({
    ...post,
    ...posts[post.slug],
    displayDate:
      new Intl.DateTimeFormat(localeFor(language), {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Europe/Madrid",
      }).format(new Date(post.date + "T12:00:00Z")) +
      (post.displayDate.includes("09:00") ? ", 09:00" : ""),
    readTime: post.readTime.replace("min read", readTime[language]),
  }));
}
