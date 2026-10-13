export const ProjectsPageRoute = {
  path: '/projects',
  name: 'projects',
  component: () => import('./ProjectsPageView.vue'),
  meta: {
    layout: 'default',
    title: 'Projects — Muhammad Abdul Aziz',
    description:
      'Explore aircraft tracking, reinsurance, border monitoring, and data platform applications, with clear product overviews and technical details.',
  },
}
