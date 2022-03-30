<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul>
      <li v-for="project in projects" :key="project">
        {{ project }}
      </li>
    </ul>
    <input v-model="name">
    <button @click="newProject">add</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    newProject() {
      this.addProject(this.name)
    },
    ...mapActions([
      'addProject'
    ])
  },
  computed: mapState([
    'projects'
  ])
}
</script>
