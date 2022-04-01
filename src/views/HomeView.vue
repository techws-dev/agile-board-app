<template>
  <HelloWorld />

  <ul>
    <li v-for="project in projects" :key="project">
      {{ project }}
    </li>
  </ul>
  <input v-model="name">
  <button @click="newProject">add</button>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState, mapActions } from 'vuex'

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  data: () => ({
    name: 'test'
  }),

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
  ]),

  components: {
    HelloWorld,
  },
});
</script>
