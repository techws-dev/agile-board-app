<template>
  <v-container>
    <h1>{{ project.name }}</h1>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data: () => ({
    project: {
      id: null,
      name: null
    }
  }),

  mounted() {
    let id = this.$route.params.id

    this.project = this.getProjectById(id)
  },

  computed: {
    ...mapGetters([
      'getProjectById'
    ])
  }
}
</script>