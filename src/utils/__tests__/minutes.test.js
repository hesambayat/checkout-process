import minutes from '../minutes'

describe('minutes', () => {
  const now = new Date()
  it('add minutes to a date', () => {
    expect(minutes(1, now)).toEqual(new Date(now.getTime() + 60000))
  })
})
