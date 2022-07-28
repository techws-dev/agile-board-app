<template>
  <v-dialog
    v-model="dialogVisible"
    >
    <v-card
      id="category-dialog-card">
      <v-card-title v-if="categoryId === null">
        New Category
      </v-card-title>
      <v-card-title v-else>
        Update Category
      </v-card-title>

      <v-card-text>
        <v-form
          ref="categoryForm"
          v-model="categoryFormValid"
          validation-lazy
          @submit="saveCategory"
          >
          
          <v-text-field
            v-model="categoryLabel"
            :counter="50"
            :rules="labelRules"
            label="Name"
            required
            @input="validateCategoryForm()"
          ></v-text-field>

        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          class="mr-2"
          color="normal"
          text
          @click="$emit('closeCategoryDialog')"
        >
          Cancel
        </v-btn>

        <v-btn
          color="primary"
          text
          :disabled="!categoryFormValid"
          @click="saveCategory"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapActions } from "vuex"

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    category: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    projectId: null,
    categoryId: null,
    categoryLabel: null,
    categoryFormValid: false,
    labelRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 50 characters',
    ],
  }),
  watch: {
    visible(newValue, oldValue) {
      if (newValue === true && oldValue === false) {
        this.projectId = this.category.projectId
        this.categoryId = this.category.id
        this.categoryLabel = this.category.label

        this.categoryFormValid = false

        if(this.categoryId !== null) {
          this.categoryFormValid = true
        }
      }
    }
  },
  computed: {
    dialogVisible() {
      return this.visible
    }
  },
  methods: {
    async saveCategory(event) {
      event.preventDefault()
      
      await this.validateCategoryForm()

      if(!this.categoryFormValid) return

      let categoryData = {
        projectId: this.category.projectId,
        key: this.categoryLabel.toLowerCase().replaceAll(' ', '-'), 
        label: this.categoryLabel
      }

      if(this.categoryId === null) {
        await this['categories/add'](categoryData)
        this.$emit('categoryAdded')
      } else {
        categoryData.id = this.categoryId
        await this['categories/update'](categoryData)
        this.$emit('categoryUpdated')
      }

      this.$emit('closeCategoryDialog')
    },

    async validateCategoryForm() {
      await this.$refs.categoryForm.validate()
    },

    ...mapActions([
      'categories/add',
      'categories/update'
    ])
  }
}

</script>

<style scoped>

#category-dialog-card {
  width: 500px;
}

@media (max-width: 500px) {
  #category-dialog-card {
    width: 100%;
  }
}

</style>