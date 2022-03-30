import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    projects: [],
    tickets: []
  },
  getters: {
  },
  mutations: {
    addProject(state, {id, name}) {
      state.projects.push([id, name])
    }
  },
  actions: {
    addProject(context, name) {
      let id = uuidv4()
      context.commit('addProject', {id, name})
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'aba',
    paths: ['projects']
  })]
})
