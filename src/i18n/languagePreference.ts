import type { Language } from "./context";

export function resolveLanguage(
  search: string,
  stored: string | null,
): Language {
  const query = new URLSearchParams(search).get("lang");
  if (query === "en" || query === "es") return query;
  return stored === "es" ? "es" : "en";
}

export function updateExplicitLanguageUrl(
  href: string,
  language: Language,
): string {
  const url = new URL(href);
  if (!url.searchParams.has("lang")) return href;
  url.searchParams.set("lang", language);
  return url.href;
}
