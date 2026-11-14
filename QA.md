# Portfolio QA

Verified locally on 14 November 2026 on the `personal-refresh` branch, before deployment.
The previous production check (12 October 2026) is summarised at the end of this file.

## Release Checks

- `npm run lint` and `npm run typecheck`: passed.
- `npm test`: 39 tests passed (scroll navigation, i18n coverage in English, Spanish and
  Italian, static pages and prerendering, heading and hero motion, GDG event status).
- `npm run build`: passed. 27 static entry points, every canonical route prerendered.
- Initial JavaScript: 246.9 kB raw / 80.2 kB gzip (main had 385.3 / 124.3 kB). Initial CSS:
  73.0 kB raw / 14.8 kB gzip (main had 113.6 / 20.8 kB).
- `npm run check:deployment` was not run: nothing has been deployed from this branch yet.

## Browser Checks

- The built site (served from `dist/`) was opened in Chrome for 12 routes in each of the
  three languages: no hydration or console errors, correct `lang`, unknown routes return 404
  and `/projects/atlas` redirects to `/atlas`.
- With JavaScript disabled, the home, `/gdg` and `/about` pages show their content.
- Home, `/portfolio`, `/gdg`, `/about` and `/atlas` checked with axe-core for colour contrast
  at 390 and 1280 px, in English and Spanish: no violations. Google accent colours are used
  only for non-text marks on light backgrounds; yellow is used as text only on the dark footer.
- No horizontal overflow at 390 or 1280 px on the pages above.

## Changes in this release

- Home rewritten around concrete facts: hero, a dated "Right now" list, interests with real
  examples, languages shown in the intro. Contact has one message and no phone number.
- `/about` rewritten (theses, Atlas, organising GDG UAM, next steps, the non-profit goal).
- MSc thesis featured as current research in the portfolio; GDG UAM figures updated to 275
  members; the first GDG UAM machine learning contest added; calendar synced with gdguam.es.
- Italian added across the site, including the four articles.
- Atlas: the 157-lesson and 26-laboratory figures come from the catalog snapshot of
  13 October 2026 (`src/content/atlas.ts`) and are dated wherever they appear.
- Unused providers, 46 unused source files and 40 unused packages removed.

## Remaining Risks

The dependency audit is not clean: 14 advisory entries remain (1 high, 13 moderate), down from 16 (8 high) after removing unused packages. The high entry is in the build/deployment dependency chain. Moderate React Router 6 advisories also remain; this static app does not use SSR hydration, data-router redirects, or user-supplied link destinations.

Complete remediation needs a reviewed toolchain/router migration, not an automatic forced update. No major framework upgrade was performed in this release. Use Node.js 22.13 or newer for the updated tooling.

DNS/certificate configuration follows [GitHub's HTTPS documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https). GitHub Pages manages TLS; no additional GoDaddy SSL product is needed for this deployment.

## Previous production check (12 October 2026)

HTTPS, redirects from HTTP, `www` and the former GitHub Pages URL, the certificate, and all
47 published files were verified on adammaltoni.com. Repeat `npm run check:deployment`
after the next deployment.
