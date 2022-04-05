<template>
  <v-container
    fluid
    class="d-flex flex-column pa-0"
    style="height: 100vh;">

    <div class="d-flex align-center">
      <h1 class="mr-2">{{ project.name }}</h1>
      <v-btn
        flat
        color="primary"
        @click="openTicketDialog(null)"
      >
        New ticket
      </v-btn>
    </div>
    

    <v-row class="flex-nowrap" dense style="overflow: auto;">
      <v-col
        style="min-width: 250px;max-width: 250px;"
        v-for="category in categories" :key="category.key">
        <div class="bg-purple-lighten-2 text-white pa-2" v-bind:id="category.key">
          <h3 class="text-white text-truncate flex-grow-1">{{ category.label }}</h3>
        </div>
      </v-col>
    </v-row>

    <v-dialog
      v-model="ticketDialogVisible"
      >
      <v-card
        width="480">
        <v-card-title>New Ticket</v-card-title>

        <v-card-text>
          <v-form
            ref="ticketForm"
            v-model="ticketFormValid"
            validation-lazy
            @submit="saveTicket">

            <v-select
              v-model="ticketCategory"
              :items="categoriesSelect"
              label="Category"
              required
            ></v-select>

            <v-text-field
              v-model="ticketTitle"
              :counter="50"
              :rules="titleRules"
              label="Title"
              required
              @input="validateTicketForm()"
              @keyup.enter="saveTicket"
            ></v-text-field>

            <v-textarea
              v-model="ticketDescription"
              label="Description"
            ></v-textarea>

            <v-btn
              class="mr-2"
              color="normal"
              text
              @click="closeTicketDialog"
            >
              Cancel
            </v-btn>

            <v-btn
              color="primary"
              text
              :disabled="!ticketFormValid"
              @click="saveTicket"
            >
              Save
            </v-btn>

          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>

    <notification-component ref="notification"></notification-component>
  </v-container>
</template>

<script>

import { mapGetters, mapActions } from "vuex"
import NotificationComponent from '../components/NotificationComponent.vue'

export default {
  components: {
    NotificationComponent
  },
  data: () => ({
    categories: [
      {
        key: 'todo',
        label: 'TODO'
      },
      {
        key: 'progress',
        label: 'Progress'
      },
      {
        key: 'to-verify',
        label: 'To verify'
      },
      {
        key: 'done',
        label: 'Done'
      },
    ],
    project: {
      id: null,
      name: null
    },
    tickets: [],
    ticketId: null,
    ticketCategory: 'todo',
    ticketTitle: '',
    ticketDescription: '',
    ticketDialogVisible: false,
    ticketFormValid: false,
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 50) || 'Title must be less than 50 characters',
    ],
  }),

  mounted() {
    let id = this.$route.params.id

    this.project = this.getProjectById(id)
    this.tickets = this.getTicketsByProjectId(id)
  },

  methods: {
    openTicketDialog(id) {
      if (id == null) {
        this.resetTicketDialog()
      } else {
        let ticket = this.tickets.find(ticket => ticket.id === id)
        this.ticketId = ticket.id
        this.ticketCategory = ticket.category
        this.ticketTitle = ticket.title
        this.ticketDescription = ticket.description
      }

      this.ticketDialogVisible = true
    },

    closeTicketDialog() {
      this.resetTicketDialog()
      this.ticketDialogVisible = false
    },

    resetTicketDialog() {
      this.ticketId = null
      this.ticketCategory = 'todo'
      this.ticketTitle = ''
      this.ticketDescription = ''
    },

    saveTicket() {
      if(!this.ticketFormValid) return

      this.$refs.notification.show('Ticket has been created')

      this.closeTicketDialog()
    },

    validateTicketForm() {
      this.$refs.ticketForm.validate()
    },

    ...mapActions([
      'addTicket'
    ])
  },

  computed: {
    categoriesSelect() {
      return this.categories.map(category => category.key)
    },

    ...mapGetters([
      'getProjectById',
      'getTicketsByProjectId'
    ])
  }
}

</script>