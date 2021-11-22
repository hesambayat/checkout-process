export default {
  state: {
    email: '',
    termConsent: ''
  },
  mutations: {
    setEmail(state, payload) {
      state.email = payload.trim()
    },
    setTermConsent(state, payload) {
      state.termConsent = payload
    }
  }
}
