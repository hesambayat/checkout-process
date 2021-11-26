import number from './number'

class CacheItem {
  constructor(data, expires) {
    this.data = data
    this.expires = expires instanceof Date ? expires : undefined
  }
}

export default class Cache {
  constructor(max) {
    this._order = []
    this._cache = {}
    this._maxItems = number(max) ? max : 5
  }
  set(key, data, expires) {
    const item = new CacheItem(data, expires)
    if (Object.keys(this._cache).length === this._maxItems && this._order.length) {
      delete this._cache[this._order[0]]
      this._order.shift()
    }
    this._order.push(key)
    this._cache[key] = item
  }
  get(key) {
    const out = this._cache[key]
    if (out && out.expires && out.expires < new Date()) {
      delete this._cache[key]
      return undefined
    }
    return out ? out.data : undefined
  }
}
