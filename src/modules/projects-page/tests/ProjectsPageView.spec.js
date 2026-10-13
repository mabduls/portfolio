import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProjectsPageView from '../ProjectsPageView.vue'

const RouterLink = { props: ['to'], template: '<a :href="to"><slot /></a>' }

describe('ProjectsPageView', () => {
  it('filters by project area and restores the complete project index', async () => {
    const wrapper = mount(ProjectsPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.text()).toContain('7 projects')
    expect(wrapper.findAll('.project-card')).toHaveLength(7)
    const aircraftFilter = wrapper
      .findAll('button')
      .find((button) => button.text() === 'Aircraft Tracking')
    await aircraftFilter.trigger('click')
    expect(aircraftFilter.attributes('aria-pressed')).toBe('true')
    expect(wrapper.findAll('.project-card')).toHaveLength(1)
    expect(wrapper.get('.project-card').text()).toContain('ADS-B Aircraft Tracking Platform')
    await wrapper
      .findAll('button')
      .find((button) => button.text() === 'Reset filters')
      .trigger('click')
    expect(wrapper.findAll('.project-card')).toHaveLength(7)
  })

  it('keeps additional work available independently of selected projects', async () => {
    const wrapper = mount(ProjectsPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.text()).toContain('Additional work')
    await wrapper
      .findAll('button')
      .find((button) => button.text() === 'Fullstack Applications')
      .trigger('click')
    expect(wrapper.findAll('.project-card')).toHaveLength(2)
    expect(wrapper.text()).toContain('Coding Camp')
    expect(wrapper.text()).toContain('BEM FEB')
  })
})
