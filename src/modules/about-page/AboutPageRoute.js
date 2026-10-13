export const AboutPageRoute = {
  path: '/about',
  name: 'about',
  component: () => import('./AboutPageView.vue'),
  meta: {
    layout: 'default',
    title: 'About Muhammad Abdul Aziz — Fullstack Developer',
    description:
      'Fullstack development experience, practical skills, and Informatics education of Muhammad Abdul Aziz.',
  },
}
