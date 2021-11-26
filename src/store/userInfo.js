import getGithubUser from '@/services/getGithubUser'

export default {
  state: {
    givenName: '',
    familyName: '',
    githubUsername: '',
    githubPayload: ''
  },
  mutations: {
    setGivenName(state, payload) {
      state.givenName = payload.trim()
    },
    setFamilyName(state, payload) {
      state.familyName = payload.trim()
    },
    setGithubUsername(state, payload) {
      state.githubUsername = payload.trim()
    },
    setGithubPayload(state, payload) {
      state.githubPayload = payload
    }
  },
  actions: {
    async getGithubPayload({ commit }, payload) {
      try {          
        const data = await getGithubUser(payload)
        commit('setGithubPayload', data)
      } catch (error) {
        commit('setGithubPayload', error)
      }
    }
  },
  getters: {
    github(state) {
      return state.githubPayload
    }
  }
}
