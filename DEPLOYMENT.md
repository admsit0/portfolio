# Personal Website Release

Approved for publication on 27 October 2026 to https://adammaltoni.com/.

## Hosting

- Source: `admsit0/portfolio`, branch `main`.
- Published build: `gh-pages`, root directory.
- Custom domain: `public/CNAME`, preserved as `adammaltoni.com`.
- GitHub Pages HTTPS enforcement remains enabled; no DNS changes are required.
- Run `npm run deploy` to build and publish, then `npm run check:deployment`.

The build generates 27 known route entry points and 19 canonical sitemap entries from
the application definitions. Legacy project and hash links remain supported. The
preview's noindex setting and disabled deployment script are not carried to production.

## Recovery Reference

Before this release, source `main` was at
`dcbe5fe14a36526f4851b85810ab79959784713c` and the published `gh-pages` branch was at
`5c093a8c7df5f453fccb0d1667fa0887defa9698`.

If a rollback is required, revert the release commit through a normal reviewed Git
commit and rebuild/redeploy. Do not reset unrelated work or force-push published history.

## Scope

The owner-approved `portfolio2` personal design, bilingual content, complete technical
portfolio, original English article bodies, Spanish articles, and real Atlas captures
are included. The experimental checkout stays separate. Private local `docs/` content,
debug files, dependency directories, and local screenshots are excluded from staging.
