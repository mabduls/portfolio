import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LandingPageView from '../LandingPageView.vue'

const RouterLink = {
  props: ['to'],
  template: '<a :href="typeof to === \'string\' ? to : to.path"><slot /></a>',
}

describe('LandingPageView', () => {
  it('renders the primary portfolio sections and flagship link', () => {
    const wrapper = mount(LandingPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.find('h1').text()).toContain('complex systems')
    expect(wrapper.text()).toContain('Selected work')
    expect(wrapper.text()).toContain('Capabilities')
    expect(wrapper.text()).toContain('Experience')
    expect(wrapper.find('a[href="/projects/ads-b-platform"]').exists()).toBe(true)
  })
})
