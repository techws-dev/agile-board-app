<template>
  <v-app>
    <v-app-bar
      color="primary"
      prominent
    >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Agile Board App</v-toolbar-title>

      <template v-slot:append>
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
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import { mapGetters } from "vuex"

export default {
  name: 'App',

  data: () => ({
    drawer: true
  }),

  computed: {
    ...mapGetters({
      appVersion: 'settings/appVersion'
    })
  }
}
</script>

<style>

/* ugly fixes */
.v-dialog .v-overlay__content {
  max-width: none !important;
  max-height: none !important;
}


@media (max-width: 959.98px) {
  .v-dialog .v-overlay__content {
    max-width: none !important;
  }
}

</style>