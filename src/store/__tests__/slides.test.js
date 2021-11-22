import { createStore } from 'vuex'
import slides from '../slides'

const $store = createStore(slides)

describe('slide module state', () => {
  it('email initial value returns "false"', () => {
    expect($store.state.info).toEqual(false)
  })

  it('consent initial value returns "false"', () => {
    expect($store.state.consent).toEqual(false)
  })
})

describe('slide module mutations', () => {
  it('updateSlide updates the state', () => {
    $store.commit('updateSlide', { id: 'consent', validity: true })
    expect($store.state.consent).toEqual(true)
    $store.commit('updateSlide', { id: 'consent', validity: false })
    expect($store.state.consent).toEqual(false)
  })
})
