import number from '../number'

describe('number', () => {
  it('is number', () => {
    // invalid
    expect(number('')).toBe(false)
    expect(number('a')).toBe(false)
    expect(number('1a')).toBe(false)
    expect(number('1.1.1')).toBe(false)
    expect(number([])).toBe(false)
    expect(number({})).toBe(false)
    expect(number(undefined)).toBe(false)
    expect(number(null)).toBe(false)

    // valid 
    expect(number('1')).toBe(true)
    expect(number('1.1')).toBe(true)
    expect(number(0)).toBe(true)
    expect(number(-1)).toBe(true)
  })
})
