import Cache from '../cache'
import minutes from '../minutes'

describe('cache', () => {
  const mockCache = new Cache(2)
  const data = { 
    first: 'Junk data',
    second: [1, 2, 3],
    third: { a: 1, b: 2, c: 3 }
  }

  Object.keys(data).forEach(key => mockCache.set(key, data[key], minutes(5)))
  
  it('is flushed out', () => {
    expect(mockCache.get('first')).toBeUndefined()
  })

  it('is cashed', () => {
    expect(mockCache.get('second')).toEqual(data.second)
    expect(mockCache.get('third')).toEqual(data.third)
  })
})
