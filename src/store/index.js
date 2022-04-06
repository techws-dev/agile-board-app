import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { v4 as uuidv4 } from 'uuid'

export default createStore({
  state: {
    appVersion: process.env.VUE_APP_VERSION,
    projects: [],
    tickets: []
  },
  getters: {
    appVersion: (state) => {
      return state.appVersion
    },

    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id)
    },

    getTicketsByProjectId: (state) => (projectId) => {
      return state.tickets.filter(ticket => ticket.projectId === projectId)
    }
  },
  mutations: {
    addProject(state, {id, name}) {
      state.projects.push({id, name})
    },

    addTicket(state, {id, projectId, title, description, category, color}) {
      state.tickets.push({id, projectId, title, description, category, color})
    }
  },
  actions: {
    addProject(context, name) {
      let id = uuidv4()
      context.commit('addProject', {id, name})
    },

    addTicket(context, {projectId, title, description, category, color}) {
      let id = uuidv4()
      context.commit('addTicket', {id, projectId, title, description, category, color})
    }
  },
  modules: {
  },
  plugins: [createPersistedState({
    key: 'aba',
    paths: ['projects', 'tickets']
  })]
})
