
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
      let creationDate = new Date().toISOString()
      state.projects.push({id, name, creationDate})
    },

    update(state, {id, name}) {
      let i = state.projects.map(project => project.id).indexOf(id)
      state.projects[i].name = name
    },

    delete(state, {id}) {
      let i = state.projects.map(project => project.id).indexOf(id)
      state.projects.splice(i, 1)
    }
  },
  actions: {
    add(context, name) {
      let id = uuidv4()
      context.commit('add', {id, name})
      context.dispatch('categories/createDefaultCategoriesForProject', id, {root: true})
    },

    update(context, {id, name}) {
      context.commit('update', {id, name})
    },

    delete(context, id) {
      context.commit('delete', {id})
      context.dispatch('categories/deleteFromProject', id, {root: true})
      context.dispatch('tickets/deleteFromProject', id, {root: true})
    },
  },
}