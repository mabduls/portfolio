export const ReinsurancePageRoute = {
  path: '/projects/reinsurance-platform',
  name: 'reinsurance-platform',
  component: () => import('./ReinsurancePageView.vue'),
  meta: {
    layout: 'project',
    title: 'Tugure × BRINS Reinsurance Platform — Muhammad Abdul Aziz',
    description:
      'A role-aware reinsurance portal for contracts, debtor batches, claims, supporting documents, and financial follow-up.',
  },
}
