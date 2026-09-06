export const NotFoundPageRoute = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('./NotFoundPageView.vue'),
  meta: {
    layout: 'default',
    title: 'Page Not Found — Muhammad Abdul Aziz',
    description: 'The requested portfolio page could not be found.',
  },
}
