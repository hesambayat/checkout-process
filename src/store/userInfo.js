import Cache from '@/utils/cache'
import minutes from '@/utils/minutes'

const GithubUserCache = new Cache(20)

let timeout

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
    fetchGithubUser({ commit }, payload) {
      const cached = GithubUserCache.get(payload)
      if (cached) {
        commit('setGithubPayload', cached)
        return false
      }

      clearTimeout(timeout)
      timeout = setTimeout(async () => {
        const result = await fetch(`https://api.github.com/users/${payload}`)
        const data = await result.json()

        GithubUserCache.set(payload, data, minutes(60))
        commit('setGithubPayload', data)
      }, 1000)
    }
  },
  getters: {
    github(state) {
      return state.githubPayload
    }
  }
}
