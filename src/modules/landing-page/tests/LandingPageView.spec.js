import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LandingPageView from '../LandingPageView.vue'

const RouterLink = {
  props: ['to'],
  template: '<a :href="to"><slot /></a>',
}

describe('LandingPageView', () => {
  it('introduces the developer and links to all four primary case studies', () => {
    const wrapper = mount(LandingPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.get('h1').text()).toBe('Muhammad Abdul Aziz')
    expect(wrapper.text()).toContain('Fullstack Developer')
    expect(wrapper.findAll('.project-card')).toHaveLength(4)
    for (const slug of [
      'ads-b-platform',
      'reinsurance-platform',
      'hyang-platform',
      'monitoring-platform',
    ]) {
      expect(wrapper.find(`a[href="/projects/${slug}"]`).exists()).toBe(true)
    }
  })

  it('provides the supplied contact links without a resume or simulated live status', () => {
    const wrapper = mount(LandingPageView, { global: { stubs: { RouterLink } } })
    expect(wrapper.find('a[href="mailto:abdabdulziza@gmail.com"]').exists()).toBe(true)
    expect(
      wrapper.find('a[href="https://www.linkedin.com/in/muhammad-abdul-aziz-889a212ba/"]').exists(),
    ).toBe(true)
    expect(wrapper.text()).not.toContain('Resume')
    expect(wrapper.text()).not.toContain('LATENCY STABLE')
  })
})
