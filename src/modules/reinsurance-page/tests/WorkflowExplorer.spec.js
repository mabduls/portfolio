import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import WorkflowExplorer from '../components/WorkflowExplorer.vue'

describe('WorkflowExplorer', () => {
  it('reveals the selected workflow stage', async () => {
    const wrapper = mount(WorkflowExplorer)
    await wrapper.findAll('button')[4].trigger('click')
    expect(wrapper.text()).toContain('Preserve workflow visibility')
  })
})
