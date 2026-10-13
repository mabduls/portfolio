export const profile = {
  name: 'Muhammad Abdul Aziz',
  role: 'Fullstack Developer',
  statement:
    'I build web applications for aircraft tracking, reinsurance operations, and data platforms. My work spans frontend interfaces, backend APIs, and system integrations.',
  summary:
    'I work across frontend and backend development, connecting application interfaces with the data and services behind them. My project experience includes aircraft tracking, border monitoring, reinsurance workflows, and data platform integration.',
  education: {
    degree: 'Bachelor of Informatics',
    institution: 'Diponegoro University',
    period: 'August 2021 — September 2025',
  },
  links: {
    email: 'abdabdulziza@gmail.com',
    github: null,
    linkedin: 'https://www.linkedin.com/in/muhammad-abdul-aziz-889a212ba/',
  },
}

export const contactLinks = [
  { label: 'Email', detail: profile.links.email, href: `mailto:${profile.links.email}` },
  { label: 'LinkedIn', detail: 'Connect on LinkedIn', href: profile.links.linkedin },
]

export const capabilities = [
  {
    title: 'Frontend development',
    text: 'Interfaces for maps, dashboards, forms, and operational workflows.',
    tools: ['Vue.js', 'React', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend & data',
    text: 'Application APIs, validation, database access, and data processing.',
    tools: ['Node.js', 'Fastify', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'System integration',
    text: 'Connecting services, live data, and role-aware application access.',
    tools: ['REST APIs', 'SSE', 'WebSocket', 'Keycloak'],
  },
]

export const experience = [
  {
    organization: 'PT Sibernetik Integra Data',
    role: 'Fullstack Developer',
    detail:
      'Project work across aircraft tracking, border monitoring, reinsurance operations, and data platforms.',
  },
  {
    organization: 'Coding Camp DBS Foundation',
    role: 'Fullstack Developer Bootcamp',
    detail:
      'Fullstack application development with REST APIs, Firestore, TensorFlow.js integration, and deployment workflows.',
  },
  {
    organization: 'Semarang City Government',
    role: 'Internship',
    detail: 'Laravel-based CSIRT website development with the municipal IT team.',
  },
]
