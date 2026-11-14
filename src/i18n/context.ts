import { createContext } from "react";
import type { Language } from "./languages";

export {
  languageNames,
  languages,
  localeFor,
  type Language,
} from "./languages";

// t(english, spanish?): Spanish comes from the second argument or
// src/i18n/spanish.ts; Italian always comes from src/i18n/italian.ts,
// keyed by the English text.
export type Translate = (english: string, spanish?: string) => string;
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translate;
} | null>(null);
