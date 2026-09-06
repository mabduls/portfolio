import { describe, expect, it } from 'vitest'
import { routes } from './routes'

describe('application routes', () => {
  it('exposes every expected path as a lazy-loaded route', () => {
    const paths = routes.map(({ path }) => path)
    expect(paths).toEqual(
      expect.arrayContaining([
        '/',
        '/projects',
        '/projects/ads-b-platform',
        '/projects/monitoring-platform',
        '/projects/reinsurance-platform',
        '/projects/hyang-platform',
        '/projects/coding-camp',
        '/projects/bem-feb',
        '/projects/csirt-internship',
        '/about',
        '/:pathMatch(.*)*',
      ]),
    )
    expect(
      routes
        .filter(({ path }) => path !== '/:pathMatch(.*)*')
        .every(({ component }) => typeof component === 'function'),
    ).toBe(true)
  })

  it('provides metadata for each route', () => {
    expect(routes.every(({ meta }) => meta?.title && meta?.description && meta?.layout)).toBe(true)
  })
})
