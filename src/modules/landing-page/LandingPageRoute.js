export const LandingPageRoute = {
  path: '/',
  name: 'home',
  component: () => import('./LandingPageView.vue'),
  meta: {
    layout: 'default',
    title: 'Muhammad Abdul Aziz — Fullstack Developer',
    description:
      'Fullstack development portfolio covering aircraft tracking, reinsurance operations, border monitoring, and data platforms.',
  },
}
