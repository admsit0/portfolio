import { languages, type Language } from "./languages.ts";

const isLanguage = (value: string | null): value is Language =>
  (languages as readonly (string | null)[]).includes(value);

export function resolveLanguage(
  search: string,
  stored: string | null,
): Language {
  const query = new URLSearchParams(search).get("lang");
  if (isLanguage(query)) return query;
  return isLanguage(stored) ? stored : "en";
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
