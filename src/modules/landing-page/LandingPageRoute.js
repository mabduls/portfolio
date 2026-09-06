export const LandingPageRoute = {
  path: '/',
  name: 'home',
  component: () => import('./LandingPageView.vue'),
  meta: {
    layout: 'default',
    title: 'Muhammad Abdul Aziz — Fullstack Developer',
    description:
      'Fullstack Developer building real-time systems, secure platforms, and interactive data-driven applications.',
  },
}
