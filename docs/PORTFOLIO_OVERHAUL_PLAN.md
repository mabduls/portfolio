# Portfolio Website Overhaul Plan

**Owner:** Muhammad Abdul Aziz  
**Language:** English  
**Prepared:** 13 October 2026  
**Status:** Implemented locally. See [the implementation record](PORTFOLIO_OVERHAUL_IMPLEMENTATION.md) for verification and remaining publication facts.

**Follow-up preferences:** Use the supplied public email and LinkedIn URL and omit the resume action. The user subsequently requested a professional dark theme and an ADS-B photo results section using `src/assets/icons/adsb-project`. These later requests supersede the light palette and screenshot restrictions below for the six supplied ADS-B assets. See the implementation record for the current result.

## 1. Goal and scope

Redesign the portfolio so recruiters, HR professionals, and technical readers can quickly understand who Abdul is, what each project does, and which skills his work demonstrates. The website should feel simple, professional, informative, and engaging through clear writing and useful project examples.

The overhaul covers the home page, project index, four primary case studies, About page, navigation, footer, shared visual system, responsive behavior, accessibility, and project metadata. Existing secondary projects remain available with consistent styling; their factual content needs a separate review if new information becomes available.

Keep the existing Vue application and feature-based structure. A framework migration is unnecessary for this redesign.

### Visitor outcomes

| Reader           | What they should understand                                                             | How the site should help                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Recruiter        | Role, relevant skills, strongest projects, and contact options                          | Direct introduction, four featured projects, concise experience, and visible contact/resume links when supplied |
| HR professional  | Business purpose, professional experience, and contribution                             | Plain-English project summaries, domain explanations, and verified responsibility statements                    |
| Technical reader | Application behavior, stack, service boundaries, engineering decisions, and limitations | Structured case studies with technical details below the overview and optional illustrative examples            |

A reader should not need to operate a simulation or recognize an acronym to understand a project.

## 2. Sources and content authority

Use these documents as the current factual basis for the four project descriptions:

| Project                    | Source                                                   | Canonical display name                           |
| -------------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| ADS-B                      | [ADSB_PROJECT_OVERVIEW.md](ADSB_PROJECT_OVERVIEW.md)     | ADS-B Aircraft Tracking Platform                 |
| Government border security | [confidential goverment.md](<confidential goverment.md>) | Confidential Government Border Security Platform |
| Reinsurance                | [brins and tugure.md](<brins and tugure.md>)             | Tugure × BRINS Reinsurance Platform              |
| Data platform              | [hyang.md](hyang.md)                                     | Hyang Data Platform Web Application              |

The existing [implementation foundation](PORTFOLIO_AI_IMPLEMENTATION_FOUNDATION.md) and [architecture guide](../ARCHITECTURE.md) remain useful for application structure. For the redesign, this plan supersedes their older visual direction, mandatory simulation emphasis, and project descriptions where these conflict with the user's current request or the four newer overviews. Update those documents during implementation so future work follows a consistent direction.

### Editorial rules

- Explain the product before listing its technologies.
- Separate documented project functionality from Abdul's individual contribution. Repository overviews establish what the application contains; they do not establish who implemented every feature.
- Reconcile existing responsibility statements with Abdul's actual work before publishing first-person claims. Where attribution is unavailable, describe application behavior without implying individual ownership.
- Separate implemented code, configurable integrations, illustrative portfolio examples, and verified deployment outcomes.
- Use qualitative descriptions of capabilities when no measured result is available. Do not invent adoption figures, performance improvements, uptime, scale, delivery dates, or business savings.
- Explain ADS-B on first mention as **Automatic Dependent Surveillance–Broadcast**. Explain other specialized terms where they first appear.
- Use “Government” and “Reinsurance” consistently in public copy. Preserve the existing source filenames.
- Keep confidentiality protections for the government project and the currently confidential ADS-B entry. A revised display name does not make its implementation or data public.

## 3. Current website findings

The current website already has reusable components, lazy-loaded routes, centralized project/profile data, keyboard focus handling, reduced-motion support, and automated tests. These provide a useful implementation foundation.

The main redesign needs are:

| Current behavior or content                                                                   | Planned change                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dark cyan visual system with gradients, grid textures, shadows, and repeated technical labels | Adopt a quiet light visual system with a restrained blue accent, clearer hierarchy, and fewer decorative surfaces                                            |
| Generic headline about making complex systems understandable                                  | Lead with name, Fullstack Developer role, and the application types Abdul works on                                                                           |
| Animated hero topology with “Live,” event counts, and status indicators                       | Remove it; introduce the developer and selected work without synthetic operational claims                                                                    |
| Repeated capabilities, stack, flagship simulation, and engineering language                   | Consolidate into selected work, a brief skills/experience section, and contact                                                                               |
| ADS-B entry lists Fastify and OpenLayers and implies backup/failover delivery                 | Align its stack with the in-scope Vue/Mapbox/Three.js frontend and Express backend; correct runtime and integration claims                                   |
| Government entry focuses on generic monitoring and FFmpeg video delivery                      | Explain border monitoring across land and air, separate services, maps, alerts, reports, and configured partner integrations; revalidate older FFmpeg claims |
| Reinsurance story centers on credit processing and CSV upload                                 | Expand to contracts, submissions, batches, claims, documents, financial follow-up, notifications, and role-aware operations                                  |
| Hyang story centers on pipelines and security proxies                                         | Explain the wider lakehouse operations and governance portal, including data quality, catalog, lineage, evidence, and administration                         |
| Contact links are null and the page explains that links are missing                           | Gather a verified contact channel and resume; avoid making a dead-end contact panel part of the finished design                                              |
| Technical demonstrations appear before much of the case-study explanation                     | Put purpose, users, product features, and verified contribution first; make demonstrations optional                                                          |

Audit hardcoded descriptions inside project views as well as the shared data. Updating only project cards would leave outdated claims on detail pages.

## 4. Information architecture and page content

### Navigation

Use a compact header with Abdul's name and four destinations: **Home**, **Projects**, **About**, and **Contact**. Contact links to the home contact section. Show **Resume** only when a real file or URL is available.

Retain existing project URLs to preserve bookmarks:

- `/projects/ads-b-platform`
- `/projects/monitoring-platform`
- `/projects/reinsurance-platform`
- `/projects/hyang-platform`

Update display names, page titles, descriptions, and in-page wording without changing slugs. Preserve the existing secondary-project routes and the 404 recovery flow.

### Home page

Use this section order:

1. **Introduction:** name, role, short description, and “View projects” action. Add a resume action once supplied.
2. **Selected projects:** the four primary projects, each with a plain-English summary, domain label, three or four representative technologies, and “Read case study.”
3. **Skills and experience:** short groups covering frontend, backend/data, and integrations/access control; a concise experience preview linked to About.
4. **Contact:** verified email and relevant professional profiles; resume link when available.

Suggested introductory copy:

> **Muhammad Abdul Aziz**  
> **Fullstack Developer**  
> I build web applications that help people track aircraft, manage reinsurance workflows, and operate data platforms. My work spans frontend interfaces, backend APIs, and system integrations.

This is draft copy grounded in the existing profile and project context. Confirm the scope of personal involvement before final publication.

Use a two-by-two featured-project grid on sufficiently wide screens. Default order: ADS-B, Tugure × BRINS, Hyang, and Government Border Security. This gives readers an early mix of real-time, business workflow, and data-platform work. The four projects have equal editorial importance; no separate flagship simulation section is needed.

### Project index

- Show the four primary projects first and the existing secondary work afterward under “Additional work.”
- Use one simple domain filter: All, Aircraft Tracking, Border Monitoring, Reinsurance, and Data Platforms; retain appropriate categories for additional work.
- Remove the prominent technology dropdown unless later usability review shows it helps readers find relevant work. Technical details are available inside each case study.
- Keep filters optional: all projects are visible by default, controls wrap without clipping, and an empty result offers a reset action.
- Each card answers “What does this application help users do?” Avoid filling cards with acronym lists.

### Shared case-study structure

1. **Overview:** title, a short explanation, intended user groups, domain, and confidentiality label where applicable.
2. **Problem and context:** the tasks the product brings together and why that matters to users.
3. **My contribution:** verified responsibilities, role, and scope; dates or team information only when supplied.
4. **Main features:** four to six grouped product capabilities with concrete examples.
5. **Technical approach:** frontend/backend responsibilities, main technologies, and relevant external integrations.
6. **Engineering considerations:** selected constraints, supported decisions, and implementation boundaries. Do not invent an interview-style challenge story.
7. **Delivered capabilities and limitations:** what the documented application supports; measured outcomes only with evidence.
8. **Optional example:** a static illustration or user-started synthetic walkthrough when it adds understanding.
9. **Next step:** another project and a contact link.

Purpose, user groups, and contribution should be visible without expanding an accordion. Secondary stack details and integration notes can use native disclosure controls. Keep technical content approachable with one short explanation before any diagram or list.

### About and footer

The About page should focus on the existing professional background, experience, education, and concrete skill groups. Preserve verified profile facts; employment dates, availability, location, and employment preferences require supplied information. Remove duplicated abstract capability statements.

Use a small footer with name, navigation, and verified contact/profile links. Update the 404 copy to plain language such as “Page not found” with a clear return action.

## 5. Replacement project content

The summaries below are draft replacement copy. “Potential users” identifies an audience inferred from the documented workflows, not a claim about actual deployment or customer adoption.

### 5.1 ADS-B Aircraft Tracking Platform

**Card summary:**

> An aircraft tracking application with an interactive map, aircraft details, flight history, alerts, and operational reports.

**Case-study overview:**

> ADS-B stands for Automatic Dependent Surveillance–Broadcast. This application brings aircraft information into an authenticated web interface so users can explore positions, inspect aircraft, review flight history, and access monitoring and reporting views. A Vue frontend handles the map and application pages, while a Node.js/Express backend provides aircraft caching, data enrichment, supporting APIs, and service-health information.

**Potential users:** aircraft monitoring operators and staff reviewing flight information or reports.

**Feature groups to explain:**

- Interactive aircraft map: filters, selection, details, trails, and position smoothing.
- Aircraft exploration: flight/session views, history/playback controls, and an optional 3D aircraft-follow view.
- Operational information: monitoring, summaries, reports, alert panels, and exports.
- Identity and administration: Keycloak sign-in, authenticated routes, and user-management APIs.
- Supporting services: in-memory aircraft cache, configured SPIRE enrichment, weather/photo proxies, and health/status APIs.

**Primary stack:** Vue 3, Pinia, Mapbox GL JS, Three.js, Node.js, Express, and Keycloak. Describe Chart.js and styling/report libraries in secondary details. Describe Prisma/PostgreSQL as configured schema/service components with runtime qualifications.

**Required corrections and boundaries:**

- Do not present Fastify or OpenLayers as the primary stack of the two repositories covered by this overview.
- The overview excludes the separate `spire-serve` repository. Frontend stream integrations and the in-scope Express APIs are separate surfaces; the current Express entry point does not define an SSE stream route.
- The current backend startup uses an in-memory aircraft cache. A Prisma schema is not evidence that all aircraft state is persisted to PostgreSQL.
- Backup aggregation is not wired into the documented startup. Database, Redis, and WebSocket health checks require additional wiring. Remove guaranteed failover, high-availability, and automatic backup claims.
- Replace the current failover demonstration with a short service-health explanation. Retain an aircraft selection/trail example only if it helps the reader and is clearly synthetic.
- Do not repeat older national coverage or deployment-scale claims without additional supporting evidence.

### 5.2 Confidential Government Border Security Platform

**Card summary:**

> A border monitoring interface that brings land sensors, aircraft information, maps, alerts, and reports into one workspace.

**Case-study overview:**

> This confidential project combines land and air border monitoring in a web application. It brings together sensor and surveillance views, aircraft information, alerts, geospatial layers, analytics, and reporting. The system includes a frontend, a main backend API, and separate aircraft and tower data services. Operational data depends on configured databases, feeds, and partner systems; some views use demonstration data.

**Potential users:** border monitoring operators, analysts, and authorized administrators.

**Feature groups to explain:**

- Land monitoring: camera views, radio-frequency monitoring, digital barriers, sensor alerts, and reports.
- Air monitoring: aircraft and airport views, flight-related categories, maps, alerts, and reporting.
- Situational awareness: dashboard alerts, map layers, areas of interest, weather, and boundaries.
- Integration services: the main API connects feature modules and partner systems; specialized aircraft and tower services handle related feeds.
- Access and administration: authenticated navigation, access checks, API management, analytics, and exports.

**Primary stack:** Vue 3, Pinia, Node.js, Fastify, PostgreSQL, Prisma, and Keycloak. Group mapping libraries separately. Identify SSE, WebSocket, and Kafka as integration/transport technologies in the relevant service context.

**Required corrections and boundaries:**

- Name the project as border security rather than a generic monitoring dashboard.
- Distinguish this multi-service system from the standalone ADS-B application. Shared aircraft-related concepts do not imply identical repositories or runtime architecture.
- Describe facial-recognition and other AI-oriented areas as screens/integrations represented in the repository. Do not imply Abdul trained the models or that all detection capabilities are operational.
- Do not present every view as live: the ADS-B overview uses dummy data, and other views depend on upstream configuration.
- Revalidate or remove FFmpeg claims because the new overview does not establish that implementation.
- Use only a generic product-level illustration. Keep client identity, real locations, sensor placement, operational rules, partner identifiers, credentials, and infrastructure details out of public copy and assets.

Suggested public note: **“This confidential project is described at a high level. Any illustrative example uses fictional data.”**

### 5.3 Tugure × BRINS Reinsurance Platform

**Card summary:**

> A role-aware portal for managing reinsurance contracts, debtor submissions, claims, documents, and payment follow-up between Tugure and BRINS.

**Case-study overview:**

> This web application brings operational workflows between Tugure and BRINS into one portal. Users can manage contracts, submit and review debtor batches, process claims, handle supporting documents, and follow financial records and payment status. A React frontend communicates with a Fastify backend that manages workflows, data access, authentication integrations, files, and notifications.

**Potential users:** operations teams, reviewers, finance staff, and administrators with role-specific responsibilities.

**Feature groups to explain:**

- Contracts: administration, file validation, approvals, and closure/invalidation actions.
- Submissions and batches: manual or bulk input, duplicate checking, review, status tracking, and bulk actions.
- Claims and recovery: claim submission/review, supporting documents, and subrogation records.
- Financial follow-up: nota/payment recording, payment-status views, and reconciliation-related records.
- Supporting operations: dashboards, notifications, email workflows, audit views, and system settings.
- Secure files and access: Keycloak roles, signed requests, and MinIO/S3-compatible storage with signed downloads.

**Primary stack:** React 18, TanStack React Query, Node.js, Fastify, PostgreSQL, and Keycloak. Explain Prisma alongside `pg`, and MinIO/S3, SSE, and SMTP as supporting technologies/integrations.

**Required corrections and boundaries:**

- Expand beyond the current narrow credit/CSV story. Use “reinsurance operations” unless a more specific product scope is confirmed.
- Explain specialist terms briefly: debtor submissions are records submitted for review; bordero refers to grouped insurance records; subrogation concerns recovery records; nota refers to a financial note/document in the workflow. Confirm organization-specific definitions before publication.
- Do not invent a fixed end-to-end workflow sequence from the list of implemented pages. Validate the existing workflow explorer against actual business transitions.
- Describe payment recording and follow-up without implying the application executes bank transfers or has a certified payment gateway.
- The backend contains both generic JSON record persistence and Prisma models; do not claim all entities follow one persistence path.
- Sign-in, file operations, email, and live updates depend on configured services. Do not claim measured efficiency gains without evidence.

### 5.4 Hyang Data Platform Web Application

**Card summary:**

> A data lakehouse portal for managing sources and pipelines, discovering datasets, reviewing data quality, and tracing lineage across connected tools.

**Case-study overview:**

> Hyang is a web portal for operating and governing a data lakehouse—a data environment combining storage, processing, and analytics capabilities. It brings data sources, pipelines, metadata, quality checks, reporting, administration, and operational evidence into one interface. Its React frontend works with a Fastify backend that stores portal records and connects to configured data tools.

**Potential users:** data engineers, analysts, data stewards, and platform administrators.

**Feature groups to explain:**

- Data operations: sources, pipelines, tool workspaces, dataset layers, and promotion flows.
- Governance and discovery: catalog, business glossary, dataset exploration, lineage, and impact analysis.
- Data quality: rules, execution history, and issue review.
- Consumption: BI datasets, dashboards, and connections.
- Operational assurance: use cases, UAT evidence, defects, documentation, and support workflows.
- Administration and integration health: connectors, configuration, access policies, user management, and audit logs.

**Primary stack:** React 18, Node.js, Fastify, Prisma, PostgreSQL, and Keycloak. Group Airflow, Apache Hop, NiFi, OpenMetadata, Trino, MinIO, Superset, and Ranger under **Supported tool integrations**, rather than presenting them as one always-running stack.

**Required corrections and boundaries:**

- Explain the portal's broader operations and governance purpose instead of presenting it only as a pipeline monitor or proxy-security layer.
- External tools require configuration and available upstream services. Runtime configuration currently uses adapter mode and leaves native tool URLs blank.
- Frontend adapters do not prove matching backend support for every tool; distinguish the registered backend integrations from UI-only adapters.
- Evidence uploads currently use local filesystem storage. Do not describe them as stored in MinIO solely because a MinIO client is included.
- Some access-control routes exist while a governance navigation entry is hidden. Do not imply every registered page is visible by default.
- Revalidate older replay protection, resource-whitelisting, caching, and automated security-test claims before repeating them as implemented facts.

## 6. Visual design direction

Adopt a light, editorial layout with dark text, generous spacing, subtle borders, and one blue accent. Use the same visual system across all pages. Engagement comes from distinct project stories, understandable examples, and clear navigation.

### Proposed design tokens

| Element          | Starting specification                                                             |
| ---------------- | ---------------------------------------------------------------------------------- |
| Page background  | `#F8FAFC`                                                                          |
| Main surface     | `#FFFFFF`                                                                          |
| Primary text     | `#0F172A`                                                                          |
| Secondary text   | `#475569`                                                                          |
| Accent and links | `#1D4ED8`                                                                          |
| Divider/border   | `#CBD5E1`; use stronger control boundaries where needed                            |
| Typography       | Existing system sans-serif stack; monospace only for code or technical identifiers |
| Body text        | `1rem`, approximately `1.65` line height                                           |
| Main heading     | Fluid range of approximately `2rem`–`3.5rem`; avoid giant marketing headlines      |
| Content width    | Maximum `72rem`; paragraphs typically `65ch`–`75ch`                                |
| Spacing          | Consistent 4/8px scale; section gaps approximately 40–72px                         |
| Corners          | Approximately 8–12px on cards and controls                                         |
| Shadows          | Minimal; use borders and spacing for structure                                     |
| Motion           | Brief color/focus feedback where useful; honor reduced-motion settings             |

Verify color combinations in their actual states during implementation. These values are proposed design choices, not an accessibility certification.

### Component rules

- Cards should have a clear title, short summary, small domain label, limited technology tags, and an explicit case-study link.
- Use semantic headings and ordinary text for most content. Avoid putting every paragraph in a separate panel.
- Use one primary button style and one secondary style. Match the visual priority to the action's importance.
- Remove neon glow, background grids, animated topology, fake live indicators, ornamental counters, radar decoration, and repeated uppercase monospace headings.
- Omit a dark-mode toggle from the initial overhaul to keep the visual scope focused.
- Use illustrations only when they explain a workflow or boundary. Approved public media can be added later; confidential projects use generic recreations.

## 7. Responsive behavior by viewport

Base layout decisions on **available viewport width in CSS pixels**, not physical screen resolution or device model. High-density displays, browser zoom, window resizing, and split-screen use change available space. Use fluid sizing and mobile-first breakpoints; avoid fixed-width page sections or JavaScript device detection.

### Layout matrix

| Available width  | Navigation                                                               | Home and project grids                                                                      | Case-study layout                                                | Horizontal padding                          |
| ---------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------- |
| Below 640px      | Name plus accessible Menu button; expanded links in normal document flow | Single column; actions stack when needed                                                    | One column; overview and contribution before technical sections  | 16px                                        |
| 640–767px        | Compact menu retained                                                    | Single-column project cards with wider text/image arrangement only if readable              | One column; feature groups may use two columns when space allows | 24px                                        |
| 768–1023px       | Inline navigation if it fits                                             | Two-column project grid                                                                     | Single reading column; paired feature blocks where appropriate   | 24–32px                                     |
| 1024–1279px      | Inline navigation                                                        | Two columns for featured work; up to three for the full index if card text remains readable | Main content plus compact contents navigation                    | 32px                                        |
| 1280px and above | Inline navigation inside a centered container                            | Same bounded grids; avoid endlessly widening cards                                          | Bounded main reading column and contents navigation              | At least 32px outside the bounded container |

At 1920px, 2560px, and wider resolutions, keep content centered at its maximum width. Larger screens should gain whitespace rather than oversized text or more complex layouts.

### Specific behavior

- Titles and body copy wrap naturally; long URLs, technology names, and project titles must not cause horizontal page scrolling.
- Use flexible grid children with `min-width: 0`; content must not force a column wider than the viewport.
- Cards have natural height. Align desktop card actions without truncating summaries or creating mobile empty space.
- At small widths, show the full project name in a readable wrap and stack metadata and actions below it.
- Collapse desktop contents navigation into a simple “On this page” disclosure before the article sections.
- Use scroll margins for anchor targets. Recalculate router hash offsets if header height changes.
- On short landscape screens, avoid tall sticky panels or viewport-height heroes. Keep menus and all controls reachable by scrolling.
- Illustrations scale using a responsive view box. Provide a text explanation so shrinking a diagram does not remove information.
- Tables may scroll within a labeled local region; important overview information should use stacked text on mobile.
- Forms, filters, and controls remain usable by touch and keyboard. Use approximately 44px minimum interactive control height as a design target.
- At high device pixel ratios, prefer SVG or appropriately sized raster variants. Do not change the layout based on pixel density.
- Test zoom and enlarged text; change to the compact navigation whenever the available width no longer supports inline links.

### Responsive verification matrix

Check representative sizes: **320×568**, **375×667**, **390×844**, **640×960**, **768×1024**, **1024×768**, **1280×720**, **1440×900**, **1920×1080**, and **2560×1440**. Also inspect widths immediately below and above 640px, 768px, and 1024px, plus a short mobile landscape viewport such as 844×390.

Verify every route at one small-phone and one desktop size. Inspect Home, Projects, and all four primary case studies across the remaining matrix. Test 200% zoom and a 320 CSS-pixel reflow equivalent, keyboard navigation, touch interaction, reduced motion, and device pixel ratios of 1 and 2. These are planned checks, not completed test results.

## 8. Interaction, accessibility, and performance

### Interaction

- Keep navigation, project links, simple filters, and optional disclosures as the primary interactions.
- Remove the home topology animation and the unsupported ADS-B failover story.
- Default project examples to a static preview with an explicit “Start example” action. Label fictional data and make examples optional.
- Keep at most one useful example per primary case study: aircraft selection, generic border event review, a validated reinsurance task, or a simplified lineage relationship.
- Provide a text equivalent and pause/reset controls where an example changes over time. Stop timers on pause or unmount.
- Remove existing example components and their simulation-only code/tests when they no longer support the final story; retain useful behavior tests for any surviving examples.

### Accessibility

- Preserve the skip link, semantic landmarks, route focus handling, visible focus indicators, and reduced-motion behavior.
- Use one `h1` per page and a logical heading hierarchy. Make the shared card heading level configurable: home cards sit under an `h2`; index cards should fit that page's hierarchy.
- Give the compact menu a clear accessible name, expanded state, and associated navigation. Close it on route changes and Escape, and return focus when appropriate.
- Use native links, buttons, and disclosure elements. Do not nest buttons inside a full-card link overlay.
- Make filters understandable with text labels and selected states; never use color alone to communicate status.
- Verify text and control contrast, zoom/reflow, keyboard operation, diagram alternatives, and meaningful link names.
- Extend automated accessibility checks beyond Home to Projects, About, and all four primary case studies; pair them with manual keyboard and visual review.

### Performance and metadata

- Preserve lazy-loaded route views and keep optional examples out of the home bundle.
- Avoid new map, animation, remote-font, or visualization dependencies unless required for a verified need.
- Compress any approved media, declare dimensions, and lazy-load below-the-fold images.
- Record the current build size before implementation and compare it with the redesign. Investigate unexpected shared-bundle growth.
- Check initial loading under a mobile network profile; set performance budgets from a measured baseline rather than claiming unmeasured speed improvements.
- Update route titles, descriptions, Open Graph metadata, and default profile wording. Use the existing canonical-link configuration with a verified production origin.
- Verify direct navigation, page refresh, internal links, and browser back/forward behavior on the deployed host.

## 9. Implementation map

| Area                         | Files to review/change                                                                    | Intended work                                                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Content                      | `src/shared/data/projects.js`, `src/shared/data/profile.js`                               | Replace four project stories, simplify profile/capabilities, separate facts from contribution and integrations        |
| Visual system                | `src/shared/styles/main.css`, `src/shared/components/AppContainer.vue`                    | Add light tokens, fluid type, bounded width, spacing, buttons, surfaces, and responsive rules                         |
| Application shell            | `src/app/AppShell.vue`, `src/app/layouts/*`, `AppHeader.vue`, `AppFooter.vue`             | Remove decorative backgrounds and adapt navigation, footer, and shared layout                                         |
| Home                         | `src/modules/landing-page/LandingPageView.vue`, `components/HeroSystemVisual.vue`         | Replace hero, simplify sections, remove animated topology and flagship failover promotion                             |
| Project index                | `src/modules/projects-page/ProjectsPageView.vue`, `ProjectCard.vue`                       | Clarify grouping, simplify filters, update card content and heading semantics                                         |
| Shared case study            | `CaseStudyPage.vue`, `SectionHeading.vue`, `TechBadge.vue`, `ConfidentialNotice.vue`      | Implement the common reading order, grouped features, contribution, optional detail, and concise confidentiality note |
| Four primary project modules | `src/modules/adsb-page/`, `monitoring-platform-page/`, `reinsurance-page/`, `hyang-page/` | Replace hardcoded stories and inaccurate claims; simplify or retire demonstrations                                    |
| Supporting pages             | `src/modules/about-page/`, `not-found-page/`, existing secondary project modules          | Align styling, profile wording, heading structure, and recovery copy                                                  |
| Routing and metadata         | Relevant `*Route.js` files and `src/router/index.js`                                      | Update names/descriptions, preserve URLs, and adjust anchor/focus behavior if needed                                  |
| Verification                 | Existing unit tests, `tests/e2e/portfolio.spec.js`, `playwright.config.js`                | Update changed behavior expectations and add targeted responsive/accessibility coverage                               |
| Documentation                | `ARCHITECTURE.md`, `docs/PORTFOLIO_AI_IMPLEMENTATION_FOUNDATION.md`                       | Reconcile visual, content, and demonstration guidance with this plan                                                  |

### Content model changes

Extend the existing project records only where it helps render the shared case-study structure. Candidate fields are `purpose`, `audience`, `featureGroups`, `contribution`, `stackGroups`, `implementationNotes`, and `deliveredCapabilities`. Keep stable `slug`, `path`, `featured`, and `confidential` values.

Distinguish the representative card stack from the grouped detail stack. Keep source references and fact-review notes in internal documentation rather than displaying implementation review tasks to visitors. Do not add empty “My contribution” or “Results” panels merely to satisfy a schema.

## 10. Delivery sequence

### Phase 1 — Content reconciliation

- Map current claims in project data, hardcoded views, profile capabilities, metadata, and examples to the four new documents.
- Draft the four replacements using Section 5; mark unsupported claims for removal or confirmation.
- Gather personal contribution, public contact, resume, and any approved media information.
- Keep internal notes about unresolved attribution; do not publish placeholders as finished case studies.

**Deliverable:** reviewed content drafts and a concise internal list of unresolved facts.

### Phase 2 — Layout and visual system

- Sketch the Home and shared case-study layout at mobile, tablet, and desktop widths.
- Implement shared tokens, container, typography, navigation, buttons, cards, and section spacing.
- Review readability using the actual long project titles and drafted descriptions.

**Deliverable:** reusable visual system and representative responsive layouts.

### Phase 3 — Page implementation

- Rebuild Home and Projects around the four primary stories.
- Update the shared case-study component and migrate each primary project page.
- Retire unsupported demonstrations and place surviving examples after the explanation.
- Align About, secondary case studies, footer, 404, metadata, and architecture guidance.

**Deliverable:** complete local redesign with stable routes and accurate content.

### Phase 4 — Verification and refinement

- Format changed files and run the existing checks from the `portfolio` directory: `npm run verify` and `npm run test:e2e`.
- Update tests for intentionally removed filters or demonstrations; test final behavior rather than preserving obsolete expectations.
- Use targeted checks for menu operation, project navigation, filter reset, unique routes, relevant content corrections, and retained example controls.
- Perform the responsive, accessibility, media, and deployment-navigation checks described above.
- Ask representative readers to identify the role, explain two project purposes, distinguish contribution from application scope, and find contact information.

**Deliverable:** reviewable implementation with recorded checks and any remaining limitations.

### Phase 5 — Release readiness

- Confirm all contact actions and resume links resolve to real destinations.
- Confirm public contribution statements and confidential project assets are appropriate for publication.
- Record final build comparison and unresolved factual limitations, if any.
- Review the finished site before a separately authorized deployment.

**Deliverable:** publish-ready portfolio and updated documentation.

## 11. Acceptance criteria

- [ ] All public portfolio copy is in clear English, and specialist terms are explained where needed.
- [ ] Home clearly identifies Muhammad Abdul Aziz as a Fullstack Developer and gives immediate access to the four primary projects.
- [ ] Each project starts with what it does, who it is intended to help, and verified contribution before technical details or examples.
- [ ] The four project descriptions align with the supplied documents, including runtime and integration limitations.
- [ ] ADS-B no longer implies an in-scope Fastify backend, guaranteed backup aggregation, or database persistence that the documented startup does not establish.
- [ ] Government Border Security is described separately from the standalone ADS-B project, with confidential details withheld.
- [ ] Reinsurance covers the wider operational workflows; Hyang covers data operations, governance, quality, and evidence.
- [ ] Unsupported metrics, fake live indicators, outdated hardcoded claims, and decorative simulations are removed.
- [ ] Visual hierarchy, typography, spacing, cards, and controls are consistent across every route.
- [ ] Small screens, intermediate widths, short landscape screens, zoomed views, and wide monitors remain readable and usable without horizontal page overflow.
- [ ] Keyboard, menu, focus, reduced-motion, contrast, and automated accessibility checks pass; examples have text alternatives.
- [ ] Existing URLs, direct page loads, metadata, navigation, back/forward behavior, and 404 recovery work.
- [ ] A verified contact channel is usable; resume and profile links appear only when supplied.
- [ ] Relevant lint, formatting, unit, build, and end-to-end checks pass after implementation.
- [ ] Representative nontechnical readers can explain the purpose of the featured projects without using the technical sections.

## 12. Information still needed before final publication

The supplied documents are sufficient to plan layouts and describe product capabilities. They do not establish every personal or operational claim. Gather these during implementation:

1. Abdul's specific contribution to each project, including the features he implemented and whether the work was individual or collaborative.
2. Any project dates, job dates, team context, or measured outcomes he wants to display.
3. A public email/contact method, GitHub and LinkedIn URLs if desired, and the current resume.
4. Any additional naming restrictions or approved public screenshots/assets, especially for the confidential projects.
5. Deployment facts if the portfolio should claim that an integration or workflow runs in production.

Proceed with the content and design work using the documented scope. Keep unsupported personal attribution and deployment claims out of the public site until confirmed.
