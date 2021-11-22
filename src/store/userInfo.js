
export default {
  state: {
    givenName: '',
    familyName: '',
    githubUsername: ''
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
    }
  }
}
