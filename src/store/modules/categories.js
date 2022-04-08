
// eslint-disable-next-line no-unused-vars
const DEFAULT_CATEGORIES = [
  {
    key: 'todo',
    label: 'TODO'
  },
  {
    key: 'progress',
    label: 'Progress'
  },
  {
    key: 'to-verify',
    label: 'To verify'
  },
  {
    key: 'done',
    label: 'Done'
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
    createDefaultCategoriesForProject(state, id) {
      console.log(id)
      DEFAULT_CATEGORIES.forEach(category => {
        state.categories.push({
          key: category.key,
          label: category.label,
          projectId: id
        })
      });
    },

    deleteFromProject(state, id) {
      state.categories = state.categories.filter(category => category.projectId !== id)
    },
  },
  actions: {
    createDefaultCategoriesForProject(context, id) {
      context.commit('createDefaultCategoriesForProject', id)
    },

    deleteFromProject(context, id) {
      context.commit('deleteFromProject', id)
    },
  },
}