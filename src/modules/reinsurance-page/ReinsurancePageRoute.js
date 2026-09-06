export const ReinsurancePageRoute = {
  path: '/projects/reinsurance-platform',
  name: 'reinsurance-platform',
  component: () => import('./ReinsurancePageView.vue'),
  meta: {
    layout: 'project',
    title: 'Reinsurance Platform Case Study — Muhammad Abdul Aziz',
    description:
      'An enterprise workflow case study covering validation, bulk CSV processing, RBAC, audit support, dashboards, and notifications.',
  },
}
