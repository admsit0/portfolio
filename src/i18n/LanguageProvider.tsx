import { useCallback, useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./context";
import { dictionaryFor, loadDictionary } from "./dictionaries";
import { updateExplicitLanguageUrl } from "./languagePreference";

// `initialLanguage` comes from detectLanguage() in the browser and is "en"
// when prerendering. Its dictionary must already be loaded.
export default function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const [language, updateLanguage] = useState<Language>(initialLanguage);
  const setLanguage = useCallback((next: Language) => {
    const href = window.location.href;
    const nextHref = updateExplicitLanguageUrl(href, next);
    if (nextHref !== href) {
      window.history.replaceState(window.history.state, "", nextHref);
    }
    void loadDictionary(next).then(() => updateLanguage(next));
  }, []);
  const t = useCallback(
    (english: string, translated?: string) => {
      if (language === "en") return english;
      const key = english.trim().replace(/\s+/g, " ");
      const dictionary = dictionaryFor(language);
      if (language === "it") return dictionary[key] ?? english;
      return translated ?? dictionary[key] ?? english;
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
