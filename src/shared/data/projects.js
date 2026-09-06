export const projects = [
  {
    slug: 'ads-b-platform',
    path: '/projects/ads-b-platform',
    title: 'Confidential National ADS-B Platform',
    shortTitle: 'National ADS-B Platform',
    category: 'Real-Time Systems',
    summary:
      'A national airspace surveillance platform for live aircraft visualization, historical playback, operational reporting, and resilient data delivery.',
    responsibilities: [
      'Interactive geospatial frontend',
      'Real-time data streaming',
      'Flight enrichment and reporting APIs',
      'Health monitoring and failover',
    ],
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
    featured: true,
    confidential: true,
    intro:
      'Contributed across frontend and backend concerns for a data-intensive surveillance interface that turns continuous aircraft messages into understandable operational views.',
    challenge:
      'Real-time positions, enriched flight information, historical tracks, alerts, and system health must stay comprehensible while the underlying stream continues to change.',
    approach:
      'Separated streaming, enrichment, reporting, playback, and health concerns, then represented those capabilities through focused interfaces and explicit operational states.',
    demonstrated: [
      'Real-time interface engineering',
      'Geospatial visualization',
      'Streaming backend integration',
      'Reliability and failover thinking',
      'Secure access with Keycloak and JWT',
    ],
  },
  {
    slug: 'monitoring-platform',
    path: '/projects/monitoring-platform',
    title: 'Confidential Government Monitoring Platform',
    shortTitle: 'Multi-Sensor Monitoring',
    category: 'Geospatial Systems',
    summary:
      'A secure operational dashboard correlating aircraft, CCTV, RF/radio, anomaly, and alert information in real time.',
    responsibilities: [
      'Multi-layer monitoring UI',
      'Live event presentation',
      'CCTV stream integration',
      'Secure backend services',
    ],
    technologies: [
      'Vue.js',
      'Mapbox GL',
      'OpenLayers',
      'Chart.js',
      'ECharts',
      'Fastify',
      'PostgreSQL',
      'SSE',
      'WebSocket',
      'FFmpeg',
      'Keycloak',
    ],
    featured: true,
    confidential: true,
    intro:
      'Worked on a multi-source monitoring experience that brings heterogeneous operational signals into one coherent, secure interface.',
    challenge:
      'Aircraft positions, camera connectivity, radio signals, anomalies, and alerts arrive with different formats and update rhythms but need a unified mental model.',
    approach:
      'Organized information into independently controllable layers and event flows, backed by streaming transports, service integration, and consistent alert states.',
    demonstrated: [
      'Multi-source system integration',
      'Real-time operational UX',
      'Streaming protocols',
      'Video delivery integration',
      'Role-aware access',
    ],
  },
  {
    slug: 'reinsurance-platform',
    path: '/projects/reinsurance-platform',
    title: 'BRINS × TUGURE Reinsurance Web Platform',
    shortTitle: 'Reinsurance Platform',
    category: 'Enterprise Platforms',
    summary:
      'A credit reinsurance platform supporting structured debtor, claim, contract, validation, bulk upload, notification, and audit workflows.',
    responsibilities: [
      'React application development',
      'REST API implementation',
      'Bulk CSV validation flows',
      'RBAC and audit-support workflows',
    ],
    technologies: [
      'React',
      'Fastify',
      'PostgreSQL',
      'Prisma',
      'Keycloak',
      'REST APIs',
      'CSV Processing',
    ],
    featured: true,
    confidential: false,
    intro:
      'Built product flows across a React frontend and Fastify backend for structured credit reinsurance operations.',
    challenge:
      'Bulk and manual business inputs must be validated consistently, stored safely, and made visible through dashboards, notifications, and traceable workflows.',
    approach:
      'Designed explicit processing stages around validation, persistence, access control, and audit visibility rather than treating upload as a single opaque action.',
    demonstrated: [
      'Enterprise workflow modeling',
      'Backend validation',
      'Bulk data processing',
      'RBAC',
      'Audit-oriented interface design',
    ],
  },
  {
    slug: 'hyang-platform',
    path: '/projects/hyang-platform',
    title: 'Hyang Data Platform',
    shortTitle: 'Hyang Data Platform',
    category: 'Data Platforms',
    summary:
      'A monitoring and integration layer for data pipelines, metadata, lineage, secure proxies, and technical authentication.',
    responsibilities: [
      'Pipeline monitoring frontend',
      'Metadata and lineage integration',
      'Secured backend proxies',
      'Authentication and proxy tests',
    ],
    technologies: [
      'React',
      'Apache Airflow',
      'Apache Hop',
      'Apache NiFi',
      'OpenMetadata',
      'Keycloak',
      'HMAC-SHA256',
      'RBAC',
    ],
    featured: true,
    confidential: false,
    intro:
      'Integrated pipeline and metadata platforms behind a coherent monitoring interface and a hardened proxy boundary.',
    challenge:
      'Multiple tools expose different resources and authentication expectations, while consumers need consistent authorization, lineage context, and failure handling.',
    approach:
      'Combined Keycloak identity with request signing, timestamp checks, replay protection, resource whitelisting, token forwarding, caching, and tested proxy behavior.',
    demonstrated: [
      'Secure system integration',
      'Metadata and lineage UX',
      'Request-signing controls',
      'Proxy architecture',
      'Automated authentication testing',
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

export const projectCategories = [...new Set(projects.map((project) => project.category))]
export const projectTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
].sort()
