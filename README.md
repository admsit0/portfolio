# Adam Maltoni's portfolio

This is my personal project portfolio.

Live site: [adammaltoni.com](https://adammaltoni.com/).

## Development

Use Node.js 22.13 or newer. Run `npm ci`, then `npm run dev`. Before publishing,
run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
After publishing, `npm run check:deployment` verifies every built asset and
the permanent HTTP-to-HTTPS redirect.

`npm run deploy` publishes the production build to the `gh-pages` branch.
Keep `public/CNAME` in the build so the custom domain survives each deployment.
Assets use Vite's root base path for the custom domain.

Atlas links to [atlaslearning.es](https://atlaslearning.es/). Its user metric is
the owner's conservative reported figure (30+ unique users), not a live counter.
The logo is the original Atlas asset; the screenshot contains no account details.

See [QA.md](QA.md) for release checks, browser coverage, and remaining dependency risks.
