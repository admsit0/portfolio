import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./context";
import { spanish } from "./spanish";
import { italian } from "./italian";
import {
  resolveLanguage,
  updateExplicitLanguageUrl,
} from "./languagePreference";

const initialLanguage = (): Language => {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem("adam-language");
  } catch {
    /* Storage can be blocked. */
  }
  return resolveLanguage(window.location.search, stored);
};

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, updateLanguage] = useState<Language>(initialLanguage);
  const setLanguage = useCallback((next: Language) => {
    const href = window.location.href;
    const nextHref = updateExplicitLanguageUrl(href, next);
    if (nextHref !== href) {
      window.history.replaceState(window.history.state, "", nextHref);
    }
    updateLanguage(next);
  }, []);
  const t = useCallback(
    (english: string, translated?: string) => {
      if (language === "en") return english;
      const key = english.trim().replace(/\s+/g, " ");
      if (language === "it") return italian[key] ?? english;
      return translated ?? spanish[key] ?? english;
    },
    [language],
  );
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("adam-language", language);
    } catch {
      /* Storage can be blocked. */
    }
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
