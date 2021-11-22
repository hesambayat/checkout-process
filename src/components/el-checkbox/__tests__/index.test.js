import { shallowMount } from '@vue/test-utils'
import Component from '../index.vue'

describe('el-checkbox', () => {
  const props = {
    label: 'This is a test checkbox',
    errorMessage: 'Custom error message',
    modelValue: 'yes'
  }

  const wrapper = shallowMount(Component, { props })
  const input = wrapper.find('input')

  it('renders props.label when passed', () => {
    expect(wrapper.text()).toMatch(props.label)
  })

  it('renders props.errorMessage when passed', () => {
    expect(wrapper.text()).toMatch(props.errorMessage)
  })

  it('renders props.modelValue when passed', () => {
    expect(input.element.checked).toBeTruthy()
  })
})
