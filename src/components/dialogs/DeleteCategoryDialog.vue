<template>
  <confirm-dialog
    title="Confirm"
    body="Are you sure to delete this category ?"
    :visible="dialogVisible"
    @closeConfirmDialog="$emit('closeDeleteCategoryDialog')"
    @confirmAction="deleteCategory"
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
    categoryId: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteCategory() {
      let id = this.categoryId

      if(id === null) return

      await this['categories/delete'](id)

      this.$emit('categoryDeleted')
      this.$emit('closeDeleteCategoryDialog')
    },

    ...mapActions([
      'categories/delete'
    ])
  },
  computed: {
    dialogVisible() {
      return this.visible
    },
  }
}

</script>