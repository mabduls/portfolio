# Portfolio Implementation Foundation

This document is the current implementation contract for the portfolio of **Muhammad Abdul Aziz**, a Fullstack Developer. It includes the user-requested professional dark theme and ADS-B results gallery, and replaces the older mandatory simulation requirements. The [overhaul plan](PORTFOLIO_OVERHAUL_PLAN.md) describes the complete redesign scope; [ARCHITECTURE.md](../ARCHITECTURE.md) describes the code structure.

## Product direction

Help recruiters, HR professionals, and technical readers understand the developer, the purpose of each project, and the practical technologies involved. Lead with ordinary language and project context. Make technical depth available without requiring visitors to operate a demo.

Use a professional dark interface with layered navy/charcoal surfaces, light slate text, a restrained soft blue accent, clear headings, subtle borders, and consistent spacing. Avoid neon glow, background grids, ornamental counters, fake live indicators, autoplay simulations, and giant marketing headlines. Keep the dark theme as the default; a theme toggle is outside this scope. Do not add unrelated product features.

## Source authority

Use these current project documents for the four primary stories:

- [ADS-B overview](ADSB_PROJECT_OVERVIEW.md)
- [Government border security overview](<confidential goverment.md>)
- [Tugure and BRINS overview](<brins and tugure.md>)
- [Hyang overview](hyang.md)

These documents describe application code and integration surfaces. They do not certify production availability, measured business results, or individual ownership of every feature. Separate application capabilities from confirmed personal contributions and external integrations.

Older facts in the secondary project entries and existing education/experience profile remain available. Revalidate them when new source information is supplied. Never invent project dates, team size, user counts, business savings, uptime, or results.

## Required project distinctions

### ADS-B Aircraft Tracking Platform

Explain Automatic Dependent Surveillance–Broadcast on first mention. Describe aircraft maps, selection, trails, history/playback controls, monitoring, reports, alerts, and administration. The in-scope application has a Vue frontend and an Express backend, with an in-memory aircraft cache and configured SPIRE enrichment.

Do not substitute the Government Border Security stack for this project. Do not imply the in-scope Express API defines an SSE route, that schema presence proves full database persistence, or that unwired backup aggregation guarantees failover. The separate aircraft streaming service is outside the supplied ADS-B overview's scope.

### Confidential Government Border Security Platform

Explain land and air border monitoring, related sensor/aircraft views, maps, alerts, analytics, and reports. Distinguish its main API and specialized data services from the standalone ADS-B application. Some views use demonstration data and other capabilities depend on upstream systems.

Describe AI-oriented areas as screens/integrations where supported. Do not imply that model training, all live detections, or older FFmpeg claims are established by the new overview. Preserve product-level confidentiality.

### Tugure × BRINS Reinsurance Platform

Describe the wider operational portal: contracts, debtor submissions and batches, claims, supporting documents, financial follow-up, notifications, reporting, and administration. Explain unfamiliar terms briefly when needed.

Do not invent a mandatory workflow sequence, payment-gateway capability, or measured efficiency improvement. PostgreSQL access includes a generic JSON record layer and Prisma model definitions; active paths vary. Identity, email, files, and live updates require configuration.

### Hyang Data Platform Web Application

Explain the data lakehouse portal, sources/pipelines, data quality, catalog/glossary, lineage, reporting, evidence, integration health, and administration. Group supported external tool integrations separately from the application stack.

Do not imply every native tool is connected, every frontend adapter has a backend route, or evidence uploads use MinIO. The documented evidence API uses local files. Revalidate any older security/test/caching claims before publishing them as implemented facts.

## Page requirements

- **Home:** name and role, concise introduction, four selected projects, practical skills/experience, and contact.
- **Projects:** selected work followed by additional work; one optional domain filter; all projects visible by default.
- **Case studies:** overview and intended users, verified contribution when supplied, grouped features, technical approach, implementation notes, capabilities, and next steps. ADS-B additionally includes a photo-only project results gallery using the six user-supplied screenshots, with thumbnails, full-size viewing, keyboard navigation, and actual-size inspection.
- **About:** supplied professional experience, education, skill groups, and project/contact actions.
- **Navigation and footer:** Home, Projects, About, Contact, and user-supplied public contact links. Omit the resume at the user's request.
- **404:** clear “Page not found” copy and working recovery links.

Retain the existing URLs, route names, lazy-loaded views, shared case-study rendering, and secondary project availability. Do not render empty contribution or results panels. The supplied ADS-B screenshots are explicitly authorized for its gallery; keep their source files unchanged and do not claim that they are synthetic. Use optimized preview assets and load originals only for full-size viewing.

## Responsive and accessibility requirements

Use available viewport width in CSS pixels. Keep content bounded on large displays. Start with one-column mobile layouts; introduce two-column cards at 768px and a case-study contents sidebar at 1024px. Use a native contents disclosure below that width. The main navigation uses an accessible Menu button below 768px; menu links appear in document flow.

Text must wrap without clipping. Controls must work by touch and keyboard. Preserve the skip link, visible focus, semantic headings, route/hash focus restoration, and reduced-motion behavior. Use meaningful alternative text for images and a readable text equivalent for illustrations. Gallery dialogs must preserve keyboard focus, support Escape, and restore scrolling when dismissed. Avoid sticky elements on short landscape screens. Do not hide overflow to conceal layout defects.

Test small phones, tablets, laptops, 1920px/2560px displays, breakpoint-adjacent widths, short landscape screens, enlarged text, and 320 CSS-pixel reflow. Automated accessibility checks complement visual and keyboard review.

## Engineering and verification

Keep Vue Composition API, JavaScript, Vue Router, Vite, and the feature-based module structure. Put reusable UI in `src/shared/components`, content in `src/shared/data`, and environment access in `src/shared/config/env.js`. Route views remain dynamically imported. Avoid new global dependencies, remote fonts, map libraries, and timer-based decorations.

Format changed code and run `npm run verify` and `npm run test:e2e`. Update tests when planned behavior changes; remove tests only for retired functionality. Keep meaningful navigation, content-boundary, filter, focus, responsive, and accessibility checks. Review build size and initial mobile loading without inventing performance results.

Maintain an implementation record of checks and unresolved publication facts. Local implementation does not authorize deployment, commits, pushes, or release actions.
