<template>
  <v-dialog
    v-model="dialogVisible"
    >
    <v-card
      id="project-dialog-card">
      <v-card-title v-if="projectId === null">
        Create a project
      </v-card-title>
      <v-card-title v-else>
        Update project
      </v-card-title>

      <v-card-text>
        <v-form
          ref="projectForm"
          v-model="projectFormValid"
          validation-lazy
          @submit="saveProject"
          >

          <v-text-field
            v-model="projectName"
            :counter="50"
            :rules="nameRules"
            label="Project name"
            required
            @input="validateProjectForm()"
          ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="mr-2"
          color="normal"
          text
          @click="$emit('closeProjectDialog')"
        >
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          text
          :disabled="!projectFormValid"
          @click="saveProject"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapActions } from "vuex"

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    project: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    projectId: null,
    projectName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    projectFormValid: false,
  }),
  watch: {
    visible(newValue, oldValue) {
      if (newValue === true && oldValue === false) {
        this.projectId = this.project.id
        this.projectName = this.project.name

        this.projectFormValid = false

        if(this.projectId !== null) {
          this.projectFormValid = true
        }
      }
    }
  },
  computed: {
    dialogVisible() {
      return this.visible
    }
  },
  methods: {
    async saveProject(event) {
      event.preventDefault()
      
      await this.validateProjectForm()

      if(!this.projectFormValid) return

      let projectData = {
        name: this.projectName
      }

      if(this.projectId === null) {
        await this['projects/add'](projectData.name)
        this.$emit('projectAdded')
      } else {
        projectData.id = this.projectId
        await this['projects/update'](projectData)
        this.$emit('projectUpdated')
      }

      this.$emit('closeProjectDialog')
    },

    async validateProjectForm() {
      await this.$refs.projectForm.validate()
    },

    ...mapActions([
      'projects/add',
      'projects/update'
    ])
  }
}

</script>

<style scoped>

#project-dialog-card {
  width: 500px;
}

@media (max-width: 500px) {
  #project-dialog-card {
    width: 100%;
  }
}

</style>