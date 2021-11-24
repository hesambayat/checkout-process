import { shallowMount } from '@vue/test-utils'
import Component from '../index.vue'

describe('el-grid', () => {
  const props = {
    rows: '4',
    columns: '8',
    gap: '30px'
  }

  const slots = {
    default: 'Main Content'
  }

  const defaultComponent = shallowMount(Component)
  const proppedComponent = shallowMount(Component, { props, slots })

  const style = (el, prop) => {
    return el.element.style.getPropertyValue(prop)
  }

  it('renders props.rows default and passed', () => {
    expect(style(defaultComponent, '--rows')).toBe('1')
    expect(style(proppedComponent, '--rows')).toBe(props.rows)
  })

  it('renders props.columns default and passed', () => {
    expect(style(defaultComponent, '--columns')).toBe('1')
    expect(style(proppedComponent, '--columns')).toBe(props.columns)
  })

  it('renders props.gap default and passed', () => {
    expect(style(defaultComponent, '--gap')).toBe('0 100px')
    expect(style(proppedComponent, '--gap')).toBe(props.gap)
  })

  it('renders slot when passed', () => {
    expect(proppedComponent.text()).toMatch(slots.default)
  })
})
