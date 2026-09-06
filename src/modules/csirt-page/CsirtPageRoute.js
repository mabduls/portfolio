export const CsirtPageRoute = {
  path: '/projects/csirt-internship',
  name: 'csirt-internship',
  component: () => import('./CsirtPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Semarang City CSIRT Website — Muhammad Abdul Aziz',
    description:
      'A Laravel-based public-sector website contribution completed with a municipal IT team.',
  },
}
