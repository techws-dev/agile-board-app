<template>
  <v-container
    fluid>

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

    <v-row id="categories" dense style="overflow: auto;">
      <v-col
        style="min-width: 250px;max-width: 250px;"
        v-for="category in categories" :key="category.key"
        :id="'category-' + category.key">
        <div class="category-header bg-purple-lighten-2 text-white pa-2 mb-4 select-none" v-bind:id="category.key">
          <h3 class="text-white text-truncate flex-grow-1">{{ category.label }}</h3>
        </div>

        <div :id="'category-items-' + category.key">
          <v-card 
            v-for="ticket in filteredTicketsByCategory(category.key)" 
            :key="ticket.id" 
            class="mb-4 select-none"
            :id="'ticket-' + ticket.id"
            :style="'background-color: ' + colors[ticket.color].lighten1 + ';'"
          >
            <v-card-title>
              {{ ticket.title }}
            </v-card-title>
            <v-card-text>
              {{ ticket.description }}
            </v-card-text>
          </v-card>
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

            <v-btn-toggle class="mb-8" v-model="ticketColor" style="height: auto;" mandatory>
              <v-btn v-for="color in colorsSelect" :key="color" :value="color[0]" class="pa-2" size="small" :style="'background-color: ' + color[1].lighten1 + ';'">
                {{ color[0] }}
              </v-btn>
            </v-btn-toggle>

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
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

import colors from 'vuetify/lib/util/colors'

export default {
  components: {
    NotificationComponent
  },
  data: () => ({
    /* Use Vuetify colors definition */
    colors: Object.fromEntries(
      Object.entries(colors).filter(
        // eslint-disable-next-line no-unused-vars
        ([key, value]) => ['green', 'blue', 'yellow', 'orange', 'red', 'purple'].includes(key)
      )
    ),
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
    ticketColor: null,
    ticketTitle: '',
    ticketDescription: '',
    ticketDialogVisible: false,
    ticketFormValid: false,
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 50) || 'Title must be less than 50 characters',
    ],
  }),

  async mounted() {
    console.log(this.colors)
    let id = this.$route.params.id

    let project = await this.getProjectById(id)

    if (project) {
      this.project = project
    } else {
      this.$router.push({ path: '/' })
      return
    }
    
    this.tickets = this.getTicketsByProjectId(id)

    this.categories.forEach(category => {
      /* Categories sorting */
      Sortable.create(document.getElementById(`categories`), {
        group: 'categories',
        animation: 150,
        handle: '.category-header',
        onEnd: evt => {
          let category = evt.item.id.replace('category-', '')
          let newIndex = evt.newIndex
          let oldIndex = evt.oldIndex
          
          if (newIndex !== oldIndex) {
            console.log(`${category} moved from index ${oldIndex} to ${newIndex}`)
          }
        }
      })

      /* Tickets sorting / category update */
      Sortable.create(document.getElementById(`category-items-${category.key}`), {
        group: 'items',
        animation: 150,
        swapThreshold: 1,
        onEnd: evt => {
          let ticketId = evt.item.id.replace('ticket-', '')
          let categoryFrom = evt.from.id.replace('category-items-', '')
          let categoryTo = evt.to.id.replace('category-items-', '')
          let newIndex = evt.newIndex
          let oldIndex = evt.oldIndex

          if (categoryFrom !== categoryTo || newIndex !== oldIndex) {
            console.log('anything to do')

            console.log(this.getTicketsByProjectId(id))
          }

          console.log(`${ticketId} moved from ${categoryFrom} to ${categoryTo} and from index ${oldIndex} to ${newIndex}`)
        }
      })
      
    })
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
      this.ticketColor = 'yellow'
      this.ticketCategory = 'todo'
      this.ticketTitle = ''
      this.ticketDescription = ''
    },

    async saveTicket() {
      await this.validateTicketForm()

      if(!this.ticketFormValid) return

      let ticketData = {
        projectId: this.project.id,
        title: this.ticketTitle, 
        description: this.ticketDescription, 
        category: this.ticketCategory,
        color: this.ticketColor
      }

      this.addTicket(ticketData).then(() => {
        this.tickets = this.getTicketsByProjectId(this.project.id)

        this.$refs.notification.show('Ticket has been created')

        this.closeTicketDialog()
      })
    },

    async validateTicketForm() {
      await this.$refs.ticketForm.validate()
    },

    filteredTicketsByCategory(category) {
      return this.tickets.filter(ticket => ticket.category === category)
    },

    ...mapActions([
      'addTicket'
    ])
  },

  computed: {
    categoriesSelect() {
      return this.categories.map(category => category.key)
    },

    colorsSelect() {
      // eslint-disable-next-line no-unused-vars
      return Object.entries(this.colors).filter(([key, value]) => key !== 'shades')
    },

    ...mapGetters([
      'getProjectById',
      'getTicketsByProjectId'
    ])
  }
}

</script>

<style scoped>

.select-none{
  user-select: none;
}

</style>