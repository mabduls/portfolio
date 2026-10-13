export const HyangPageRoute = {
  path: '/projects/hyang-platform',
  name: 'hyang-platform',
  component: () => import('./HyangPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Hyang Data Platform Web Application — Muhammad Abdul Aziz',
    description:
      'A data lakehouse portal for sources, pipelines, catalog, lineage, data quality, reporting, evidence, and administration.',
  },
}
