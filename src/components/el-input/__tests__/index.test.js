import { shallowMount } from '@vue/test-utils'
import Component from '../index.vue'

describe('el-input', () => {
  const props = {
    label: 'This is a test input tag',
    errorMessage: 'Custom input error message',
    modelValue: 'john.doe@example.com',
    type: 'email',
    autocomplete: 'email'
  }

  const slots = {
    default: 'Extra Content'
  }

  const wrapper = shallowMount(Component, { props, slots })
  const input = wrapper.find('input')

  it('renders props.label when passed', () => {
    expect(wrapper.text()).toMatch(props.label)
  })

  it('renders props.errorMessage when passed', () => {
    expect(wrapper.text()).toMatch(props.errorMessage)
  })

  it('renders props.type when passed', () => {
    expect(input.element.type).toBe(props.type)
  })

  it('renders props.autocomplete when passed', () => {
    expect(input.element.autocomplete).toBe(props.autocomplete)
  })

  it('renders props.modelValue when passed', () => {
    expect(input.element.value).toBe(props.modelValue)
  })

  it('renders slot when passed', () => {
    expect(wrapper.text()).toMatch(slots.default)
  })
})
