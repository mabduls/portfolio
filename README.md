# Muhammad Abdul Aziz — Engineering Portfolio

A production-oriented portfolio built with Vue 3, Vue Router, Tailwind CSS, and JavaScript. It presents factual case studies across real-time systems, secure enterprise platforms, geospatial monitoring, data integration, and fullstack delivery.

Confidential projects use conceptual recreations and deterministic synthetic data. The repository contains no operational coordinates, internal screenshots, credentials, private endpoints, or client-sensitive infrastructure.

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

Use `npm run lint:fix` and `npm run format` for intentional source rewrites. The regular CI commands are read-only.

## Content updates

Project and profile facts live in `src/shared/data`. Public email, GitHub, LinkedIn, résumé, and site URL values are intentionally absent until verified. Keep unavailable values `null`; the interface hides them rather than rendering placeholder links.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for module rules, routing, environment behavior, testing, and confidentiality constraints.
