import { localeFor, type Language } from "@/i18n/languages";

// Snapshot from Atlas's generated catalog, 13 October 2026. Not live analytics.
export const atlasFacts = {
  users: "30+",
  lessons: 157,
  laboratories: 26,
  subjects: 3,
  date: "2026-10-13",
};
// Visible date for the figures above, e.g. "13 October 2026".
export const atlasFactsDate = (language: Language) =>
  new Intl.DateTimeFormat(localeFor(language), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(atlasFacts.date));
// Note under the figures, in each language.
export const atlasFactsNote = (language: Language, withUsers: boolean) => {
  const date = atlasFactsDate(language);
  if (!withUsers)
    return {
      en: `Catalog snapshot: ${date}.`,
      es: `Catálogo a ${date}.`,
      it: `Catalogo al ${date}.`,
    }[language];
  return {
    en: `Usage count reported by me. Content snapshot: ${date}.`,
    es: `Cifra de uso comunicada por mí. Catálogo a ${date}.`,
    it: `Numero di utenti comunicato da me. Catalogo al ${date}.`,
  }[language];
};
export const atlasMedia = {
  overview: "/projects/atlas-learning.png",
  simulations: [
    {
      src: "/projects/atlas-denoising-es.jpg",
      enSrc: "/projects/atlas-denoising-en.jpg",
      en: "A small CNN learning to predict noise on synthetic images. Captured from the real Atlas engine, run locally.",
      es: "Una CNN pequeña aprende a predecir ruido en imágenes sintéticas. Captura del motor real de Atlas ejecutado en local.",
      it: "Una piccola CNN impara a prevedere il rumore su immagini sintetiche. Cattura del vero motore di Atlas eseguito in locale.",
    },
    {
      src: "/projects/atlas-score-es.jpg",
      enSrc: "/projects/atlas-score-en.jpg",
      en: "A known score field and the computed trajectory towards the density. Local capture from Atlas.",
      es: "Campo de score conocido y trayectoria calculada hacia la densidad. Captura local de Atlas.",
      it: "Campo di score noto e traiettoria calcolata verso la densità. Cattura locale di Atlas.",
    },
  ],
};
