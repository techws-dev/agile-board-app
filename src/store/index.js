import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './modules/settings'
import categories from './modules/categories'
import projects from './modules/projects'
import tickets from './modules/tickets'

export default createStore({
  modules: {
    settings,
    categories,
    projects,
    tickets,
  },
  plugins: [createPersistedState({
    key: 'agile-board-app',
    paths: ['projects', 'tickets', 'categories', 'settings']
  })]
})
