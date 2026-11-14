import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { loadDictionary } from "./i18n/dictionaries";
import { detectLanguage } from "./i18n/languagePreference";
import "./index.css";
import "./personal.css";

const root = document.getElementById("root")!;
const language = detectLanguage();

// Static pages are prerendered in English. Hydrate them when the visitor
// reads English; otherwise render fresh in their language.
void loadDictionary(language).then(() => {
  const app = <App initialLanguage={language} />;
  if (language === "en" && root.hasChildNodes()) hydrateRoot(root, app);
  else {
    root.replaceChildren();
    createRoot(root).render(app);
  }
});
