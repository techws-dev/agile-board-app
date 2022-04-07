
import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: {
    projects: [],
  },
  getters: {
    getById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    },
  },
  mutations: {
    add(state, {id, name}) {
      state.projects.push({id, name})
    },
  },
  actions: {
    add(context, name) {
      let id = uuidv4()
      context.commit('add', {id, name})
    },
  },
}