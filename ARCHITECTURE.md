# Portfolio Architecture

## Application structure

The application is organized by feature. Every route-level module owns its view, child components, composables, services, and tests. Its `index.js` exports only the route record, which is the module's public API.

- `src/app` owns route aggregation, layouts, and the application shell.
- `src/modules` owns route-level product features.
- `src/shared` owns UI, configuration, data, and logic reused by multiple modules.
- `App.vue` only renders `AppShell`.

Feature components must not import internals from unrelated features. Interactive state stays local to its page or composable; Pinia is intentionally not used.

## Routing and metadata

Each `*Route.js` file uses a kebab-case path, stable route name, dynamic component import, and metadata containing `title`, `description`, and `layout`. `src/app/router/routes.js` aggregates these exports. All route-level views are lazy loaded.

The router updates document and Open Graph metadata after navigation, restores main-content focus, supports saved positions and hash targets, and creates canonical links only when `VITE_SITE_URL` is configured.

## Styling and interaction

Tailwind CSS is integrated with Vite. Shared CSS contains dark technical design tokens, reusable surface and button primitives, route transitions, and reduced-motion behavior. System fonts and inline SVG keep rendering independent of remote font, image, map, or animation services.

Continuous simulations use `requestAnimationFrame` or controlled intervals and clean up frames, timers, and listeners on unmount. Reduced-motion visitors receive paused initial states and the same information through text.

## Data and confidentiality

Portfolio content is stored in `src/shared/data/projects.js` and `profile.js`. Project records share the following fields:

```text
slug, path, title, shortTitle, category, summary, responsibilities,
technologies, featured, confidential, intro, challenge, approach, demonstrated
```

Only facts supported by the implementation foundation may be published. Confidential projects must:

- Use generic project names where required.
- Label simulations as conceptual and synthetic.
- Avoid production screenshots, client data, real coordinates, internal endpoints, credentials, schemas, and infrastructure diagrams.
- Use deterministic fictional identifiers and events.

Unknown contact and profile assets remain `null` and are not rendered.

## Environment variables

All frontend environment access is centralized in `src/shared/config/env.js`.

| Variable        | Required | Purpose                                                                         |
| --------------- | -------- | ------------------------------------------------------------------------------- |
| `VITE_APP_ENV`  | Yes      | One of `development`, `staging`, or `production`; `test` is accepted by Vitest. |
| `VITE_SITE_URL` | No       | Absolute public origin used for canonical metadata.                             |

Frontend variables are public. Never store credentials or private tokens in these files.

## Testing and CI

Vitest and Vue Test Utils cover configuration, shared data, routes, primary page rendering, filters, simulations, lifecycle cleanup behavior, failover, workflow exploration, and lineage exploration. Playwright covers real navigation, responsive Chromium contexts, representative interactions, console errors, and automated accessibility checks.

GitHub Actions runs lockfile installation, ESLint and Oxlint, Prettier verification, unit tests, the production build, and Chromium end-to-end tests. Husky and lint-staged apply formatting and lint fixes only to staged files before commits.

## Performance rules

- Route-level modules remain dynamically imported.
- ADS-B and monitoring simulations load only on their routes.
- Do not add map or animation libraries when inline SVG, CSS, or browser APIs are sufficient.
- Avoid remote media, autoplay video, and unnecessary global dependencies.
- Review Vite build output for accidental shared-bundle growth before merging substantial features.
