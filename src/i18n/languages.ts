// Supported languages. No React here, so content files and Node scripts
// can import it.
export const languages = ["en", "es", "it"] as const;
export type Language = (typeof languages)[number];
export const languageNames: Record<Language, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
};
// Locale used for dates and numbers in each language.
export const localeFor = (language: Language) =>
  ({ en: "en-GB", es: "es-ES", it: "it-IT" })[language];
