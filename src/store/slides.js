export default {
  state: {
    info: false,
    consent: false,
  },
  mutations: {
    updateSlide(state, payload) {
      state[payload.id] = !!payload.validity
    }
  }
}
