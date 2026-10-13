export const AdsbPageRoute = {
  path: '/projects/ads-b-platform',
  name: 'ads-b-platform',
  component: () => import('./AdsbPageView.vue'),
  meta: {
    layout: 'project',
    title: 'ADS-B Aircraft Tracking Platform — Muhammad Abdul Aziz',
    description:
      'Aircraft maps, flight exploration, alerts, reporting, and supporting Vue and Express application services.',
  },
}
