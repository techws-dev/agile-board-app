<template>
  <v-dialog
    v-model="dialogVisible"
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
          @click="$emit('closeTicketDialog')"
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
</template>

<script>

import { mapGetters, mapActions } from "vuex"

import colors from 'vuetify/lib/util/colors'

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    ticket: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    categories: [],
    /* Use Vuetify colors definition */
    colors: Object.fromEntries(
      Object.entries(colors).filter(
        // eslint-disable-next-line no-unused-vars
        ([key, value]) => ['green', 'blue', 'yellow', 'orange', 'red', 'purple'].includes(key)
      )
    ),
    projectId: null,
    ticketId: null,
    ticketCategory: null,
    ticketColor: null,
    ticketTitle: '',
    ticketDescription: '',
    ticketFormValid: false,
    titleRules: [
      v => !!v || 'Title is required',
      v => (v && v.length <= 50) || 'Title must be less than 50 characters',
    ],
  }),
  watch: {
    visible(newValue, oldValue) {
      if (newValue === true && oldValue === false) {
        this.projectId = this.ticket.projectId
        this.ticketId = this.ticket.id
        this.ticketCategory = this.ticket.category
        this.ticketColor = this.ticket.color
        this.ticketTitle = this.ticket.title
        this.ticketDescription = this.ticket.description

        this.categories = this['categories/getByProjectId'](this.projectId)

        this.ticketFormValid = false

        if(this.ticketId !== null) {
          this.ticketFormValid = true
        }
      }
    }
  },
  computed: {
    dialogVisible() {
      return this.visible
    },

    categoriesSelect() {
      return [...this.categories].sort((a, b) => {
        return a.order - b.order
      }).map(category => category.key)
    },

    colorsSelect() {
      // eslint-disable-next-line no-unused-vars
      return Object.entries(this.colors).filter(([key, value]) => key !== 'shades')
    },

    ...mapGetters([
      'categories/getByProjectId'
    ])
  },
  methods: {
    async saveTicket() {
      await this.validateTicketForm()

      if(!this.ticketFormValid) return

      let ticketData = {
        projectId: this.projectId,
        title: this.ticketTitle, 
        description: this.ticketDescription, 
        category: this.ticketCategory,
        color: this.ticketColor
      }

      if(this.ticketId === null) {
        await this['tickets/add'](ticketData)
        this.$emit('ticketAdded')
      } else {
        ticketData.id = this.ticketId
        await this['tickets/update'](ticketData)
        this.$emit('ticketUpdated')
      }

      this.$emit('closeTicketDialog')
    },

    async validateTicketForm() {
      await this.$refs.ticketForm.validate()
    },

    ...mapActions([
      'tickets/add',
      'tickets/update'
    ])
  }
}

</script>

<style scoped>

#ticket-dialog-card {
  width: 500px;
}

@media (max-width: 500px) {
  #ticket-dialog-card {
    width: 100%;
  }
}

</style>