# Portfolio Website — AI Implementation Foundation

> **Purpose:** This document is the primary implementation contract for any AI assistant or developer working on this portfolio website. It defines the product direction, architecture, coding conventions, module boundaries, page requirements, interaction goals, security expectations, testing strategy, performance rules, and project content guidelines.

---

## 1. Project Overview

Build a modern, professional, interactive software-engineering portfolio for **Muhammad Abdul Aziz**, a Fullstack Developer experienced in scalable web applications, real-time systems, RESTful APIs, interactive frontend applications, system integration, data streaming, secure authentication, geospatial dashboards, and production-ready platforms.

The portfolio must not feel like a static resume website. It must behave like a polished software product with:

- Strong visual storytelling.
- Clear separation between projects.
- Interactive project demonstrations.
- Smooth motion and meaningful micro-interactions.
- Modular and scalable frontend architecture.
- Strong maintainability and testability.
- Fast initial load and lazy-loaded project pages.
- Responsive behavior across desktop, tablet, and mobile.
- Accessibility-conscious UI implementation.

The primary frontend stack is:

- **Vue.js 3**
- **Vue Router**
- **Tailwind CSS**
- **JavaScript** using the Vue Composition API

The project is initially created with:

```bash
npm create vue@latest
```

The default Vue starter UI must be removed and replaced with a clean application shell designed specifically for this portfolio.

---

## 2. Product Vision

The website should communicate the following message:

> Muhammad Abdul Aziz is a production-oriented Fullstack Developer who can build modern frontend applications, backend services, real-time monitoring platforms, secure enterprise systems, geospatial dashboards, and data-intensive applications.

The portfolio should focus on **engineering depth**, not decorative design alone.

Every major project should explain:

1. The project context.
2. The problem being solved.
3. The responsibilities handled.
4. The architecture or technical approach.
5. The technologies used.
6. The challenges involved.
7. The engineering decisions made.
8. The result or engineering outcome.
9. The lessons or capabilities demonstrated.

Where appropriate, the page should include interactive UI simulations or animations that help visitors understand the system.

---

## 3. Source Profile and Experience

The portfolio content must be based primarily on the candidate's CV and must not invent project facts that are not supported by available information.

### 3.1 Professional Profile

Muhammad Abdul Aziz is a Fullstack Developer with hands-on experience in:

- Scalable web applications.
- Real-time systems.
- RESTful APIs.
- Interactive frontend applications.
- Data-driven platforms.
- React.
- Vue.js.
- Node.js using Fastify and Express.
- Real-time data processing.
- System integration.
- Keycloak-based authentication and authorization.
- Production-oriented engineering.

### 3.2 Education

- Bachelor of Informatics — Diponegoro University.
- Study period: August 2021 to September 2025.

### 3.3 Professional Experience

The primary professional experience that should receive the strongest emphasis is **PT Sibernetik Integra Data**.

Projects include:

#### A. BRINS x TUGURE Reinsurance Web Platform

Key implementation areas:

- Credit reinsurance web platform.
- React frontend.
- Fastify backend.
- PostgreSQL.
- Prisma.
- Keycloak authentication and authorization.
- Role-Based Access Control.
- Dashboard capabilities.
- Notifications.
- Audit-support workflows.
- Real-time business visibility.
- RESTful APIs.
- Validation flows.
- Bulk CSV upload flows.
- Debtor, claim, and master contract processing.

#### B. Confidential Government Monitoring Platform

Key implementation areas:

- Real-time airspace monitoring.
- Multi-sensor surveillance.
- Live aircraft tracking.
- Route visibility.
- Departure and arrival identification.
- Anomaly detection.
- Alert workflows.
- Air traffic monitoring.
- CCTV monitoring.
- RF/radio monitoring.
- Emergency indicators.
- Signal anomalies.
- Suspicious activity events.
- Vue.js.
- Mapbox GL.
- OpenLayers.
- Chart.js.
- ECharts.
- Fastify.
- Prisma.
- PostgreSQL.
- Server-Sent Events.
- WebSocket.
- Keycloak.
- Reverse proxy integration.
- FFmpeg-based CCTV streaming.

#### C. Confidential Government National ADS-B Platform

This is one of the flagship portfolio stories and should receive a dedicated interactive page.

Key implementation areas:

- National airspace surveillance.
- Aircraft movement monitoring across Indonesian territory.
- Real-time aircraft position tracking.
- Route visibility.
- Departure and arrival identification.
- Vue.js.
- Tailwind CSS.
- OpenLayers.
- Mapbox.
- Live aircraft visualization.
- Alerts.
- Playback.
- Operational reporting.
- Node.js.
- Express.
- Fastify.
- Prisma.
- PostgreSQL.
- Streaming aircraft data.
- Flight information enrichment.
- Reporting APIs.
- Historical track retrieval.
- Real-time data streaming.
- Health monitoring.
- Backup aggregation.
- Failover mechanisms.
- High availability.
- Keycloak.
- JWT.

#### D. Hyang Project

Key implementation areas:

- React-based pipeline monitoring.
- Apache Airflow.
- Apache Hop.
- Apache NiFi.
- OpenMetadata.
- Metadata catalog.
- Glossary.
- Table lineage.
- Keycloak authentication.
- Access-token validation.
- Refresh token handling.
- Role mapping.
- RBAC.
- HMAC-SHA256 request signing.
- Timestamp validation.
- Replay protection.
- Secured backend proxies.
- Resource whitelisting.
- Token forwarding.
- Technical authentication.
- Caching.
- Error handling.
- Automated authentication and proxy tests.

### 3.4 Other Experience and Projects

#### Dinas Komunikasi Informatika, Statistika dan Persandian Semarang City — Internship

- CSIRT website.
- PHP Laravel.
- Collaboration with an IT team.

#### Coding Camp DBS Foundation — Fullstack Developer Bootcamp

- Backend and frontend implementation.
- RESTful API.
- Firebase Firestore.
- TensorFlow.js acne detection model.
- Fullstack deployment.
- Vercel frontend hosting.
- Railway backend hosting.
- GitHub Actions CI/CD.

#### BEM FEB Diponegoro University Website

- PHP Laravel.
- Git and GitHub collaboration.
- Program-management-oriented web solution.

---

## 4. Confidentiality Rules

Several professional projects are explicitly confidential.

The portfolio must therefore:

- Never expose confidential client data.
- Never expose credentials, endpoints, IP addresses, architecture diagrams containing sensitive infrastructure, internal screenshots, source code, database schemas, or access patterns that were not approved for public disclosure.
- Never fabricate public screenshots that imply they are actual production screenshots.
- Use **conceptual UI recreations**, **abstract simulations**, **sanitized diagrams**, and **synthetic data** where visual explanations are needed.
- Use descriptions such as:
  - “Confidential Government Monitoring Platform”
  - “Confidential National ADS-B Platform”
- Avoid naming government entities unless explicitly approved for public use.
- Clearly label interactive demos as conceptual, simulated, or sanitized when relevant.

The goal is to demonstrate engineering capability without exposing confidential operational details.

---

## 5. Core Pages

The application must support separate route-level pages.

Recommended high-level pages:

```text
/
/projects
/projects/reinsurance-platform
/projects/monitoring-platform
/projects/ads-b-platform
/projects/hyang-platform
/projects/coding-camp
/projects/bem-feb
/about
```

Minimum required pages:

1. Landing Page.
2. Projects Overview / Details Page.
3. ADS-B Project Page.
4. Monitoring Platform Project Page.

Additional dedicated project pages are strongly recommended.

---

## 6. Required Modular Architecture

Organize the application **by feature, not by technical type**.

Base structure:

```text
src/
├── app/
│   ├── router/
│   │   ├── routes.js
│   │   └── index.js
│   ├── layouts/
│   │   ├── DefaultLayout.vue
│   │   └── ProjectLayout.vue
│   └── AppShell.vue
│
├── modules/
│   ├── landing-page/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── LandingPageView.vue
│   │   ├── LandingPageRoute.js
│   │   └── index.js
│   │
│   ├── details-page/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── DetailsPageView.vue
│   │   ├── DetailsPageRoute.js
│   │   └── index.js
│   │
│   ├── adsb-page/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── AdsbPageView.vue
│   │   ├── AdsbPageRoute.js
│   │   └── index.js
│   │
│   ├── monitoring-platform-page/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── services/
│   │   ├── tests/
│   │   ├── MonitoringPlatformPageView.vue
│   │   ├── MonitoringPlatformPageRoute.js
│   │   └── index.js
│   │
│   ├── reinsurance-page/
│   ├── hyang-page/
│   ├── about-page/
│   └── contact-section/
│
├── shared/
│   ├── components/
│   ├── composables/
│   ├── constants/
│   ├── data/
│   ├── icons/
│   ├── services/
│   ├── styles/
│   └── utils/
│
├── assets/
├── main.js
└── App.vue
```

### Important Rule About `App.vue`

Do not keep the default Vue starter content.

`App.vue` should be intentionally minimal and should only provide the router entry point or top-level application shell.

Recommended responsibility:

```vue
<template>
  <RouterView />
</template>
```

If a global shell is required, use `AppShell.vue` or route layouts rather than turning `App.vue` into a god component.

---

## 7. Module Contract

Every route-level feature module should follow a predictable internal contract.

Example:

```text
src/modules/adsb-page/
├── components/
│   ├── AdsbHero.vue
│   ├── AircraftMapSimulation.vue
│   ├── FlightPlaybackControls.vue
│   ├── SystemArchitectureSection.vue
│   ├── ReliabilityTimeline.vue
│   └── TechnologyStack.vue
├── composables/
│   ├── useAircraftSimulation.js
│   ├── useFlightPlayback.js
│   ├── useMapViewport.js
│   └── useSectionNavigation.js
├── services/
│   └── adsbSimulation.service.js
├── tests/
│   ├── AdsbPageView.spec.js
│   ├── useAircraftSimulation.spec.js
│   └── adsb-page.spec.js
├── AdsbPageView.vue
├── AdsbPageRoute.js
└── index.js
```

### Module Responsibilities

#### `components/`

Contains child components owned by that feature.

A child component should:

- Have one clear visual or interaction responsibility.
- Avoid owning route configuration.
- Receive data through props when practical.
- Emit events to parents when communication is needed.
- Avoid directly coupling itself to unrelated modules.

#### `composables/`

Contains reusable Vue Composition API logic for the feature.

Examples:

- Animation state.
- Map simulation state.
- Scroll state.
- Timeline playback logic.
- Project filtering.
- Pointer interaction behavior.
- Responsive calculations.
- Derived state.

Composables should isolate logic from presentation.

#### `services/`

Contains external or data-access responsibilities.

Examples:

- Fetching future API data.
- Loading local JSON datasets.
- Formatting project content.
- Mapping raw simulation points.
- Analytics integration.

#### `tests/`

Feature-specific tests live inside the feature folder.

#### `*View.vue`

The route-level parent view.

Its main responsibility is component composition and high-level orchestration.

A view should not contain hundreds of lines of unrelated logic.

#### `*Route.js`

Contains the route definition owned by the feature.

Use **PascalCase** for route filenames.

Example:

```js
export const AdsbPageRoute = {
  path: '/projects/ads-b-platform',
  name: 'ads-b-platform',
  component: () => import('./AdsbPageView.vue'),
}
```

#### `index.js`

Acts as the module's public API.

Example:

```js
export { AdsbPageRoute } from './AdsbPageRoute'
```

Do not expose internal components unless another module has a valid reuse requirement.

---

## 8. Routing Requirements

Use Vue Router.

### Route Naming Rules

- URL paths: **kebab-case**.
- Route files: **PascalCase**.
- Components: **PascalCase**.
- JavaScript variables/functions: **camelCase**.
- Environment variables: **UPPER_CASE**.

### Lazy Loading

All route-level modules should be lazy-loaded whenever practical.

Example:

```js
component: () => import('@/modules/adsb-page/AdsbPageView.vue')
```

### Route Aggregation

Each module owns its own route definition.

Central router setup should aggregate module routes instead of defining every page inline.

Example:

```js
import { LandingPageRoute } from '@/modules/landing-page'
import { AdsbPageRoute } from '@/modules/adsb-page'
import { MonitoringPlatformPageRoute } from '@/modules/monitoring-platform-page'

export const routes = [LandingPageRoute, AdsbPageRoute, MonitoringPlatformPageRoute]
```

---

## 9. Landing Page Requirements

The landing page should quickly establish engineering credibility.

Recommended sections:

1. Hero.
2. Professional summary.
3. Selected work.
4. Core engineering capabilities.
5. Technology stack.
6. Experience timeline.
7. Featured ADS-B project teaser.
8. Contact / professional links.

### Hero Content Direction

Avoid generic phrases such as:

> “I create beautiful websites.”

Prefer engineering-oriented positioning such as:

> “Fullstack Developer building real-time systems, secure platforms, and interactive data-driven applications.”

The hero may include subtle animated visual elements representing:

- Data streaming.
- API nodes.
- Aircraft track lines.
- Network topology.
- Event pulses.

Animations should support the story, not distract from content.

---

## 10. Projects Overview Page

The projects overview page should act as the navigation hub for all detailed case studies.

Each project card should show:

- Project title.
- Project category.
- Short summary.
- Primary responsibilities.
- Technology highlights.
- Confidentiality label when needed.
- CTA to open the case study.

Recommended project categories:

- Real-Time Systems.
- Enterprise Platforms.
- Geospatial Systems.
- Data Platforms.
- Security & Authentication.
- Fullstack Applications.

The page should support subtle interaction such as:

- Hover reveal.
- Filter by category.
- Filter by stack.
- Animated transitions between filters.
- Highlighted featured projects.

Do not turn filtering into unnecessary complexity if the project count remains small.

---

## 11. ADS-B Flagship Project Page

The ADS-B page should be one of the most visually and technically impressive sections of the portfolio.

It must explain engineering capability without leaking confidential information.

### 11.1 Page Story Structure

Recommended sequence:

1. Project introduction.
2. System context.
3. Responsibility summary.
4. Live-data concept demo.
5. Aircraft tracking simulation.
6. Playback concept.
7. Alert concept.
8. Backend data-flow explanation.
9. High-availability and failover explanation.
10. Authentication and security explanation.
11. Technology stack.
12. Engineering lessons / capabilities demonstrated.

### 11.2 Interactive Aircraft Simulation

Create a conceptual interactive visualization with synthetic aircraft data.

Possible interactions:

- Aircraft markers moving along predefined routes.
- Play / pause.
- Playback speed selector.
- Timeline scrubber.
- Select an aircraft marker.
- Display synthetic aircraft details.
- Toggle route trails.
- Toggle labels.
- Toggle alert state.
- Reset simulation.
- Zoom or pan a conceptual map canvas.

The simulation must explicitly use synthetic or mock data.

### 11.3 Suggested UI State Model

Example:

```js
const simulationState = reactive({
  isPlaying: true,
  playbackSpeed: 1,
  selectedAircraftId: null,
  showTrails: true,
  showLabels: false,
  currentTime: 0,
})
```

The implementation details should live inside composables, not directly inside the route view.

### 11.4 Suggested Composable API

```js
const {
  aircraft,
  selectedAircraft,
  isPlaying,
  playbackSpeed,
  play,
  pause,
  reset,
  selectAircraft,
  setPlaybackSpeed,
  seek,
} = useAircraftSimulation()
```

### 11.5 Visualization Strategy

The page may use one of these approaches:

- SVG-based conceptual map.
- Canvas.
- CSS transforms over a simplified map background.
- OpenLayers or Mapbox only if the extra bundle size provides real value.

For a public portfolio demo, prefer the lightest solution that still communicates the capability.

Do not ship a heavy map library simply because it was used in the original project.

### 11.6 Failover Animation

Create a simplified infrastructure animation to show reliability concepts.

Example concept:

```text
Primary Data Source
        ↓
Streaming Service
        ↓
Processing Layer
        ↓
Realtime API
        ↓
Frontend Dashboard

Secondary / Backup Source → Failover Path
```

Allow a user to trigger a simulated primary-source failure.

Expected interaction:

1. User clicks “Simulate Primary Failure”.
2. Primary node changes to degraded state.
3. Traffic animation reroutes to backup source.
4. UI explains failover concept.
5. User can restore the primary source.

This demonstrates understanding of high-availability concepts without exposing real infrastructure.

### 11.7 Alert Simulation

Provide a small simulated alert interaction.

Example states:

- Normal.
- Warning.
- Critical.

User actions may trigger:

- Route deviation.
- Signal interruption.
- Emergency indicator.

Use synthetic labels and avoid real sensitive operational examples.

---

## 12. Monitoring Platform Project Page

This page should explain the multi-sensor real-time monitoring platform.

Core story:

- Airspace monitoring.
- Aircraft tracking.
- CCTV integration.
- RF/radio monitoring.
- Anomaly detection.
- Alerts.
- Operational dashboards.
- Multi-source data integration.
- Real-time backend streaming.
- Secure access control.

### Suggested Interactive Sections

#### A. Sensor Layer Toggle

Allow visitors to toggle conceptual layers:

- Aircraft.
- CCTV.
- RF / radio.
- Alerts.

#### B. Event Stream Simulation

Create a small synthetic event stream with entries such as:

```text
[12:04:08] Aircraft track updated
[12:04:10] CCTV source connected
[12:04:12] RF anomaly detected
[12:04:14] Alert acknowledged
```

#### C. Multi-Sensor Correlation

Create a visual explanation showing several synthetic sensor sources converging into a unified monitoring interface.

The purpose is to communicate the engineering problem clearly, not to reproduce confidential functionality.

---

## 13. Reinsurance Platform Project Page

Explain the BRINS x TUGURE project using an enterprise workflow story.

Focus on:

- Credit reinsurance workflows.
- React frontend.
- Fastify backend.
- PostgreSQL.
- Prisma.
- Keycloak.
- RBAC.
- Dashboards.
- Notifications.
- Audit-support workflows.
- REST API design.
- Validation.
- Bulk CSV processing.

### Recommended Interactive Element

Build a conceptual workflow visualizer:

```text
CSV Upload
   ↓
Validation
   ↓
Data Processing
   ↓
Database Persistence
   ↓
Audit Trail
   ↓
Dashboard / Notification
```

Let users click each step to view a short engineering explanation.

---

## 14. Hyang Project Page

Focus this page on integration, security, metadata systems, and data pipeline observability.

Key topics:

- Apache Airflow.
- Apache Hop.
- Apache NiFi.
- OpenMetadata.
- React monitoring interfaces.
- Metadata catalog.
- Glossary.
- Table lineage.
- Keycloak.
- RBAC.
- HMAC-SHA256.
- Request signing.
- Replay protection.
- Backend proxies.
- Resource whitelisting.
- Token forwarding.
- Technical authentication.
- Caching.
- Automated tests.

### Recommended Interactive Element

A clickable data-lineage diagram:

```text
Source → Pipeline → Processing → Dataset → Metadata Catalog
```

When clicking a node, reveal its conceptual responsibility.

---

## 15. Shared Components

Only truly cross-feature UI belongs in `src/shared/components/`.

Examples:

```text
src/shared/components/
├── AppHeader.vue
├── AppFooter.vue
├── AppContainer.vue
├── SectionHeading.vue
├── ProjectCard.vue
├── TechBadge.vue
├── IconButton.vue
├── ExternalLink.vue
└── RevealOnScroll.vue
```

Do not move a component into `shared` simply because it is small.

A component belongs in `shared` only when it is legitimately reused by multiple modules.

---

## 16. Shared Data Strategy

Portfolio project content should be data-driven where practical.

Example:

```text
src/shared/data/
├── projects.js
├── technologies.js
├── experience.js
└── socialLinks.js
```

Example project structure:

```js
export const projects = [
  {
    slug: 'ads-b-platform',
    title: 'Confidential National ADS-B Platform',
    category: 'Real-Time Airspace Surveillance',
    featured: true,
    confidential: true,
    technologies: [
      'Vue.js',
      'Tailwind CSS',
      'OpenLayers',
      'Mapbox',
      'Node.js',
      'Fastify',
      'PostgreSQL',
      'Prisma',
      'Keycloak',
    ],
  },
]
```

Do not place complex interactive logic inside static data files.

---

## 17. Styling Rules

Use Tailwind CSS as the primary styling system.

### Design Direction

The visual language should feel:

- Professional.
- Technical.
- Minimal but not empty.
- Modern.
- Data-driven.
- High-trust.
- Mature enough for enterprise engineering roles.

### Avoid

- Excessive glassmorphism.
- Excessive neon effects.
- Gamer-style UI.
- Too many gradients.
- Overusing animated backgrounds.
- Random motion with no semantic purpose.
- Tiny text used for aesthetics.
- Poor contrast.

### Preferred Design Traits

- Strong typography hierarchy.
- Large readable headings.
- Consistent spacing.
- Restrained surface elevation.
- Clear cards.
- Intentional borders.
- Subtle grids or technical visual motifs.
- Strong responsive design.
- Clear focus states.

---

## 18. Animation and Interaction Rules

Animations should communicate system behavior or improve navigation.

### Recommended Uses

- Route transitions.
- Scroll reveal.
- Section highlighting.
- Aircraft movement.
- Data packet movement.
- Timeline playback.
- Failover transitions.
- Event stream arrival.
- Node status changes.
- Project card hover feedback.

### Rules

- Prefer CSS transitions for simple motion.
- Prefer requestAnimationFrame for continuous simulations when necessary.
- Avoid creating uncontrolled timers.
- Always clean up intervals, animation frames, subscriptions, and event listeners.
- Respect `prefers-reduced-motion`.
- Avoid animations that block navigation.
- Avoid heavy JavaScript animation libraries unless they clearly improve maintainability.
- Keep interaction state inside composables.

---

## 19. JavaScript and Vue Rules

Use Vue 3 Composition API.

Prefer:

```vue
<script setup>
```

### Component Rules

- Keep components focused.
- Prefer props and emits for parent-child communication.
- Avoid hidden cross-module dependencies.
- Use computed properties for derived state.
- Use watchers only when side effects are required.
- Avoid unnecessary global state.
- Introduce Pinia only if genuine shared application state requires it.

For this portfolio, most state should remain local to a page or composable.

### Composable Rules

A composable should:

- Start with `use`.
- Return a clear public API.
- Hide implementation details.
- Clean up side effects with Vue lifecycle hooks.
- Be testable independently of the full page where possible.

---

## 20. Performance Requirements

Performance is a first-class requirement.

### Required Practices

- Lazy-load route-level modules.
- Lazy-load heavy visualizations.
- Avoid loading map libraries on the landing page.
- Use dynamic imports for large project-specific dependencies.
- Optimize images.
- Prefer SVG for simple technical illustrations.
- Avoid autoplay video backgrounds.
- Avoid unnecessary dependencies.
- Reduce bundle duplication.
- Keep shared utilities lightweight.
- Use responsive images where relevant.
- Defer below-the-fold media.

### Performance Mindset

A project page may be visually impressive, but it should not make the entire portfolio slow.

The ADS-B simulation should only load when the ADS-B page is visited.

---

## 21. Accessibility Requirements

Minimum expectations:

- Semantic HTML.
- Keyboard-accessible interactive controls.
- Visible focus states.
- Proper button elements for actions.
- Accessible labels for icon-only controls.
- Sufficient color contrast.
- Reduced-motion support.
- No interaction that requires a mouse only.
- Meaningful headings.
- Decorative graphics hidden from screen readers when appropriate.

For simulations, provide readable text equivalents for important state changes.

---

## 22. Environment Configuration

Maintain separate files:

```text
.env.development
.env.staging
.env.production
```

Use **UPPER_CASE** naming.

For Vite-exposed variables, use the required Vite public prefix when applicable.

Example conceptual variables:

```text
VITE_APP_ENV
VITE_API_BASE_URL
VITE_ANALYTICS_ID
```

### Rules

- Never commit production secrets.
- Never expose private credentials in frontend environment variables.
- Use GitHub Secrets or equivalent CI/CD secret storage.
- Document all required variables in `ARCHITECTURE.md`.
- Validate required environment variables at application startup.
- Fail clearly in development when a required variable is missing.

### Environment Validation

Create a small environment utility such as:

```text
src/shared/config/env.js
```

The application should read environment variables through this module instead of scattering `import.meta.env` access across many components.

---

## 23. `ARCHITECTURE.md` Requirement

Create a separate `ARCHITECTURE.md` document in the repository.

It should document:

- Application architecture.
- Module conventions.
- Route ownership.
- Shared code policy.
- Environment variables.
- Testing strategy.
- CI/CD checks.
- Naming conventions.
- Lazy-loading rules.
- Confidentiality rules for portfolio project content.

This document should remain synchronized with the actual codebase.

---

## 24. Code Quality Requirements

Required tools:

- ESLint.
- Prettier.

Recommended additional tooling:

- Husky.
- lint-staged.

### Required Rules

- Lint all JavaScript and Vue files.
- Format all supported source files.
- Run linting in CI/CD.
- CI/CD must fail when linting fails.
- Pre-commit hooks should run formatting and/or lint checks on staged files.
- Do not disable lint rules casually.

---

## 25. Testing Strategy

Feature tests must live inside their feature folder.

Recommended testing stack:

- Vitest for unit tests.
- Vue Test Utils for Vue component tests.
- Playwright for end-to-end tests.

### Example

```text
src/modules/adsb-page/tests/
├── useAircraftSimulation.spec.js
├── AircraftMapSimulation.spec.js
└── adsb-page.spec.js
```

### Minimum Critical Tests

#### Landing Page

- Main sections render.
- Featured project links navigate correctly.

#### ADS-B Page

- Simulation can play and pause.
- Playback speed changes correctly.
- Selecting an aircraft updates the detail panel.
- Reset restores initial simulation state.
- Failover demo switches states correctly.

#### Router

- Expected paths resolve.
- Lazy-loaded pages render.

#### Environment

- Missing required variables produce a controlled error.

---

## 26. CI/CD Requirements

The portfolio repository should contain an automated CI pipeline.

Recommended GitHub Actions checks:

```text
install
  ↓
lint
  ↓
unit-test
  ↓
build
  ↓
e2e-test
```

Minimum pipeline requirements:

- Install dependencies using a lockfile.
- Run ESLint.
- Run unit tests.
- Run production build.
- Fail pipeline on lint, test, or build errors.
- Inject deployment-specific environment values through GitHub Secrets or equivalent.

Deployment may later target platforms such as Vercel, Netlify, Cloudflare Pages, or another frontend hosting platform.

Do not hardcode deployment assumptions into business logic.

---

## 27. SEO and Metadata

Each route-level project page should have meaningful metadata.

Examples:

- Page title.
- Meta description.
- Open Graph title.
- Open Graph description.

Possible titles:

```text
Muhammad Abdul Aziz — Fullstack Developer
ADS-B Surveillance Platform Case Study — Muhammad Abdul Aziz
Real-Time Monitoring Platform Case Study — Muhammad Abdul Aziz
```

Do not expose confidential client details in metadata.

---

## 28. Content Writing Rules

Project descriptions should be concise but technically credible.

### Prefer

> Built a real-time aircraft visualization dashboard using Vue.js and geospatial technologies, supported by backend services responsible for streaming data, flight enrichment, reporting, historical track retrieval, health monitoring, and failover behavior.

### Avoid

> Created an amazing advanced system for the government.

The tone should be factual, technical, and professional.

### Project Case Study Format

Each major project page should follow a consistent format:

```text
Project Overview
Problem / Context
My Responsibilities
Key Engineering Challenges
Architecture / Data Flow
Important Features
Technology Stack
Interactive Demo
Reliability / Security Considerations
Outcome / Capabilities Demonstrated
```

---

## 29. Recommended Project Priority

Implementation order should be:

### Phase 1 — Foundation

- Remove Vue starter content.
- Configure Tailwind CSS.
- Configure router.
- Establish module architecture.
- Create shared layout.
- Add environment configuration.
- Add ESLint / Prettier.

### Phase 2 — Landing Page

- Hero.
- Profile summary.
- Skills.
- Selected projects.
- Experience timeline.
- Contact links.

### Phase 3 — Project Overview

- Project data source.
- Project cards.
- Navigation to detail pages.

### Phase 4 — ADS-B Flagship Page

- Case study content.
- Interactive aircraft simulation.
- Playback controls.
- Alert simulation.
- Failover simulation.
- Responsive behavior.

### Phase 5 — Monitoring Platform Page

- Multi-sensor visualization.
- Event stream demo.
- Project architecture explanation.

### Phase 6 — Remaining Project Pages

- Reinsurance platform.
- Hyang project.
- Coding Camp.
- BEM FEB.
- Internship project.

### Phase 7 — Quality

- Accessibility.
- Performance optimization.
- Testing.
- CI/CD.
- SEO.
- Final responsive review.

---

## 30. AI Implementation Rules

Any AI implementing this project must follow these instructions.

### MUST

- Follow feature-based modular architecture.
- Keep route-level modules isolated.
- Keep `App.vue` minimal.
- Use Vue Router.
- Use lazy-loaded route components.
- Use PascalCase component and route filenames.
- Use kebab-case URL paths.
- Use Composition API.
- Move non-trivial logic into composables.
- Keep shared code truly reusable.
- Use Tailwind CSS for visual styling.
- Keep project content factually aligned with the CV.
- Protect confidential project information.
- Use synthetic data for interactive confidential project demos.
- Write maintainable code instead of over-engineered abstractions.
- Consider mobile behavior for every page.
- Consider accessibility for every interactive component.
- Add tests for important composables and interactions.
- Clean up timers, animation frames, event listeners, and subscriptions.

### MUST NOT

- Recreate the default Vue starter page.
- Put the whole website inside `App.vue`.
- Create one global `/components` folder containing unrelated feature components.
- Put unrelated business logic directly inside route views.
- Load all project pages eagerly.
- Hardcode confidential data.
- Invent project outcomes or metrics not present in the source material.
- Use real operational coordinates, flight data, credentials, client data, or screenshots from confidential systems unless explicitly authorized.
- Add a dependency when native Vue, JavaScript, CSS, or SVG can solve the problem cleanly.
- Add Pinia without a clear cross-feature state requirement.
- Sacrifice accessibility for animation.
- Sacrifice performance for decorative effects.

---

## 31. Definition of Done

A feature is complete only when:

- The route works.
- The feature follows the module contract.
- The view is responsive.
- The UI matches the portfolio design system.
- Important interactions are keyboard accessible.
- The code passes linting.
- Relevant tests pass.
- Large dependencies are lazy-loaded when appropriate.
- No confidential information is exposed.
- No unnecessary console errors or warnings exist.
- The feature is understandable to another developer without reading every source file.

---

## 32. Initial Repository Target

After removing the default Vue starter content, the first meaningful repository milestone should approximately resemble:

```text
portfolio-fe/
├── .env.development
├── .env.staging
├── .env.production
├── ARCHITECTURE.md
├── README.md
├── package.json
├── vite.config.js
└── src/
    ├── app/
    │   ├── layouts/
    │   │   ├── DefaultLayout.vue
    │   │   └── ProjectLayout.vue
    │   ├── router/
    │   │   ├── index.js
    │   │   └── routes.js
    │   └── AppShell.vue
    ├── modules/
    │   ├── landing-page/
    │   ├── details-page/
    │   ├── adsb-page/
    │   ├── monitoring-platform-page/
    │   ├── reinsurance-page/
    │   ├── hyang-page/
    │   └── about-page/
    ├── shared/
    │   ├── components/
    │   ├── composables/
    │   ├── config/
    │   ├── constants/
    │   ├── data/
    │   ├── services/
    │   └── utils/
    ├── App.vue
    └── main.js
```

---

## 33. Final Product Principle

This portfolio should not merely say that the developer has experience with real-time systems, enterprise platforms, geospatial interfaces, authentication, and backend integration.

It should **demonstrate those capabilities through the website itself**.

The project architecture should show maintainability.

The route loading strategy should show performance awareness.

The interactive ADS-B simulation should show frontend engineering capability.

The system diagrams should show architectural understanding.

The confidentiality treatment should show professional judgment.

The testing and CI/CD setup should show production discipline.

The final result should feel like a real engineering product built by the person whose portfolio it represents.
