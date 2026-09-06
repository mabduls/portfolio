import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import FailoverSimulation from '../components/FailoverSimulation.vue'

describe('FailoverSimulation', () => {
  it('switches to backup and restores primary', async () => {
    vi.useFakeTimers()
    const wrapper = mount(FailoverSimulation)
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Rerouting traffic')
    await vi.advanceTimersByTimeAsync(650)
    expect(wrapper.text()).toContain('Backup source is serving')
    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toContain('Primary source is serving')
    vi.useRealTimers()
  })
})
