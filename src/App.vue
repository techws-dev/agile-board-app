<template>
  <v-app :theme="theme">
    <v-app-bar
      color="primary"
      prominent
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Agile Board App</v-toolbar-title>

      <template v-slot:append>
        <v-btn-toggle 
          mandatory
          v-model="theme"
          class="mr-4"
        >
          <v-btn value="dark" size="small">
            <v-icon>mdi-weather-night</v-icon>
          </v-btn>

          <v-btn value="light" size="small">
            <v-icon>mdi-weather-sunny</v-icon>
          </v-btn>
        </v-btn-toggle>

        <v-btn icon="mdi-github" href="https://github.com/techws-dev/agile-board-app" target="_blank"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer">
      <v-list-item>
        <v-list-item-header>
          <v-list-item-title>v{{ appVersion }}</v-list-item-title>
        </v-list-item-header>
      </v-list-item>
      <v-list nav>
        <v-list-item title="Home" to="/"></v-list-item>
        <v-list-item title="About" to="/about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="min-height: 100vh">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters, mapActions } from "vuex"

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    theme: 'light'
  }),

  mounted() {
    if (this.$store.state.settings.appVersion !== process.env.VUE_APP_VERSION) {
      console.log('update app version')
      this['settings/updateAppVersion'](process.env.VUE_APP_VERSION)
    }
    this.theme = this.$store.state.settings.theme
  },

  watch: {
    // eslint-disable-next-line no-unused-vars
    theme(newTheme, oldTheme) {
      this['settings/updateTheme'](newTheme)
    }
  },

  methods: {
    ...mapActions([
      'settings/updateAppVersion',
      'settings/updateTheme'
    ])
  },

  computed: {
    ...mapGetters({
      appVersion: 'settings/appVersion'
    })
  }
}
</script>
