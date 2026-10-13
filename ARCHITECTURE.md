# Portfolio Architecture

## Application structure

The application uses Vue 3, Vue Router, JavaScript, and Vite with Tailwind CSS integration. Route views are organized by feature. Each module exports its route record from `index.js`; shared UI and portfolio data live under `src/shared`.

- `src/app` owns route aggregation, application layouts, and `AppShell`.
- `src/modules` owns route-level pages and relevant page tests.
- `src/shared` owns reusable components, styling, configuration, and content.
- `App.vue` renders `AppShell`; `src/router/index.js` creates the router.

Feature modules must not import internals from unrelated modules. Portfolio state is local to each view; Pinia is not needed by this portfolio, even though some showcased projects use it.

## Routing and metadata

All route-level views are dynamically imported. Existing project paths and route names remain stable. Route metadata defines a title, description, and layout. The router updates document and Open Graph metadata, supports saved positions and hash navigation, and restores focus to main content or the target section.

Anchor scrolling honors reduced motion. Canonical links are created only when `VITE_SITE_URL` is configured with a public production origin.

## Styling and responsive behavior

`src/shared/styles/main.css` owns the dark visual system: layered navy/charcoal surfaces, light slate text, a soft blue accent, restrained depth, system fonts, fluid headings, and consistent spacing. All surfaces, controls, SVG illustrations, and focus states use shared color tokens. Shared semantic classes keep page layouts aligned.

`AppContainer` bounds the content to 72rem plus desktop padding. Layouts use available width in CSS pixels, with breakpoints at 640, 768, and 1024px. Project grids move from one to two columns; the index can use three on desktop. Case studies gain a desktop contents sidebar and use a native contents disclosure on smaller screens. Short landscape screens disable sticky headers and sidebars.

The site does not use autoplay simulations, fake live status, animated topology, or ornamental technical decoration. Static inline SVG illustrations identify project domains. Product-level service explanations use readable text blocks rather than confidential infrastructure diagrams.

Navigation, focus styles, a skip link, disclosure controls, and reduced-motion behavior are part of the shared UI. Use native anchors and buttons. Do not add fixed heights that truncate text or introduce page-level horizontal scrolling.

## Content and case studies

The four project overviews in `docs/` are the factual basis for primary project content. [The overhaul plan](docs/PORTFOLIO_OVERHAUL_PLAN.md) defines the product direction. [The implementation foundation](docs/PORTFOLIO_AI_IMPLEMENTATION_FOUNDATION.md) defines ongoing implementation rules.

Project data lives in `src/shared/data/projects.js`. Common fields include:

```text
slug, path, title, shortTitle, category, summary, technologies,
featured, confidential, intro
```

Primary projects additionally provide:

```text
visual, audience, context, featureGroups, architecture,
stackGroups, implementationNotes, deliveredCapabilities
```

`featuredProjects` controls the home order. `orderedProjects` adds secondary projects afterward. `CaseStudyPage` renders overview, intended users, grouped features, technical approach, optional implementation notes, capabilities, and next-project/contact actions. A named `results` slot adds a results section and contents-navigation entry only to pages that provide it.

`contribution` may be added as an array when personal responsibilities are confirmed. Do not infer individual ownership from repository functionality. The three existing secondary projects retain their supplied responsibilities, challenge, approach, and demonstrated capabilities; the shared template supports these fields.

Configured integrations, present schemas, and registered routes must not be described as proof that every deployed feature is operational. Keep technical caveats in the detail section, with a concise availability explanation near the capabilities.

## Profile and confidentiality

`src/shared/data/profile.js` stores the profile, experience, skill groups, and user-supplied public email and LinkedIn URL. The resume action is intentionally omitted at the user's request. Do not invent contact links, job dates, availability, results, metrics, or feature attribution.

ADS-B and Government Border Security remain marked confidential. The user explicitly supplied and requested the six ADS-B application screenshots in `src/assets/icons/adsb-project` for the results gallery; this supersedes the earlier blanket restriction on screenshots for those supplied assets. Its confidentiality note reflects that exception. Do not add other private operational assets, client identifiers, secrets, endpoints, or infrastructure details. Government Border Security retains a generic product-level presentation.

## ADS-B results gallery

`src/modules/adsb-page/components/AdsbResultsGallery.vue` owns the featured preview, selectable thumbnails, keyboard navigation, and native dialog viewer. `data/adsbGallery.js` defines labels, alternative text, dimensions, and asset URLs. Images and gallery code are imported only by the ADS-B route.

The original PNG files are preserved. The `previews/` subdirectory contains 320px thumbnails and 640px/1280px WebP previews derived from them. The page uses `srcset`, native lazy loading, and reserved image dimensions. Original-resolution PNGs are requested only when the full-size dialog is open. Regenerate the previews and update metadata if a source image changes.

The viewer supports previous/next navigation, arrow keys, Escape, backdrop closing, and an Actual size/Fit to screen action. The native modal handles focus containment; the component restores trigger focus and body scrolling on close/unmount. At actual size, the image region scrolls so details can be inspected on small screens. Thumbnail navigation scrolls only its horizontal strip and does not move the page.

## Environment variables

All frontend environment access is centralized in `src/shared/config/env.js`.

| Variable        | Required | Purpose                                                                 |
| --------------- | -------- | ----------------------------------------------------------------------- |
| `VITE_APP_ENV`  | Yes      | `development`, `staging`, or `production`; `test` is accepted by Vitest |
| `VITE_SITE_URL` | No       | Public absolute origin for canonical metadata                           |

Frontend environment values are public; never use them for private credentials.

## Verification

`npm run verify` runs lint, formatting, unit tests, and the production build. Unit tests cover environment handling, route contracts, primary project content boundaries, home rendering/contact links, and domain filters. Playwright checks direct navigation, console errors, filters, browser history, menu/anchor focus, confidential technical notes, accessibility, 320px reflow, breakpoint-adjacent widths, wide monitors, and short landscape views.

The default Playwright projects use desktop Chromium and a mobile Chromium profile. If a machine already has Chrome but lacks Playwright's bundled browser, use `PLAYWRIGHT_BROWSER_CHANNEL=chrome npm run test:e2e`. This changes only the test browser, not the application.

Pair automated checks with visual review and keyboard checks. Review production build output against a baseline before release. Do not deploy as part of a local implementation unless the user authorizes deployment.
