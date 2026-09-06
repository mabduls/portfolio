import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ProjectsPageView from '../ProjectsPageView.vue'

const RouterLink = { props: ['to'], template: '<a><slot /></a>' }

describe('ProjectsPageView', () => {
  it('filters projects by category and can reset', async () => {
    const wrapper = mount(ProjectsPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.text()).toContain('7 projects')
    await wrapper.get('button[aria-pressed="false"]').trigger('click')
    expect(wrapper.text()).not.toContain('7 projects')
    await wrapper
      .findAll('button')
      .find((button) => button.text() === 'Reset filters')
      .trigger('click')
    expect(wrapper.text()).toContain('7 projects')
  })

  it('renders confidentiality labels', () => {
    const wrapper = mount(ProjectsPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.text()).toContain('Confidential')
  })
})
