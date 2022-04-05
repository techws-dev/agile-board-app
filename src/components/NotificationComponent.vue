<template>
  <v-snackbar
    v-model="display"
    vertical
  >
    <div class="text-subtitle-1">
      {{ text }}
    </div>
    
    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="display = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>

export default {
  data: () => ({
    display: false,
    text: 'blabla'
  }),
  methods: {
    show(message) {
      this.display = true
      this.text = message
    }
  }
}

</script>