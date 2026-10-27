import regularization from "@/content/blog/es/regularization.md?raw";
import diffusion from "@/content/blog/es/diffusion.md?raw";
import athenai from "@/content/blog/es/athenai.md?raw";
import atlas from "@/content/blog/es/atlas.md?raw";
import { blogPosts, type BlogPost } from "./blogPosts";
import type { Language } from "@/i18n/context";

const translations: Record<
  string,
  Pick<BlogPost, "title" | "subtitle" | "excerpt" | "content" | "coverAlt">
> = {
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

export function localizedBlogs(language: Language): BlogPost[] {
  if (language === "en") return blogPosts;
  return blogPosts.map((post) => ({
    ...post,
    ...translations[post.slug],
    displayDate: new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Madrid",
    }).format(new Date(post.date + "T12:00:00Z")) + (post.displayDate.includes('09:00') ? ', 09:00' : ''),
    readTime: post.readTime.replace("min read", "min de lectura"),
  }));
}
