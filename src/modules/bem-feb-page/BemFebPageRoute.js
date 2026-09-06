export const BemFebPageRoute = {
  path: '/projects/bem-feb',
  name: 'bem-feb',
  component: () => import('./BemFebPageView.vue'),
  meta: {
    layout: 'project',
    title: 'BEM FEB Website Case Study — Muhammad Abdul Aziz',
    description: 'A Laravel website project built through collaborative Git and GitHub workflows.',
  },
}
