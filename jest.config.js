module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.mjs$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!vuetify)'],
  setupFiles: [
    '<rootDir>/tests/setup.js'
  ]
}
