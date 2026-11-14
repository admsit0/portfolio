import type { Language } from "./languages";

type Dictionary = Record<string, string>;

// English needs no dictionary. Spanish and Italian are separate chunks,
// loaded only when that language is in use.
const loaded: Partial<Record<Language, Dictionary>> = { en: {} };
const loaders: Record<Exclude<Language, "en">, () => Promise<Dictionary>> = {
  es: () => import("./spanish").then((module) => module.spanish),
  it: () => import("./italian").then((module) => module.italian),
};

export const dictionaryFor = (language: Language): Dictionary =>
  loaded[language] ?? {};

export async function loadDictionary(language: Language) {
  if (language !== "en" && !loaded[language])
    loaded[language] = await loaders[language]();
}
