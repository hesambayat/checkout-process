import { createStore } from 'vuex'
import userConsent from '../userConsent'

const $store = createStore(userConsent)

describe('userConsent module state', () => {
  it('email initial value returns "\'\'"', () => {
    expect($store.state.email).toEqual('')
  })

  it('termConsent initial value returns "\'\'"', () => {
    expect($store.state.termConsent).toEqual('')
  })
})

describe('userConsent module mutations', () => {
  it('setEmail trims and updates state.email', () => {
    const email = '  john.doe@example.com  '
    $store.commit('setEmail', email)
    expect($store.state.email).toEqual(email.trim())
  })

  it('setTermConsent updates state.termConsent', () => {
    const termConsent = 'yes'
    $store.commit('setTermConsent', termConsent)
    expect($store.state.termConsent).toEqual(termConsent)
  })
})
