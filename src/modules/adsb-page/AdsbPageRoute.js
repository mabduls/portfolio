export const AdsbPageRoute = {
  path: '/projects/ads-b-platform',
  name: 'ads-b-platform',
  component: () => import('./AdsbPageView.vue'),
  meta: {
    layout: 'project',
    title: 'ADS-B Surveillance Platform Case Study — Muhammad Abdul Aziz',
    description:
      'A sanitized case study of real-time aircraft visualization, playback, reporting, security, health monitoring, and failover.',
  },
}
