// Primary project descriptions are grounded in the four project overviews in docs/.
// Product capabilities do not establish individual feature ownership or deployment status.
export const projects = [
  {
    slug: 'ads-b-platform',
    path: '/projects/ads-b-platform',
    title: 'ADS-B Aircraft Tracking Platform',
    shortTitle: 'ADS-B Aircraft Tracking Platform',
    category: 'Aircraft Tracking',
    visual: 'aircraft',
    summary:
      'An aircraft tracking application with an interactive map, aircraft details, flight history, alerts, and operational reports.',
    technologies: ['Vue.js', 'Mapbox GL JS', 'Node.js', 'Express'],
    featured: true,
    confidential: true,
    confidentialNotice:
      'Selected application screenshots are shown in the project results gallery. This case study focuses on product capabilities.',
    intro:
      'ADS-B stands for Automatic Dependent Surveillance–Broadcast. This application brings aircraft information into an authenticated web interface so users can explore positions, inspect aircraft, review flight history, and access monitoring and reporting views.',
    audience:
      'Designed for aircraft monitoring operators and staff reviewing flight information or reports.',
    context:
      'Aircraft positions, flight details, alerts, and history need to be understandable together. The application brings these tasks into a map-based workspace, with supporting reports and administration pages.',
    featureGroups: [
      {
        title: 'Interactive aircraft map',
        text: 'Filter and select aircraft, inspect details, and follow trails. Position smoothing helps present movement between updates.',
      },
      {
        title: 'Flight exploration',
        text: 'Flight and session views, history and playback controls, and a 3D aircraft-follow view support different ways to inspect aircraft information.',
      },
      {
        title: 'Monitoring & reports',
        text: 'Monitoring, summaries, alert panels, charts, and report exports give users ways to review aircraft activity beyond the map.',
      },
      {
        title: 'Authentication & users',
        text: 'Keycloak sign-in protects application routes. User-management pages connect to administration APIs.',
      },
      {
        title: 'Aircraft enrichment',
        text: 'The backend caches aircraft records and can enrich position information through the configured SPIRE API.',
      },
      {
        title: 'Supporting services',
        text: 'Weather and aircraft-photo proxies, cache statistics, and health/status APIs support the application interface.',
      },
    ],
    architecture: [
      {
        title: 'Web interface',
        text: 'Vue handles maps, aircraft selection, reports, and authenticated pages.',
      },
      {
        title: 'Application API',
        text: 'Express provides caching, enrichment, supporting APIs, and service-health information.',
      },
      {
        title: 'Configured feeds',
        text: 'External aircraft streams and providers supply information when connected.',
      },
    ],
    stackGroups: [
      {
        title: 'Frontend',
        tools: ['Vue 3', 'Pinia', 'Mapbox GL JS', 'Three.js', 'Chart.js', 'Vite'],
        text: 'Map visualization and application state live in the frontend. Three.js supports the aircraft-follow view.',
      },
      {
        title: 'Backend & identity',
        tools: ['Node.js', 'Express', 'Keycloak', 'Pino'],
        text: 'The Express service exposes HTTP APIs, maintains the aircraft cache, and supports protected user administration.',
      },
      {
        title: 'Data & integrations',
        tools: ['SPIRE API', 'Prisma', 'PostgreSQL'],
        text: 'SPIRE enrichment is configuration dependent. Prisma and PostgreSQL schema/service components are present, but the documented startup uses an in-memory aircraft cache.',
      },
    ],
    implementationNotes: [
      'This case study covers the aircraft application frontend and Express backend. The separate aircraft streaming service is outside that scope; frontend stream adapters and backend HTTP APIs are separate integration surfaces.',
      'The Express entry point does not define an SSE stream route. Live views depend on configured feeds and upstream APIs.',
      'Aircraft data is cached in memory in the documented startup. Schema definitions alone do not establish persistent storage for all aircraft state.',
      'Backup aggregation is not wired into the documented startup. Database, Redis, and WebSocket health checks need additional wiring; health/status reporting should not be read as guaranteed automatic failover.',
    ],
    deliveredCapabilities: [
      'Aircraft information in an interactive map workspace.',
      'Flight exploration, reporting, and alert views alongside role-protected administration.',
      'Supporting cache, enrichment, and health APIs with explicit integration boundaries.',
    ],
  },
  {
    slug: 'monitoring-platform',
    path: '/projects/monitoring-platform',
    title: 'Confidential Government Border Security Platform',
    shortTitle: 'Government Border Security Platform',
    category: 'Border Monitoring',
    visual: 'border',
    summary:
      'A border monitoring interface that brings land sensors, aircraft information, maps, alerts, and reports into one workspace.',
    technologies: ['Vue.js', 'Fastify', 'PostgreSQL', 'Keycloak'],
    featured: true,
    confidential: true,
    intro:
      'This confidential project combines land and air border monitoring in a web application. It brings together sensor and surveillance views, aircraft information, alerts, geospatial layers, analytics, and reporting. A frontend, a main backend API, and separate aircraft and tower data services support the application.',
    audience: 'Designed for border monitoring operators, analysts, and authorized administrators.',
    context:
      'Land sensors and aircraft feeds expose different kinds of information. The portal brings them into related monitoring views so users can review events, locations, alerts, and reports in a common workspace.',
    featureGroups: [
      {
        title: 'Land monitoring',
        text: 'Camera views, radio-frequency monitoring, digital barriers, and sensor alerts cover different land-monitoring tasks.',
      },
      {
        title: 'Air monitoring',
        text: 'Aircraft and airport views, flight categories, map filtering, and alert/report pages support air-border review.',
      },
      {
        title: 'Maps & situational awareness',
        text: 'Dashboard alerts, areas of interest, weather, boundaries, and other map layers provide context for monitoring.',
      },
      {
        title: 'Analytics & reporting',
        text: 'Analytics views and export-oriented reports give users ways to review and share information.',
      },
      {
        title: 'Service integration',
        text: 'The main API connects feature modules and partner systems. Specialized aircraft and tower services handle related feeds.',
      },
      {
        title: 'Access & administration',
        text: 'Authenticated navigation, access checks, and API-management views constrain access to operational features.',
      },
    ],
    architecture: [
      {
        title: 'Monitoring workspace',
        text: 'Related land and air views provide maps, alerts, and reporting.',
      },
      {
        title: 'Application services',
        text: 'A main API and specialized data services support separate responsibilities.',
      },
      {
        title: 'Connected sources',
        text: 'Sensor and aircraft information depends on configured external systems.',
      },
    ],
    stackGroups: [
      {
        title: 'Frontend',
        tools: [
          'Vue 3',
          'Pinia',
          'Tailwind CSS',
          'Element Plus',
          'OpenLayers',
          'MapLibre GL',
          'Mapbox GL',
        ],
        text: 'The frontend combines authenticated application pages with geospatial views, charts, and reports.',
      },
      {
        title: 'Backend & identity',
        tools: ['Node.js', 'Fastify', 'PostgreSQL', 'Prisma', 'Keycloak'],
        text: 'The main API provides modular feature services. Aircraft and tower data services run as separate processes.',
      },
      {
        title: 'Integration transports',
        tools: ['SSE', 'WebSocket', 'Kafka'],
        text: 'These transports support service-specific stream and event integrations. Availability depends on connected providers and configuration.',
      },
    ],
    implementationNotes: [
      'This multi-service border platform is distinct from the standalone ADS-B application. Related aircraft features do not establish identical runtime architecture.',
      'Some views use demonstration data, including the ADS-B overview. Live operational availability depends on configured databases, feeds, credentials, and partner systems.',
      'AI-oriented screens represent integration areas. Their presence does not establish that all detection models are operational or were developed as part of this web application.',
      'Public descriptions are limited to product-level capabilities. Client identity, real locations, sensor placement, operational rules, and infrastructure details are omitted.',
    ],
    deliveredCapabilities: [
      'A common workspace for land and air monitoring tasks.',
      'Maps, sensor views, alerts, analytics, and reporting across related modules.',
      'Separate application and feed services with configuration-dependent integrations.',
    ],
  },
  {
    slug: 'reinsurance-platform',
    path: '/projects/reinsurance-platform',
    title: 'Tugure × BRINS Reinsurance Platform',
    shortTitle: 'Tugure × BRINS Reinsurance Platform',
    category: 'Reinsurance',
    visual: 'reinsurance',
    summary:
      'A role-aware portal for managing reinsurance contracts, debtor submissions, claims, documents, and payment follow-up between Tugure and BRINS.',
    technologies: ['React', 'Fastify', 'PostgreSQL', 'Keycloak'],
    featured: true,
    confidential: false,
    intro:
      'This web application brings operational workflows between Tugure and BRINS into one portal. Users can manage contracts, submit and review debtor batches, process claims, handle supporting documents, and follow financial records and payment status.',
    audience:
      'Designed for operations teams, reviewers, finance staff, and administrators with role-specific responsibilities.',
    context:
      'Reinsurance operations involve related records, documents, reviews, and financial follow-up. The portal groups these tasks into role-aware pages, with status tracking, validation, and supporting notifications.',
    featureGroups: [
      {
        title: 'Contract administration',
        text: 'Manage master contracts, upload and validate files, review approval actions, and close or invalidate records.',
      },
      {
        title: 'Submissions & batches',
        text: 'Submit debtor records individually or in bulk, check duplicates, review batches, and track processing status.',
      },
      {
        title: 'Claims & recovery',
        text: 'Claim submission, review context, supporting documents, and recovery records bring related case information together.',
      },
      {
        title: 'Financial follow-up',
        text: 'Financial notes, payment recording, payment-status views, and reconciliation-related records support follow-up work.',
      },
      {
        title: 'Dashboards & notifications',
        text: 'Operational summaries, reporting, notification settings, email workflows, and audit views support administration.',
      },
      {
        title: 'Files & role-aware access',
        text: 'Keycloak roles, signed API requests, and object storage with signed download links support controlled access to records and documents.',
      },
    ],
    architecture: [
      {
        title: 'Role-aware portal',
        text: 'React presents operational pages and retrieves application data.',
      },
      {
        title: 'Workflow API',
        text: 'Fastify handles workflow services, entity APIs, and integrations.',
      },
      {
        title: 'Supporting services',
        text: 'Database, identity, file storage, and email services support configured workflows.',
      },
    ],
    stackGroups: [
      {
        title: 'Frontend',
        tools: ['React 18', 'TanStack React Query', 'React Router', 'Tailwind CSS', 'Radix UI'],
        text: 'The frontend combines role-aware navigation with forms, tabular data handling, charts, and reporting.',
      },
      {
        title: 'Backend & data',
        tools: ['Node.js', 'Fastify', 'PostgreSQL', 'pg', 'Prisma'],
        text: 'The backend contains workflow services, a generic JSON record persistence layer, and Prisma domain models. Active persistence paths can differ by entity.',
      },
      {
        title: 'Supporting integrations',
        tools: ['Keycloak', 'HMAC-SHA256', 'MinIO / S3', 'SSE', 'SMTP'],
        text: 'Identity, signed requests, file storage, database-event updates, and email support the configured application flows.',
      },
    ],
    implementationNotes: [
      'Debtor submissions are records submitted for review; a batch groups records for processing. The portal also includes bordero records with associated debtor information, nota documents for financial follow-up, and subrogation recovery records.',
      'The feature groups describe available task areas, not a single mandatory sequence for every contract or claim.',
      'Payment recording and follow-up do not establish that the application executes bank transfers or operates a payment gateway.',
      'Authentication, file operations, email, and live updates require the relevant services to be configured. The repository overview does not certify every workflow as operational in production.',
    ],
    deliveredCapabilities: [
      'Contract, submission, claim, document, and financial task areas in one portal.',
      'Validation, review, status tracking, and supporting audit/notification views.',
      'Role-aware application access and configured file/email integrations.',
    ],
  },
  {
    slug: 'hyang-platform',
    path: '/projects/hyang-platform',
    title: 'Hyang Data Platform Web Application',
    shortTitle: 'Hyang Data Platform Web Application',
    category: 'Data Platforms',
    visual: 'data',
    summary:
      'A data lakehouse portal for managing sources and pipelines, discovering datasets, reviewing data quality, and tracing lineage across connected tools.',
    technologies: ['React', 'Fastify', 'PostgreSQL', 'Keycloak'],
    featured: true,
    confidential: false,
    intro:
      'Hyang is a portal for operating and governing a data lakehouse—a data environment combining storage, processing, and analytics capabilities. It brings data sources, pipelines, metadata, quality checks, reporting, administration, and operational evidence into one interface.',
    audience: 'Designed for data engineers, analysts, data stewards, and platform administrators.',
    context:
      'Data teams work across multiple tools to move, discover, understand, and govern data. Hyang provides a common portal for these operations while connecting to the underlying tools through configured integrations.',
    featureGroups: [
      {
        title: 'Sources & pipelines',
        text: 'Manage data sources, inspect pipelines, use tool workspaces, and organize datasets by data layer.',
      },
      {
        title: 'Catalog & discovery',
        text: 'Browse data assets, explore tables, and use a business glossary to make dataset meaning easier to understand.',
      },
      {
        title: 'Lineage & impact',
        text: 'Trace relationships between data assets and inspect the potential downstream impact of changes.',
      },
      {
        title: 'Data quality',
        text: 'Create and review quality rules, inspect execution history, and follow reported issues.',
      },
      {
        title: 'Reporting & evidence',
        text: 'BI datasets, dashboards, use cases, user acceptance testing evidence, defects, and documentation support consumption and operational assurance.',
      },
      {
        title: 'Administration & health',
        text: 'Configure connectors and access policies, manage users, review audit logs, and inspect integration health.',
      },
    ],
    architecture: [
      {
        title: 'Operations portal',
        text: 'React brings data operations, discovery, governance, and evidence into related pages.',
      },
      {
        title: 'Portal API',
        text: 'Fastify stores portal records, handles authentication, and adapts external tool requests.',
      },
      {
        title: 'Configured data tools',
        text: 'Connected platforms provide orchestration, metadata, query, storage, and analytics capabilities.',
      },
    ],
    stackGroups: [
      {
        title: 'Frontend',
        tools: ['React 18', 'React Router', 'Tailwind CSS', 'Radix UI', 'Vite'],
        text: 'Feature pages are lazy loaded. Runtime configuration selects API paths, backend mode, and native tool destinations.',
      },
      {
        title: 'Backend & data',
        tools: ['Node.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Keycloak'],
        text: 'Authenticated APIs manage portal entities, signed requests, audit records, evidence files, and tool integrations. Portal entities use JSON-backed Prisma records.',
      },
      {
        title: 'Supported tool integrations',
        tools: [
          'Airflow',
          'Apache Hop',
          'NiFi',
          'OpenMetadata',
          'Trino',
          'MinIO',
          'Superset',
          'Ranger',
        ],
        text: 'These are configured integration targets rather than a claim that every external platform is installed or connected.',
      },
    ],
    implementationNotes: [
      'External tool connections require configured URLs, credentials, and available upstream services. The checked-in runtime configuration uses adapter mode and leaves native tool URLs blank.',
      'Frontend adapters do not establish matching backend support for every tool. Some workspaces hand users off to a configured native console.',
      'Evidence uploads currently use local filesystem storage. The presence of a MinIO client does not establish that evidence files use object storage.',
      'Some access-control routes remain registered while their governance navigation entry is hidden. Route presence does not establish default menu visibility.',
    ],
    deliveredCapabilities: [
      'Related data operations, governance, quality, and reporting pages in one portal.',
      'Dataset discovery, lineage, and operational evidence alongside administration.',
      'Authenticated portal-record APIs and configuration-dependent tool integrations.',
    ],
  },
  {
    slug: 'coding-camp',
    path: '/projects/coding-camp',
    title: 'Coding Camp DBS Foundation',
    shortTitle: 'Fullstack Coding Camp',
    category: 'Fullstack Applications',
    summary:
      'A deployed fullstack application combining REST APIs, Firestore, a TensorFlow.js acne-detection model, and automated delivery.',
    responsibilities: [
      'Frontend and backend implementation',
      'REST API development',
      'Model integration',
      'CI/CD and deployment',
    ],
    technologies: [
      'JavaScript',
      'REST APIs',
      'Firebase Firestore',
      'TensorFlow.js',
      'Vercel',
      'Railway',
      'GitHub Actions',
    ],
    featured: false,
    confidential: false,
    intro:
      'Completed an end-to-end fullstack delivery as part of the Coding Camp DBS Foundation program.',
    challenge:
      'The product joined application interfaces, persisted data, a browser-oriented machine-learning capability, and deployments across separate hosting platforms.',
    approach:
      'Treated the frontend, backend, data store, model integration, and delivery workflow as one deployable system with clear service boundaries.',
    demonstrated: [
      'End-to-end delivery',
      'RESTful API design',
      'ML model integration',
      'Cloud deployment',
      'CI/CD',
    ],
  },
  {
    slug: 'bem-feb',
    path: '/projects/bem-feb',
    title: 'BEM FEB Diponegoro University Website',
    shortTitle: 'BEM FEB Website',
    category: 'Fullstack Applications',
    summary:
      'A Laravel-based, program-management-oriented web solution built through collaborative Git and GitHub workflows.',
    responsibilities: ['Laravel development', 'Team collaboration', 'Program management workflows'],
    technologies: ['PHP', 'Laravel', 'Git', 'GitHub'],
    featured: false,
    confidential: false,
    intro:
      'Contributed to a web platform supporting the organization and communication of BEM FEB programs.',
    challenge:
      'The project required practical delivery within a team, with shared ownership of a Laravel codebase and program-oriented requirements.',
    approach:
      'Used collaborative version-control practices and focused Laravel implementation to translate organizational needs into maintainable web flows.',
    demonstrated: [
      'Team-based development',
      'Laravel application work',
      'Git collaboration',
      'Requirement translation',
    ],
  },
  {
    slug: 'csirt-internship',
    path: '/projects/csirt-internship',
    title: 'Semarang City CSIRT Website',
    shortTitle: 'CSIRT Website',
    category: 'Enterprise Platforms',
    summary:
      'A PHP Laravel website contribution completed with the municipal IT team during an internship.',
    responsibilities: [
      'Laravel implementation',
      'IT team collaboration',
      'Public-sector web delivery',
    ],
    technologies: ['PHP', 'Laravel', 'Git'],
    featured: false,
    confidential: false,
    intro:
      'Contributed to the CSIRT website during an internship with Dinas Komunikasi Informatika, Statistika dan Persandian Semarang City.',
    challenge:
      'The work required integrating into an existing team context and delivering against the needs of a public-sector web project.',
    approach:
      'Applied Laravel development fundamentals while coordinating implementation with the organization’s IT team.',
    demonstrated: [
      'Professional team experience',
      'Laravel development',
      'Public-sector collaboration',
    ],
  },
]

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug)
}

export const featuredProjects = [
  'ads-b-platform',
  'reinsurance-platform',
  'hyang-platform',
  'monitoring-platform',
].map(getProjectBySlug)

export const orderedProjects = [
  ...featuredProjects,
  ...projects.filter((project) => !project.featured),
]
export const projectCategories = [...new Set(orderedProjects.map((project) => project.category))]
