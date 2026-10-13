# ADS-B Project Overview

This document describes the ADS-B project components in `adsb-revamp-fe` and
`adsb-revamp-be`: their technology stacks, main responsibilities, and features
visible in the current source code. The separate `spire-serve` repository is
outside this document's scope.

## What the project does

The ADS-B application provides an authenticated aircraft tracking and
operations interface. It brings live aircraft information onto an interactive
map, supports aircraft inspection and flight history views, and provides
summary, report, alert, and operational pages. The backend exposes supporting
HTTP APIs, caches aircraft records, can enrich aircraft data from the
configured SPIRE API, and reports service health.

The frontend also integrates with configured live data streams and APIs. Those
connections are integration points; this overview does not document the
implementation of any external service.

## Repositories in scope

| Repository | Responsibility |
| --- | --- |
| `adsb-revamp-fe` | Browser application: map and aircraft visualization, dashboards, reports, authentication flow, and user-management UI. |
| `adsb-revamp-be` | Node.js HTTP service: aircraft cache and enrichment, health/status endpoints, weather and image proxy endpoints, and Keycloak user-management API. |

## Technology stack

### `adsb-revamp-fe`

- **JavaScript, Vue 3, and Vue Router** build the single-page application and its route-based pages.
- **Vite** provides the development server and production build; the project uses the Vue Vite plugin.
- **Pinia** manages shared reactive state, including aircraft and map interaction state.
- **Mapbox GL JS** renders the interactive map. The app also has free raster map-style fallbacks configured in its map runtime.
- **Three.js** renders the 3D aircraft-follow/cockpit view; `GLTFLoader` loads 3D models.
- **Vuetify**, **Tailwind CSS**, **Sass**, and **PostCSS/Autoprefixer** provide UI components and styling.
- **Axios** handles HTTP requests; **keycloak-js** provides the browser-side Keycloak integration.
- **Chart.js** renders charts, while **jsPDF** and **html2pdf.js** support report/PDF export.
- **Day.js** and **Lodash** provide date and utility helpers.
- **Vitest**, **Vue Test Utils**, and **jsdom** are included for frontend tests.
- A small **Express** server and `http-proxy-middleware` are included for the Node hosting/proxy setup.

### `adsb-revamp-be`

- **JavaScript on Node.js**, using **CommonJS**, runs the backend application.
- **Express** provides HTTP routing and middleware, and **CORS** configures cross-origin access. **Helmet** is listed as a dependency but is not mounted in the current `src/index.js` entry point.
- **Axios**, Node's `fetch`, and **EventSource** packages support outbound HTTP integrations.
- **Pino** and `pino-pretty` provide structured logging.
- **Prisma ORM** with **PostgreSQL** is configured in the schema. The schema defines aircraft metadata, cache, flight tracks, and alerts. The current `src/index.js` runtime is centered on an in-memory aircraft cache; the declared database service/schema should not be read as proof that every runtime path persists data to PostgreSQL.
- **jsonwebtoken** and the Keycloak Admin Client integration support Keycloak-protected administration routes.
- **dotenv** loads environment configuration; **moment** and **moment-timezone** support date/time handling.
- **Jest** and **Supertest** are included for backend tests; **Nodemon**, **ESLint**, and **PM2** support local development and process management.
- **Docker** and systemd deployment files are present for staging deployment.

## Features implemented in the frontend

### Live aircraft map

- Interactive map page with configurable map styles/layers and a map layer
  registry that manages layer lifecycle.
- Aircraft feed normalization and merge by ICAO/HEX identity, with source and
  category filters.
- Canvas aircraft rendering with aircraft-type/source/altitude coloring,
  animated helicopter icons, map hit-testing, and selection.
- Position smoothing, heading interpolation, dead reckoning between updates,
  stale-aircraft handling, and aircraft trail rendering.
- Aircraft detail drawer, summary popup, image display, and flight/session
  tracker views.
- Aircraft selection and focus commands can be issued by shared UI such as the
  navbar and alerts.
- A 3D follow/cockpit mode with Three.js model rendering and camera controls is
  implemented in the map aircraft module.

### Map tools and overlays

- Aircraft filters and legend, route filtering, and playback controls.
- Radar/tower, boundary, weather, mountain/volcano, navigation chart, and point
  of interest map features are represented in the map modules.
- Airport/aerodrome markers and airport information support are included.

### Application pages

The router defines login, maps, dashboard, monitoring, reports, summary,
leaderboard, and user-management pages. Authenticated routes use the frontend
Keycloak service and refresh tokens through the global navigation guard.

- **Reports and monitoring:** aircraft/radar monitoring and detection-report
  views, report filters, alert panels, and report export support.
- **Summary:** ADS-B flight summary and tabbed alert, analytics, and aircraft
  profile areas. Some data views depend on configured APIs and may show limited
  data when those services are unavailable.
- **Leaderboard:** leaderboard charts/tables with date/time filtering.
- **Alerts:** navbar notifications, map-focus actions, optional sound and toast
  popups.
- **User management:** user-management page and controls backed by the backend's
  Keycloak administration API.
- **Monitoring page:** a monitoring/Grafana-oriented page is routed in the
  frontend.

## Features implemented in the backend

- **Aircraft cache:** in-memory cache with capacity/TTL configuration, cache
  statistics, and demo-data seeding when the cache is empty after startup.
- **SPIRE enrichment flow:** queued enrichment requests look up aircraft
  positions from the configured SPIRE API, merge position/altitude/speed and
  heading data, and track basic success/failure statistics.
- **Health and status APIs:** `/health`, `/aircraft`, `/spire`, `/flow-status`,
  and `/failover-status` (also exposed under several `/api/...` aliases) report
  cache contents, enrichment state, flow status, or failover state.
- **Weather API:** `POST /api/weather/multiple` retrieves weather for a list of
  cities through the configured weather providers/services.
- **Aircraft photo proxy:** `GET /api/reports/aircraft/:hex/image-proxy` looks
  up a photo through HexDB and PlaneSpotters and proxies the image to the
  frontend.
- **Keycloak user administration:** authenticated routes under
  `/api/v1.0/tools/keycloak` list, create, update, disable/enable, delete users,
  reset passwords, update role mappings, and return configuration data.
- **Request handling:** configurable CORS, JSON parsing, HMAC-signature
  middleware, centralized error handling, optional static frontend hosting,
  and SPA fallback are wired in `src/index.js`.
- **Health monitoring/failover signaling:** a monitoring flow checks cache and
  any injected database/Redis/WebSocket components, tracks health history and
  alerts, and emits failover events. In the current application startup only
  the cache and config are passed to it, so database, Redis, and WebSocket
  checks require additional wiring to run.

## Integration and implementation notes

- The frontend's live map modules contain adapters for SPIRE and tower event
  streams. Stream URLs and credentials are environment/configuration dependent.
- The in-scope backend's current `src/index.js` does not define an SSE stream
  route. Its own HTTP APIs and the frontend's stream adapters should therefore
  be considered separate integration surfaces.
- The backend package description and older documentation mention a backup
  aggregation flow, but the current entry point starts Flow 1 (realtime
  enrichment) and Flow 3 (health monitoring). A Flow 2 backup/aggregation flow
  is not wired into that entry point.
- The Prisma schema and database service are present, but the main backend
  startup shown in `src/index.js` uses the in-memory cache. Verify the actual
  deployment configuration before assuming that aircraft state is persisted
  through Prisma.
- Several frontend pages depend on APIs/configuration outside these two source
  trees. The presence of UI or an adapter does not guarantee that the deployed
  upstream service is reachable or enabled.

## Useful entry points

- Frontend routes: `adsb-revamp-fe/src/router/index.js`
- Frontend module overview: `adsb-revamp-fe/docs/MODULES_SUMMARY.md`
- Frontend dependencies: `adsb-revamp-fe/package.json`
- Backend startup and API routes: `adsb-revamp-be/src/index.js`
- Backend dependencies: `adsb-revamp-be/package.json`
- Backend database schema: `adsb-revamp-be/prisma/schema.prisma`
- Backend API reference: `adsb-revamp-be/docs/api/ENDPOINTS.md`
