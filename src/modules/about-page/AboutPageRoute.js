export const AboutPageRoute = {
  path: '/about',
  name: 'about',
  component: () => import('./AboutPageView.vue'),
  meta: {
    layout: 'default',
    title: 'About Muhammad Abdul Aziz — Fullstack Developer',
    description:
      'Profile, experience, engineering principles, and education of Fullstack Developer Muhammad Abdul Aziz.',
  },
}
