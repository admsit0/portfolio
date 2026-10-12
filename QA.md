# Portfolio QA

Verified on 12 October 2026. Production: https://adammaltoni.com/.

## Release Checks

- `npm run lint`: passed.
- `npm run typecheck`: passed; the Vite configuration also passed its separate TypeScript check.
- `npm test`: six scroll-navigation regression tests passed.
- `npm run build`: passed, including the static 404 fallback.
- `npm run check:deployment`: all 47 published files returned successful HTTPS responses with the expected content types, including the CV, English reports, covers, and plots.
- HTTP, `www.adammaltoni.com`, and the former GitHub Pages URL permanently redirect to https://adammaltoni.com/.
- GitHub reports an approved certificate for the apex and www domains, with HTTPS enforcement enabled. The Pages deployment completed successfully.

The deployment checker uses curl with normal certificate validation. The local Node network client intermittently failed with `UND_ERR_CONNECT_TIMEOUT`; curl and Chromium successfully reached the same resources. No TLS checks were disabled.

## Browser Checks

- Home tested at 390, 768, 1024, and 1280 px widths; no horizontal page overflow or broken loaded images.
- Experience and education cards align at desktop breakpoints. The 1024 px layout no longer clips GDG text or Accenture tags. Mobile cards grow naturally, without internal scrolling.
- All eight project detail views open. Shared dialog behavior includes keyboard focus containment, Escape dismissal, focus restoration, and working internal article navigation.
- Section navigation reaches the 80 px header offset; Home returns to zero. Navigation from a blog article back to Contact also works.
- Mobile navigation closes with Escape and restores focus to its toggle.
- All three articles render on mobile without page overflow, with correct page titles and eight technical figures in total. The thesis results table scrolls horizontally within its own region.
- Unknown routes offer a working return-home link.
- No browser console errors were observed during these checks.
- All six linked source repositories were confirmed public.

## Changes

- Added Atlas prominently beside the thesis, with its original logo, a real product screenshot, and a link to https://atlaslearning.es/.
- The conservative 30+ unique-user figure comes from the owner. It is not a live analytics counter. The 86-lesson figure reflects the inspected catalog snapshot.
- The Atlas screenshot excludes account identity and profile details; its private repository was not published or linked.
- Preserved the original hero visuals. Only accessible names and hover titles were added to its social links.
- Corrected icon-link labels, the CV's duplicate open/download action, project dialog accessibility, article table overflow, and card clipping.
- Split the blog into a separate bundle. Initial JavaScript decreased from about 640 kB to 427 kB, approximately 33%.
- Fixed existing lint/type configuration errors and applied compatible dependency security updates.

## Remaining Risks

The dependency audit is not clean: 16 advisory entries remain (8 high, 8 moderate). The high entries are in the build/deployment dependency chain. Moderate React Router 6 advisories also remain; this static app does not use SSR hydration, data-router redirects, or user-supplied link destinations.

Complete remediation needs a reviewed toolchain/router migration, not an automatic forced update. No major framework upgrade was performed in this release. Use Node.js 22.13 or newer for the updated tooling.

DNS/certificate configuration follows [GitHub's HTTPS documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https). GitHub Pages manages TLS; no additional GoDaddy SSL product is needed for this deployment.
