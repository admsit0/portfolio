# Adam Maltoni's personal website

My personal website, in English, Spanish and Italian, with a dedicated technical portfolio and long-form articles.

Live site: [adammaltoni.com](https://adammaltoni.com/).

## Development

Use Node.js 22.13 or newer. Run `npm ci`, then `npm run dev`. Before publishing,
run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
After publishing, `npm run check:deployment` verifies every built asset and
the permanent HTTP-to-HTTPS redirect.

`npm run deploy` publishes the production build to the `gh-pages` branch.
Keep `public/CNAME` in the build so the custom domain survives each deployment.
Assets use Vite's root base path for the custom domain.

`npm run build` makes the client build and a server build of `src/entry-server.tsx`
(in `dist-ssr/`). The postbuild step reads the application's route and project definitions
and generates static HTML entry points for direct GitHub Pages URLs, with route-specific
canonical metadata, a sitemap, and a non-indexable unknown-route fallback. Each canonical
route is prerendered in English into its own `index.html`, so search engines and visitors
without JavaScript get the content; aliases and the 404 page stay client-rendered. The
browser hydrates English pages and renders Spanish or Italian fresh. Do not replace this
with a single copied 404 page: known deep links should return HTTP 200.

Personal home copy lives in `src/content/personal.ts`, including the dated "Right now"
list and the optional workshop photos (files in `public/photos/`); longer personal notes
live in `src/content/about.ts`. Every text has `en`, `es` and `it` fields. Other UI text
is written in English in the components and translated in `src/i18n/spanish.ts` and
`src/i18n/italian.ts`; only the active language's dictionary is downloaded. Tests fail if
a string has no Italian translation or a content object lacks a language.

GDG events in `src/content/gdg.ts` have no status field: upcoming or past is computed in
the browser from the date (an event stays upcoming until two hours after it starts). The technical
portfolio is at `/portfolio`; Atlas has linked product and engineering views at `/atlas`
and `/portfolio/atlas`. No private notes, tokens, or local organization files are published.

Home motion is decorative only: a DPR-capped canvas draws faint contour lines at up to
30 fps and pauses offscreen or in hidden tabs. Reduced-motion preferences stop the canvas
and name entrance. Section headings reveal once, without hiding body text or changing
the reading order; preference changes cancel running heading animations immediately.

Atlas links to [atlaslearning.es](https://atlaslearning.es/). Its user metric is
the owner's conservative reported figure (30+ unique users), not a live counter.
The logo is the original Atlas asset; the screenshot contains no account details.

See [QA.md](QA.md) for release checks, browser coverage, and remaining dependency risks.
