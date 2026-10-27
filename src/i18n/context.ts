import { createContext } from "react";

export type Language = "en" | "es";
export type Translate = (english: string, spanish?: string) => string;
export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translate;
} | null>(null);
