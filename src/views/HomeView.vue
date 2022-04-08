<template>
  <v-toolbar
    dark
    prominent
  >
    <v-toolbar-title>Projects</v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-btn
      color="primary"
      @click="openProjectDialog(null)"
    >
      New project
    </v-btn>
  </v-toolbar>
  <v-container fluid>
    <v-row>
      <v-col v-if="!projects.length">
        <div class="pa-15 text-grey text-center">
          No project created yet.
        </div>
      </v-col>
      

      <v-col
        cols="12"
        sm="6"
        lg="4"
        v-for="project in projects" :key="project">
        <v-card v-bind:href="'/project/' + project.id">
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-text>{{ project.id }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="primary"
              text
              @click.prevent="openProjectDialog(project.id)"
            >
              Edit
            </v-btn>

            <v-btn
              color="red"
              text
              @click.prevent="openDeleteProjectDialog(project.id)"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog
      v-model="projectDialogVisible"
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
            ref="form"
            v-model="projectFormValid"
            validation-lazy
            @submit="saveProject">

            <v-text-field
              v-model="projectName"
              :counter="50"
              :rules="nameRules"
              label="Project name"
              required
              @input="validateProjectForm()"
              @keyup.enter="saveProject"
            ></v-text-field>

          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            class="mr-2"
            color="normal"
            text
            @click="closeProjectDialog"
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

    <v-dialog
      v-model="deleteProjectDialogVisible"
      >
      <v-card
        id="project-dialog-card">
        <v-card-title>Delete confirmation</v-card-title>
        <v-card-text>Are you sure to delete this project ?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            class="mr-2"
            color="normal"
            text
            @click="closeDeleteProjectDialog"
          >
            Cancel
          </v-btn>

          <v-btn
            color="primary"
            text
            @click="deleteProject"
          >
            Confirm
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <notification-component ref="notification"></notification-component>
  </v-container>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import NotificationComponent from '../components/NotificationComponent.vue'

export default {
  components: {
    NotificationComponent
  },
  data: () => ({
    projectFormValid: false,
    projectId: null,
    projectName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
    projectDialogVisible: false,
    deleteProjectDialogVisible: false,
    deleteProjectId: null
  }),

  methods: {
    openDeleteProjectDialog(id) {
      this.deleteProjectId = id
      this.deleteProjectDialogVisible = true
    },

    closeDeleteProjectDialog() {
      this.deleteProjectId = null
      this.deleteProjectDialogVisible = false
    },

    openProjectDialog(id) {
      if (id == null) {
        this.resetProjectDialog()
      } else {
        let project = this.projects.find(project => project.id === id)
        this.projectId = project.id
        this.projectName = project.name
      }

      this.projectDialogVisible = true
      this.$nextTick(() => {
        this.validateProjectForm()
      })
    },

    closeProjectDialog() {
      this.projectDialogVisible = false
    },

    resetProjectDialog() {
      this.projectId = null
      this.projectName = ''
    },

    async validateProjectForm() {
      await this.$refs.form.validate()
    },

    async saveProject() {
      await this.validateProjectForm()

      if(!this.projectFormValid) return

      if(this.projectId === null) {
        this['projects/add'](this.projectName).then(() => {
          this.$refs.notification.show('Project has been created')
  
          this.closeProjectDialog()
        })
      } else {
        let projectData = {
          id: this.projectId,
          name: this.projectName
        }
        this['projects/update'](projectData).then(() => {
          this.$refs.notification.show('Project has been updated')
  
          this.closeProjectDialog()
        })
      }

    },

    async deleteProject() {
      let id = this.deleteProjectId

      if(id === null) return

      this['projects/delete'](id).then(() => {
        this.$refs.notification.show('Project has been deleted')
        
        this.closeDeleteProjectDialog()
      })
    },

    ...mapActions([
      'projects/add',
      'projects/update',
      'projects/delete'
    ])
  },

  computed: {
    ...mapState('projects', ['projects']),
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