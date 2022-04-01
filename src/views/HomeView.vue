<template>
  <v-container class="grey lighten-5">
    <v-card
      class="mx-auto my-12"
      max-width="480">
      <v-card-title>Create a project</v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          validation-lazy
          @submit="newProject">

          <v-text-field
            v-model="name"
            :counter="50"
            :rules="nameRules"
            label="Project name"
            required
            @input="validate()"
          ></v-text-field>

          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="newProject"
          >
            Create
          </v-btn>

        </v-form>
      </v-card-text>
    </v-card>
    
    <v-row>
      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="project in projects" :key="project">
        <v-card v-bind:href="'/project/' + project.id">
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-text>{{ project.id }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },

    newProject() {
      this.addProject(this.name).then(() => {
        this.name = ''
      })
    },

    ...mapActions([
      'addProject'
    ])
  },

  computed: mapState([
    'projects'
  ]),
}

</script>
