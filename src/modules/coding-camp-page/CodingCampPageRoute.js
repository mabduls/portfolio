export const CodingCampPageRoute = {
  path: '/projects/coding-camp',
  name: 'coding-camp',
  component: () => import('./CodingCampPageView.vue'),
  meta: {
    layout: 'project',
    title: 'Coding Camp Fullstack Project — Muhammad Abdul Aziz',
    description:
      'A fullstack project integrating REST APIs, Firestore, TensorFlow.js, deployment, and CI/CD.',
  },
}
