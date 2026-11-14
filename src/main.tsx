import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { loadDictionary } from "./i18n/dictionaries";
import { detectLanguage } from "./i18n/languagePreference";
import { preloadRoute } from "./pages/lazyPages";
import "./index.css";
import "./personal.css";

const root = document.getElementById("root")!;
const language = detectLanguage();

const hydrate = language === "en" && root.hasChildNodes();

// Static pages are prerendered in English. Hydrate them when the visitor
// reads English (after loading the current route's chunk, so hydration
// never suspends); otherwise render fresh in their language.
void Promise.all([
  loadDictionary(language),
  hydrate ? preloadRoute(window.location.pathname) : undefined,
]).then(() => {
  const app = <App initialLanguage={language} />;
  if (hydrate) hydrateRoot(root, app);
  else {
    root.replaceChildren();
    createRoot(root).render(app);
  }
});
