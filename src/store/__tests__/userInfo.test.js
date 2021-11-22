import { createStore } from 'vuex'
import userInfo from '../userInfo'

const $store = createStore(userInfo)

describe('userInfo module state', () => {
  it('givenName initial value returns "\'\'"', () => {
    expect($store.state.givenName).toEqual('')
  })

  it('familyName initial value returns "\'\'"', () => {
    expect($store.state.familyName).toEqual('')
  })

  it('githubUsername initial value returns "\'\'"', () => {
    expect($store.state.githubUsername).toEqual('')
  })
})

describe('userInfo module mutations', () => {
  it('setGivenName trims and updates state.givenName', () => {
    const givenName = '  John  '
    $store.commit('setGivenName', givenName)
    expect($store.state.givenName).toEqual(givenName.trim())
  })

  it('setFamilyName trims and updates state.familyName', () => {
    const familyName = '  Doe  '
    $store.commit('setFamilyName', familyName)
    expect($store.state.familyName).toEqual(familyName.trim())
  })

  it('setGithubUsername trims and updates state.githubUsername', () => {
    const githubUsername = '  john.doe  '
    $store.commit('setGithubUsername', githubUsername)
    expect($store.state.githubUsername).toEqual(githubUsername.trim())
  })
})
