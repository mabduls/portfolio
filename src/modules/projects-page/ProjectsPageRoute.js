export const ProjectsPageRoute = {
  path: '/projects',
  name: 'projects',
  component: () => import('./ProjectsPageView.vue'),
  meta: {
    layout: 'default',
    title: 'Engineering Projects — Muhammad Abdul Aziz',
    description:
      'Case studies spanning real-time systems, enterprise platforms, geospatial interfaces, data platforms, and secure integrations.',
  },
}
