
export default {
  namespaced: true,
  state: {
    appVersion: process.env.VUE_APP_VERSION,
  },
  getters: {
    appVersion: (state) => {
      return state.appVersion
    },
  },
  mutations: {
  },
  actions: {
  },
}