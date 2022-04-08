
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

    update(state, {id, projectId, title, description, category, color}) {
      let i = state.tickets.map(ticket => ticket.id).indexOf(id)
      state.tickets[i].projectId = projectId
      state.tickets[i].title = title
      state.tickets[i].description = description
      state.tickets[i].category = category
      state.tickets[i].color = color
    },

    deleteFromProject(state, id) {
      state.tickets = state.tickets.filter(ticket => ticket.projectId !== id)
    },
  },
  actions: {
    add(context, {projectId, title, description, category, color}) {
      let id = uuidv4()
      context.commit('add', {id, projectId, title, description, category, color})
    },

    update(context, {id, projectId, title, description, category, color}) {
      context.commit('update',  {id, projectId, title, description, category, color})
    },

    deleteFromProject(context, id) {
      context.commit('deleteFromProject', id)
    },
  },
}