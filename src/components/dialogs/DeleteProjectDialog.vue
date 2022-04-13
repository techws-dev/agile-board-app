<template>
  <confirm-dialog
    title="Confirm"
    body="Are you sure to delete this project ?"
    :visible="dialogVisible"
    @closeConfirmDialog="$emit('closeDeleteProjectDialog')"
    @confirmAction="deleteProject"
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
    projectId: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteProject() {
      let id = this.projectId

      if(id === null) return

      await this['projects/delete'](id)

      this.$emit('projectDeleted')
      this.$emit('closeDeleteProjectDialog')
    },

    ...mapActions([
      'projects/delete'
    ])
  },
  computed: {
    dialogVisible() {
      return this.visible
    },
  }
}

</script>