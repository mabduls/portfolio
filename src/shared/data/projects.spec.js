import { describe, expect, it } from 'vitest'
import { getProjectBySlug, projects } from './projects'

describe('portfolio project data', () => {
  it('uses unique slugs and paths', () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length)
    expect(new Set(projects.map(({ path }) => path)).size).toBe(projects.length)
  })

  it('marks confidential case studies explicitly', () => {
    expect(getProjectBySlug('ads-b-platform').confidential).toBe(true)
    expect(getProjectBySlug('monitoring-platform').confidential).toBe(true)
  })
})
