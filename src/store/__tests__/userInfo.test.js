import { createStore } from 'vuex'
import userInfo from '../userInfo'

const $store = createStore(userInfo)

const $mock = {
  givenName: '  John  ',
  familyName: '  Doe  ',
  githubUsername: '  john.doe  ',
  githubPayload: { message: 'Not found' }
}

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

  it('githubPayload initial value returns "\'\'"', () => {
    expect($store.state.githubPayload).toEqual('')
  })
})

describe('userInfo module mutations', () => {
  it('setGivenName trims and updates state.givenName', () => {
    $store.commit('setGivenName', $mock.givenName)
    expect($store.state.givenName).toEqual($mock.givenName.trim())
  })

  it('setFamilyName trims and updates state.familyName', () => {
    $store.commit('setFamilyName', $mock.familyName)
    expect($store.state.familyName).toEqual($mock.familyName.trim())
  })

  it('setGithubUsername trims and updates state.githubUsername', () => {
    $store.commit('setGithubUsername', $mock.githubUsername)
    expect($store.state.githubUsername).toEqual($mock.githubUsername.trim())
  })

  it('setGithubPayload updates state.githubPayload', () => {
    $store.commit('setGithubPayload', $mock.githubPayload)
    expect($store.state.githubPayload).toEqual($mock.githubPayload)
  })
})

describe('userInfo module getters', () => {
  it('github returns mocked value', () => {
    expect($store.getters.github).toStrictEqual($mock.githubPayload)
  })
})