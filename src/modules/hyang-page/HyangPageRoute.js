export const HyangPageRoute = {
  path: '/projects/hyang-platform',
  name: 'hyang-platform',
  component: () => import('./HyangPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Hyang Data Platform Case Study — Muhammad Abdul Aziz',
    description:
      'A data platform case study covering pipeline observability, metadata lineage, authentication, request signing, and secure proxies.',
  },
}
