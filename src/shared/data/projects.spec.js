import { describe, expect, it } from 'vitest'
import { featuredProjects, getProjectBySlug, projects } from './projects'

describe('portfolio project data', () => {
  it('preserves unique project URLs and the four featured stories', () => {
    expect(new Set(projects.map(({ slug }) => slug)).size).toBe(projects.length)
    expect(new Set(projects.map(({ path }) => path)).size).toBe(projects.length)
    expect(featuredProjects).toHaveLength(4)
    expect(
      featuredProjects.every(
        (project) => project.featureGroups.length && project.stackGroups.length,
      ),
    ).toBe(true)
  })

  it('retains confidentiality for both sensitive projects', () => {
    expect(getProjectBySlug('ads-b-platform').confidential).toBe(true)
    expect(getProjectBySlug('monitoring-platform').confidential).toBe(true)
  })

  it('keeps the standalone ADS-B stack and runtime limits separate from the border platform', () => {
    const adsb = getProjectBySlug('ads-b-platform')
    expect(adsb.technologies).toContain('Express')
    expect(adsb.technologies).not.toContain('Fastify')
    expect(adsb.implementationNotes.join(' ')).toContain('cached in memory')
    expect(adsb.implementationNotes.join(' ')).toContain('not wired')
    expect(getProjectBySlug('monitoring-platform').technologies).toContain('Fastify')
  })
})
