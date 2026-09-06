import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import AircraftMapSimulation from '../components/AircraftMapSimulation.vue'

describe('AircraftMapSimulation', () => {
  it('supports playback, selection, alert state, and reset', async () => {
    const wrapper = mount(AircraftMapSimulation)
    const findButton = (label) =>
      wrapper.findAll('button').find((button) => button.text() === label)
    expect(findButton('Play').exists()).toBe(true)
    await wrapper.get('button[aria-label="Select DEMO 204"]').trigger('click')
    expect(wrapper.text()).toContain('31,000 ft')
    await findButton('critical').trigger('click')
    expect(wrapper.text()).toContain('critical state')
    await findButton('Play').trigger('click')
    expect(findButton('Pause').exists()).toBe(true)
    await findButton('Reset').trigger('click')
    expect(wrapper.text()).toContain('normal state')
    expect(wrapper.text()).toContain('Select an aircraft marker')
  })
})
