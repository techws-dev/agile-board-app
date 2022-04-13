
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
      let ticketsInCategory = state.tickets.filter(ticket => ticket.projectId == projectId && ticket.category == category)
      state.tickets.push({id, projectId, title, description, category, color, order: ticketsInCategory.length})
    },

    update(state, {id, projectId, title, description, category, color}) {
      let i = state.tickets.map(ticket => ticket.id).indexOf(id)
      state.tickets[i].projectId = projectId
      state.tickets[i].title = title
      state.tickets[i].description = description
      state.tickets[i].category = category
      state.tickets[i].color = color
    },

    move(state, {id, projectId, categoryFrom, categoryTo, oldIndex, newIndex}) {
      state.tickets.filter(ticket => ticket.projectId === projectId && ticket.category === categoryFrom && ticket.id !== id)
        .forEach(ticket => {
          if (ticket.order > oldIndex) {
            ticket.order -= 1
          }
        })
      
      state.tickets.filter(ticket => ticket.projectId === projectId && ticket.category === categoryTo && ticket.id !== id)
      .forEach(ticket => {
        if (ticket.order >= newIndex) {
          ticket.order += 1
        }
      })

      let i = state.tickets.map(ticket => ticket.id).indexOf(id)
      state.tickets[i].projectId = projectId
      state.tickets[i].category = categoryTo
      state.tickets[i].order = newIndex
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

    move(context, {id, projectId, categoryFrom, categoryTo, oldIndex, newIndex}) {
      context.commit('move', {id, projectId, categoryFrom, categoryTo, oldIndex, newIndex})
    },

    deleteFromProject(context, id) {
      context.commit('deleteFromProject', id)
    },
  },
}