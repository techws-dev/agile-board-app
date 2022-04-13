
import { v4 as uuidv4 } from 'uuid'

// eslint-disable-next-line no-unused-vars
const DEFAULT_CATEGORIES = [
  {
    key: 'todo',
    label: 'TODO',
    order: 0,
  },
  {
    key: 'progress',
    label: 'Progress',
    order: 1,
  },
  {
    key: 'to-verify',
    label: 'To verify',
    order: 2,
  },
  {
    key: 'done',
    label: 'Done',
    order: 3,
  },
]

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    getByProjectId: (state) => (projectId) => {
      return state.categories.filter(category => category.projectId === projectId)
    },
  },
  mutations: {
    createDefaultCategoriesForProject(state, projectId) {
      DEFAULT_CATEGORIES.forEach(category => {
        let id = uuidv4()
        state.categories.push({
          id,
          key: category.key,
          label: category.label,
          order: category.order,
          projectId
        })
      });
    },

    move(state, {id, projectId, oldIndex, newIndex}) {
      console.log('category move')
      state.categories.filter(category => category.projectId === projectId && category.id !== id)
      .forEach(category => {
        if (category.order > oldIndex) {
          category.order -= 1
        }
      })
    
      state.categories.filter(category => category.projectId === projectId && category.id !== id)
      .forEach(category => {
        if (category.order >= newIndex) {
          category.order += 1
        }
      })

      let i = state.categories.map(category => category.id).indexOf(id)
      state.categories[i].order = newIndex
    },

    deleteFromProject(state, id) {
      state.categories = state.categories.filter(category => category.projectId !== id)
    },
  },
  actions: {
    createDefaultCategoriesForProject(context, projectId) {
      context.commit('createDefaultCategoriesForProject', projectId)
    },

    move(context, {id, projectId, oldIndex, newIndex}) {
      context.commit('move', {id, projectId, oldIndex, newIndex})
    },

    deleteFromProject(context, id) {
      context.commit('deleteFromProject', id)
    },
  },
}