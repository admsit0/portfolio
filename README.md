# Adam Maltoni's personal website

My personal website, with a dedicated technical portfolio and bilingual long-form articles.

Live site: [adammaltoni.com](https://adammaltoni.com/).

## Development

Use Node.js 22.13 or newer. Run `npm ci`, then `npm run dev`. Before publishing,
run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
After publishing, `npm run check:deployment` verifies every built asset and
the permanent HTTP-to-HTTPS redirect.

`npm run deploy` publishes the production build to the `gh-pages` branch.
Keep `public/CNAME` in the build so the custom domain survives each deployment.
Assets use Vite's root base path for the custom domain.

The postbuild step reads the application's route and project definitions and generates
static HTML entry points for direct GitHub Pages URLs, route-specific canonical metadata,
a sitemap, and a non-indexable unknown-route fallback. Do not replace it with a single
copied 404 page: known deep links should return HTTP 200.

Personal home copy lives in `src/content/personal.ts`; longer personal notes live in
`src/content/about.ts`. Both contain editable English and Spanish fields. The technical
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
