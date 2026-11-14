// Prerender entry: renders one route to HTML at build time, in English.
// Used by scripts/build-static-pages.mjs after `vite build --ssr`.
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppRoutes } from "./App";
import LanguageProvider from "./i18n/LanguageProvider";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const { pipe } = renderToPipeableStream(
      <LanguageProvider initialLanguage="en">
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </LanguageProvider>,
      {
        // Wait for lazy routes so the HTML has content, not the fallback.
        onAllReady() {
          pipe(
            new Writable({
              write(chunk, _encoding, callback) {
                html += chunk.toString();
                callback();
              },
              final(callback) {
                resolve(html);
                callback();
              },
            }),
          );
        },
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
