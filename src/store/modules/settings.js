
export default {
  namespaced: true,
  state: {
    appVersion: process.env.VUE_APP_VERSION,
    theme: 'light',
  },
  getters: {
    appVersion: (state) => {
      return state.appVersion
    },
  },
  mutations: {
    updateAppVersion(state, version) {
      state.appVersion = version
    },

    updateTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    updateAppVersion(context, version) {
      context.commit('updateAppVersion', version)
    },

    updateTheme(context, theme) {
      context.commit('updateTheme', theme)
    }
  },
}