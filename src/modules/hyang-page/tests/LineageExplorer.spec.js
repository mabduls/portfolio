import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import LineageExplorer from '../components/LineageExplorer.vue'

describe('LineageExplorer', () => {
  it('explains the selected lineage node', async () => {
    const wrapper = mount(LineageExplorer)
    await wrapper.findAll('button')[4].trigger('click')
    expect(wrapper.text()).toContain('Catalog, glossary, and table-lineage')
  })
})
