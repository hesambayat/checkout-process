import { email, github, required } from '../validators'

describe('validators', () => {
  it('github', () => {
    // invalid username
    expect(github()).toBe(false)
    expect(github('')).toBe(false)
    expect(github('  ')).toBe(false)
    expect(github(null)).toBe(false)
    expect(github(undefined)).toBe(false)
    expect(github('a_b')).toBe(false)
    expect(github('a--b')).toBe(false)
    expect(github('a-b-')).toBe(false)
    expect(github('-a-b')).toBe(false)
    expect(github('a'.repeat(40))).toBe(false)
    expect(github('john.doe@example.com')).toBe(false)
    expect(github('https://github.com/johndoe')).toBe(false)
    // valid username
    expect(github('a')).toBe(true)
    expect(github('0')).toBe(true)
    expect(github('a-b')).toBe(true)
    expect(github('a-b-123')).toBe(true)
    expect(github('a'.repeat(39))).toBe(true)
  })

  it('email', () => {
    // invalid emails
    expect(email()).toBe(false)
    expect(email('')).toBe(false)
    expect(email(null)).toBe(false)
    expect(email(undefined)).toBe(false)
    expect(email(false)).toBe(false)
    expect(email(true)).toBe(false)
    expect(email('Random string')).toBe(false)
    expect(email('com.wrong@order')).toBe(false)
    expect(email('name [at] domain [dot] com')).toBe(false)
    expect(email('name@domain')).toBe(false)
    expect(email('@domain.com')).toBe(false)
    expect(email('x@x.x')).toBe(false)
    // valid emails
    expect(email('x@x.xx')).toBe(true)
    expect(email('name@domain.com')).toBe(true)
  })

  it('required', () => {
    // invalid values
    expect(required()).toBe(false)
    expect(required('')).toBe(false)
    expect(required('  ')).toBe(false)
    expect(required(null)).toBe(false)
    expect(required(undefined)).toBe(false)
    expect(required(false)).toBe(false)
    expect(required(true)).toBe(false)
    // valid values
    expect(required('Random string')).toBe(true)
    expect(required('0')).toBe(true)
    expect(required('1')).toBe(true)
    expect(required('true')).toBe(true)
    expect(required('false')).toBe(true)
    expect(required('[]')).toBe(true)
    expect(required('{}')).toBe(true)
  })
})