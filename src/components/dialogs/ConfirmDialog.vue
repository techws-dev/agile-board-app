<template>
  <v-dialog
    v-model="dialogVisible"
    >
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        {{ body }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="mr-2"
          color="normal"
          text
          @click="$emit('closeConfirmDialog')"
        >
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          text
          @click="$emit('confirmAction')"
        >
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  computed: {
    dialogVisible() {
      return this.visible
    },
  }
}

</script>