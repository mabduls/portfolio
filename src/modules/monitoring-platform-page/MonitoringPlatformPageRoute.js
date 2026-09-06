export const MonitoringPlatformPageRoute = {
  path: '/projects/monitoring-platform',
  name: 'monitoring-platform',
  component: () => import('./MonitoringPlatformPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Real-Time Monitoring Platform Case Study — Muhammad Abdul Aziz',
    description:
      'A conceptual case study of secure multi-sensor monitoring, live events, CCTV, RF signals, aircraft, and alerts.',
  },
}
