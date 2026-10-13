export const MonitoringPlatformPageRoute = {
  path: '/projects/monitoring-platform',
  name: 'monitoring-platform',
  component: () => import('./MonitoringPlatformPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Government Border Security Platform — Muhammad Abdul Aziz',
    description:
      'A confidential product-level overview of land and air border monitoring, maps, sensor views, alerts, reports, and service integrations.',
  },
}
