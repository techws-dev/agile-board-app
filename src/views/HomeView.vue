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

    <project-dialog
      :visible="projectDialogVisible"
      :project="currentProject"
      @closeProjectDialog="closeProjectDialog"
      @projectAdded="handleProjectAdded"
      @projectUpdated="handleProjectUpdated"
    >
    </project-dialog>

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
import ProjectDialog from '../components/dialogs/ProjectDialog.vue'
import NotificationComponent from '../components/NotificationComponent.vue'

export default {
  components: {
    ProjectDialog,
    NotificationComponent
  },
  data: () => ({
    projectDialogVisible: false,
    currentProject: {},
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
      this.resetCurrentProject()

      if (id !== null) {
        let project = this.projects.find(project => project.id === id)
        this.currentProject = {...project}
      }

      this.projectDialogVisible = true
    },

    closeProjectDialog() {
      this.projectDialogVisible = false
      this.resetCurrentProject()
    },

    handleProjectAdded() {
      this.$refs.notification.show('Project has been created')
    },

    handleProjectUpdated() {
      this.$refs.notification.show('Project has been updated')
    },

    resetCurrentProject() {
      this.currentProject = {
        id: null,
        name: null
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
      'projects/delete'
    ])
  },

  computed: {
    ...mapState('projects', ['projects']),
  }
}

</script>
