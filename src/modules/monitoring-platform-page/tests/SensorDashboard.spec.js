import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SensorDashboard from '../components/SensorDashboard.vue'

describe('SensorDashboard', () => {
  it('toggles layers and controls the deterministic stream', async () => {
    const wrapper = mount(SensorDashboard)
    const aircraftToggle = wrapper.get('button[aria-pressed="true"]')
    await aircraftToggle.trigger('click')
    expect(aircraftToggle.attributes('aria-pressed')).toBe('false')
    await wrapper
      .findAll('button')
      .find((button) => button.text() === 'Start')
      .trigger('click')
    expect(wrapper.text()).toContain('Synthetic aircraft track updated')
    await wrapper
      .findAll('button')
      .find((button) => button.text() === 'Pause')
      .trigger('click')
  })
})
