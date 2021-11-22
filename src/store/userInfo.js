
export default {
  state: {
    givenName: '',
    familyName: '',
    githubUsername: '',
    githubUser: ''
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
    setGithubUser(state, payload) {
      state.githubUser = payload
    }
  },
  actions: {
    async fetchGithubUser({ commit }, payload) {
      // https://api.github.com/search/users?q={query}
      const result = await fetch(`https://api.github.com/users/${payload}`)
      if (result.status === 200) {
        const data = await result.json()
        commit('setGithubUser', data)
      } else {
        commit('setGithubUser', '')
      }
    }
  },
  getters: {
    avatar(state) {
      return state.githubUser?.avatar_url
    }
  }
}
