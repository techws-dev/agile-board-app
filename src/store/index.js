import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './modules/settings'
import projects from './modules/projects'
import tickets from './modules/tickets'

export default createStore({
  modules: {
    settings,
    projects,
    tickets,
  },
  plugins: [createPersistedState({
    key: 'agile-board-app',
    paths: ['projects', 'tickets']
  })]
})
