import { createStore } from 'vuex'
import userInfo from '../userInfo'

const $store = createStore(userInfo)

const $mock = {
  givenName: '  John  ',
  familyName: '  Doe  ',
  githubUsername: '  john.doe  ',
  githubUser: { avatar_url: 'https://avatars.githubusercontent.com/u/1234567?v=3' }
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

  it('githubUser initial value returns "\'\'"', () => {
    expect($store.state.githubUser).toEqual('')
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

  it('setGithubUser updates state.githubUser', () => {
    $store.commit('setGithubUser', $mock.githubUser)
    expect($store.state.githubUser).toEqual($mock.githubUser)
  })
})

describe('userInfo module getters', () => {
  it('avatar returns mocked value', () => {
    expect($store.getters.avatar).toBe($mock.githubUser.avatar_url)
  })
})