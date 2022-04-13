<template>
  <confirm-dialog
    title="Confirm"
    body="Are you sure to delete this ticket ?"
    :visible="dialogVisible"
    @closeConfirmDialog="$emit('closeDeleteTicketDialog')"
    @confirmAction="deleteTicket"
  >
  </confirm-dialog>
</template>

<script>

import { mapActions } from 'vuex'
import ConfirmDialog from './ConfirmDialog.vue'

export default {
  components: {
    ConfirmDialog
  },
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    ticketId: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteTicket() {
      let id = this.ticketId

      if(id === null) return

      await this['tickets/delete'](id)

      this.$emit('ticketDeleted')
      this.$emit('closeDeleteTicketDialog')
    },

    ...mapActions([
      'tickets/delete'
    ])
  },
  computed: {
    dialogVisible() {
      return this.visible
    },
  }
}

</script>