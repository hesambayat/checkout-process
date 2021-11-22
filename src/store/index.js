import { createStore } from 'vuex'
import slides from './slides'
import userConsent from './userConsent'
import userInfo from './userInfo'

export default createStore({
  modules: {
    slides,
    userConsent,
    userInfo
  },
  strict: process.env.NODE_ENV !== 'production'
})
