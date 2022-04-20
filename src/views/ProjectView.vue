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
      @click="openCategoryDialog(null)"
    >
      New category
    </v-btn>
  </v-toolbar>
  <v-container fluid>

    <v-row id="categories" dense style="overflow: auto;" class="align-start">
      <v-col
        style="min-width: 250px;max-width: 250px;"
        v-for="category in sortedCategories" :key="category.id"
        :id="'category-' + category.id">
        <div class="d-flex category-header pa-2 mb-2 select-none" v-bind:id="category.key">
          <h3 class="text-truncate flex-grow-1">{{ category.label }}</h3>
          
          <v-spacer></v-spacer>

          <v-btn
            variant="plain"
            class="mr-2"
            color="primary"
            icon="mdi-pencil"
            size="x-small"
            @click="openCategoryDialog(category.id)"
          >
          </v-btn>

          <v-btn
            variant="plain"
            color="red"
            icon="mdi-delete"
            size="x-small"
            @click="openDeleteCategoryDialog(category.id)"
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
            <v-card-text class="text-black">
              Created: {{ new Date(ticket.creationDate).toLocaleString() }}
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
                @click.prevent="openDeleteTicketDialog(ticket.id)"
                class="bg-white"
              >
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-col>
    </v-row>
    
    <category-dialog
      :visible="categoryDialogVisible"
      :category="currentCategory"
      @closeCategoryDialog="closeCategoryDialog"
      @categoryAdded="handleCategoryAdded"
      @categoryUpdated="handleCategoryUpdated"
    >
    </category-dialog>

    <delete-category-dialog
      :visible="deleteCategoryDialogVisible"
      :categoryId="deleteCategoryId"
      @closeDeleteCategoryDialog="closeDeleteCategoryDialog"
      @categoryDeleted="handleCategoryDeleted"
    >
    </delete-category-dialog>

    <ticket-dialog
      :visible="ticketDialogVisible"
      :ticket="currentTicket"
      @closeTicketDialog="closeTicketDialog"
      @ticketAdded="handleTicketAdded"
      @ticketUpdated="handleTicketUpdated"
    >
    </ticket-dialog>

    <delete-ticket-dialog
      :visible="deleteTicketDialogVisible"
      :ticketId="deleteTicketId"
      @closeDeleteTicketDialog="closeDeleteTicketDialog"
      @ticketDeleted="handleTicketDeleted"
    >
    </delete-ticket-dialog>

    <notification-component ref="notification"></notification-component>
  </v-container>
</template>

<script>

import { mapGetters, mapActions } from "vuex"
import CategoryDialog from '../components/dialogs/CategoryDialog.vue'
import DeleteCategoryDialog from '../components/dialogs/DeleteCategoryDialog.vue'
import DeleteTicketDialog from '../components/dialogs/DeleteTicketDialog.vue'
import TicketDialog from '../components/dialogs/TicketDialog.vue'
import NotificationComponent from '../components/NotificationComponent.vue'
import Sortable from 'sortablejs/modular/sortable.complete.esm.js'

import colors from 'vuetify/lib/util/colors'

export default {
  components: {
    CategoryDialog,
    DeleteCategoryDialog,
    DeleteTicketDialog,
    TicketDialog,
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
    ticketDialogVisible: false,
    currentTicket: {},
    categoryDialogVisible: false,
    currentCategory: {},
    deleteTicketDialogVisible: false,
    deleteTicketId: '',
    deleteCategoryDialogVisible: false,
    deleteCategoryId: ''
  }),

  async mounted() {
    let id = this.$route.params.id

    let project = await this['projects/getById'](id)

    if (project) {
      this.project = project
    } else {
      this.$router.push({ path: '/' })
      return
    }
    
    await this.loadData()
  },

  methods: {
    async loadData() {
      this.tickets = await this['tickets/getByProjectId'](this.project.id)
      this.categories = await this['categories/getByProjectId'](this.project.id)

      this.loadSortable()
    },

    loadSortable() {
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
              let categoryId = evt.item.id.replace('category-', '')
              let projectId = this.project.id
              let newIndex = evt.newIndex
              let oldIndex = evt.oldIndex
              
              if (newIndex !== oldIndex) {
                this['categories/move']({
                  id: categoryId, 
                  projectId, 
                  oldIndex, 
                  newIndex})
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
              let projectId = this.project.id
              let categoryFrom = evt.from.id.replace('category-items-', '')
              let categoryTo = evt.to.id.replace('category-items-', '')
              let newIndex = evt.newIndex
              let oldIndex = evt.oldIndex
    
              if (categoryFrom !== categoryTo || newIndex !== oldIndex) {
                this['tickets/move']({
                  id: ticketId, 
                  projectId, 
                  categoryFrom, 
                  categoryTo, 
                  oldIndex, 
                  newIndex
                })
              }
    
              console.log(`${ticketId} moved from ${categoryFrom} to ${categoryTo} and from index ${oldIndex} to ${newIndex}`)
            }
          })
          
        })

      })
    },

    openCategoryDialog(id) {
      this.resetCurrentCategory()

      if (id !== null) {
        let category = this.categories.find(category => category.id === id)
        this.currentCategory = {...category}
      }

      this.categoryDialogVisible = true
    },

    closeCategoryDialog() {
      this.categoryDialogVisible = false
      this.resetCurrentCategory()
    },

    handleCategoryAdded() {
      this.$refs.notification.show('Category has been created')
      this.loadData()
    },

    handleCategoryUpdated() {
      this.$refs.notification.show('Category has been updated')
      this.loadData()
    },

    resetCurrentCategory() {
      this.currentCategory = {
        id: null,
        projectId: this.project.id,
        key: null,
        label: null,
        order: null
      }
    },

    openDeleteCategoryDialog(id) {
      this.deleteCategoryId = id
      this.deleteCategoryDialogVisible = true
    },

    closeDeleteCategoryDialog() {
      this.deleteCategoryId = ''
      this.deleteCategoryDialogVisible = false
    },

    handleCategoryDeleted() {
      this.$refs.notification.show('Category has been deleted')
      this.loadData()
    },

    openTicketDialog(id) {
      this.resetCurrentTicket()

      if (id !== null) {
        let ticket = this.tickets.find(ticket => ticket.id === id)
        this.currentTicket = {...ticket}
      }

      this.ticketDialogVisible = true
    },

    closeTicketDialog() {
      this.ticketDialogVisible = false
      this.resetCurrentTicket()
    },

    handleTicketAdded() {
      this.$refs.notification.show('Ticket has been created')
      this.loadData()
    },

    handleTicketUpdated() {
      this.$refs.notification.show('Ticket has been updated')
      this.loadData()
    },

    resetCurrentTicket() {
      this.currentTicket = {
        id: null,
        projectId: this.project.id,
        color: 'yellow',
        category: [...this.categories].sort((a, b) => {
          return a.order - b.order
        }).map(category => category.key)[0],
        title: '',
        description: ''
      }
    },

    openDeleteTicketDialog(id) {
      this.deleteTicketId = id
      this.deleteTicketDialogVisible = true
    },

    closeDeleteTicketDialog() {
      this.deleteTicketId = ''
      this.deleteTicketDialogVisible = false
    },

    handleTicketDeleted() {
      this.$refs.notification.show('Ticket has been deleted')
      this.loadData()
    },

    filteredTicketsByCategory(category) {
      return this.tickets.filter(ticket => ticket.category === category).sort((a, b) => {
        return a.order - b.order
      })
    },

    ...mapActions([
      'tickets/move',
      'categories/move'
    ])
  },

  computed: {
    sortedCategories() {
      return [...this.categories].sort((a, b) => {
        return a.order - b.order
      })
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

.category-header {
  border-bottom: 2px solid #ccc;
}

</style>