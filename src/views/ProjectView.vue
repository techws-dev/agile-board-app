<template>
  <v-toolbar
    dark
    prominent
  >
    <v-toolbar-title>{{ project.name }}</v-toolbar-title>

    <v-spacer></v-spacer>
    
    <v-btn
      color="primary"
      @click="openTicketDialog(null)"
    >
      New ticket
    </v-btn>

    <v-btn
      color="primary"
    >
      New category
    </v-btn>
  </v-toolbar>
  <v-container fluid>

    <v-row id="categories" dense style="overflow: auto;" class="align-start">
      <v-col
        style="min-width: 250px;max-width: 250px;"
        v-for="category in sortedCategories" :key="category.key"
        :id="'category-' + category.key">
        <div class="d-flex category-header pa-2 mb-2 select-none" v-bind:id="category.key">
          <h3 class="text-truncate flex-grow-1">{{ category.label }}</h3>
          
          <v-spacer></v-spacer>

          <v-btn
            variant="plain"
            class="mr-2"
            color="primary"
            icon="mdi-pencil"
            size="x-small"
          >
          </v-btn>

          <v-btn
            variant="plain"
            color="red"
            icon="mdi-delete"
            size="x-small"
          >
          </v-btn>
        </div>

        <div :id="'category-items-' + category.key">
          <v-card 
            v-for="ticket in filteredTicketsByCategory(category.key)" 
            :key="ticket.id" 
            class="mb-2 select-none"
            :id="'ticket-' + ticket.id"
            :style="'background-color: ' + colors[ticket.color].lighten1 + ';'"
          >
            <v-card-title class="text-black">
              {{ ticket.title }}
            </v-card-title>
            <v-card-text v-if="ticket.description.length" class="text-black">
              {{ ticket.description }}
            </v-card-text>
            <v-card-text v-else class="font-italic text-black">
              no description
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="primary"
                icon="mdi-pencil"
                size="x-small"
                @click.prevent="openTicketDialog(ticket.id)"
                class="bg-white"
              >
              </v-btn>

              <v-btn
                color="red"
                icon="mdi-delete"
                size="x-small"
                class="bg-white"
              >
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    
    <v-dialog
      v-model="ticketDialogVisible"
      >
      <v-card
        id="ticket-dialog-card">
        <v-card-title v-if="ticketId === null">
          New Ticket
        </v-card-title>
        <v-card-title v-else>
          Update Ticket
        </v-card-title>

        <v-card-text>
          <v-form
            ref="ticketForm"
            v-model="ticketFormValid"
            validation-lazy
            >

            <v-btn-toggle class="flex-wrap mb-8" v-model="ticketColor" style="height: auto;" mandatory>
              <v-btn v-for="color in colorsSelect" :key="color" :value="color[0]" class="pa-2" size="small" :style="'background-color: ' + color[1].lighten1 + ';'">
                {{ color[0] }}
              </v-btn>
            </v-btn-toggle>

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

          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

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
        </v-card-actions>
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
    categories: [],
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

    let project = await this['projects/getById'](id)

    if (project) {
      this.project = project
    } else {
      this.$router.push({ path: '/' })
      return
    }
    
    this.tickets = await this['tickets/getByProjectId'](id)
    this.categories = await this['categories/getByProjectId'](id)

    // wait for dom to update and create ids
    this.$nextTick(() => {
      
      this.categories.forEach(category => {
        /* Categories sorting */
        Sortable.create(document.getElementById(`categories`), {
          group: 'categories',
          animation: 150,
          swapThreshold: 0.1,
          handle: '.category-header',
          filter: 'button',
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
          filter: 'button',
          onEnd: evt => {
            let ticketId = evt.item.id.replace('ticket-', '')
            let categoryFrom = evt.from.id.replace('category-items-', '')
            let categoryTo = evt.to.id.replace('category-items-', '')
            let newIndex = evt.newIndex
            let oldIndex = evt.oldIndex
  
            if (categoryFrom !== categoryTo || newIndex !== oldIndex) {
              console.log('anything to do')
  
              console.log(this['tickets/getByProjectId'](id))
            }
  
            console.log(`${ticketId} moved from ${categoryFrom} to ${categoryTo} and from index ${oldIndex} to ${newIndex}`)
          }
        })
        
      })

    })
  },

  methods: {
    openTicketDialog(id) {
      if (id == null) {
        this.ticketFormValid = false
        this.resetTicketDialog()
      } else {
        this.ticketFormValid = true
        let ticket = this.tickets.find(ticket => ticket.id === id)
        this.ticketId = ticket.id
        this.ticketColor = ticket.color
        this.ticketCategory = ticket.category
        this.ticketTitle = ticket.title
        this.ticketDescription = ticket.description
      }

      this.ticketDialogVisible = true
    },

    closeTicketDialog() {
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

      if(this.ticketId === null) {
        this['tickets/add'](ticketData).then(() => {
          this.tickets = this['tickets/getByProjectId'](this.project.id)

          this.$refs.notification.show('Ticket has been created')

          this.closeTicketDialog()
        })
      } else {
        ticketData.id = this.ticketId
        this['tickets/update'](ticketData).then(() => {
          this.tickets = this['tickets/getByProjectId'](this.project.id)

          this.$refs.notification.show('Ticket has been updated')

          this.closeTicketDialog()
        })
      }
    },

    async validateTicketForm() {
      await this.$refs.ticketForm.validate()
    },

    filteredTicketsByCategory(category) {
      return this.tickets.filter(ticket => ticket.category === category).sort((a, b) => {
        return a.order - b.order
      })
    },

    ...mapActions([
      'tickets/add',
      'tickets/update'
    ])
  },

  computed: {
    sortedCategories() {
      return [...this.categories].sort((a, b) => {
        a.order - b.order
      })
    },

    categoriesSelect() {
      return this.categories.map(category => category.key)
    },

    colorsSelect() {
      // eslint-disable-next-line no-unused-vars
      return Object.entries(this.colors).filter(([key, value]) => key !== 'shades')
    },

    ...mapGetters([
      'projects/getById',
      'tickets/getByProjectId',
      'categories/getByProjectId'
    ])
  }
}

</script>

<style scoped>

.select-none{
  user-select: none;
}

#ticket-dialog-card {
  width: 500px;
}

@media (max-width: 500px) {
  #ticket-dialog-card {
    width: 100%;
  }
}

.category-header {
  border-bottom: 2px solid #ccc;
}

</style>