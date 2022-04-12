
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
    updateTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    updateTheme(context, theme) {
      context.commit('updateTheme', theme)
    }
  },
}