
import { v4 as uuidv4 } from 'uuid'

export default {
  namespaced: true,
  state: {
    tickets: [],
  },
  getters: {
    getByProjectId: (state) => (projectId) => {
      return state.tickets.filter(ticket => ticket.projectId === projectId)
    },
  },
  mutations: {
    add(state, {id, projectId, title, description, category, color}) {
      state.tickets.push({id, projectId, title, description, category, color})
    },
  },
  actions: {
    add(context, {projectId, title, description, category, color}) {
      let id = uuidv4()
      context.commit('add', {id, projectId, title, description, category, color})
    },
  },
}