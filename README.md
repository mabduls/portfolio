# Muhammad Abdul Aziz — Portfolio

A responsive dark-theme portfolio built with Vue 3, Vue Router, Tailwind CSS, and JavaScript. It presents aircraft tracking, border monitoring, reinsurance, and data platform case studies with product overviews and technical details.

Confidential projects use high-level descriptions and generic illustrations. At the user’s request, the ADS-B results gallery also displays the six supplied application screenshots. It uses lightweight responsive previews and an accessible full-size viewer. Credentials, private endpoints, and client-sensitive infrastructure are not added.

## Requirements

- Node.js `^22.22.2` or `>=24.15.0`
- npm with lockfile support

## Setup

```sh
npm install
npm run dev
```

The local development server uses `.env.development`. `VITE_APP_ENV` is required and validated when the application starts.

## Quality commands

```sh
npm run lint
npm run format:check
npm run test:unit
npm run build
npm run test:e2e
npm run verify
```

Playwright requires Chromium once per machine:

```sh
npx playwright install chromium
```

To use an already-installed Chrome for browser tests, run `PLAYWRIGHT_BROWSER_CHANNEL=chrome npm run test:e2e`.

Use `npm run lint:fix` and `npm run format` for intentional source rewrites. The regular CI commands are read-only.

## Content updates

Project and profile facts live in `src/shared/data`. The public email and LinkedIn URL are user supplied. The resume action is omitted at the user’s request. Add personal project contributions only when confirmed; the overview documents establish application capabilities rather than individual feature ownership. Configure `VITE_SITE_URL` with the verified public origin when deploying.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module rules, routing, environment behavior, testing, and confidentiality constraints.
