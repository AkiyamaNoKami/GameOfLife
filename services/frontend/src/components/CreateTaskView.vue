<template>
  <v-container grid-list-xl>
    <v-flex>
      <v-card-title>Создать новую задачу</v-card-title>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
          <v-text-field
              width="300px"
              v-model="model"
              :counter="100"
              :rules="titleRules"
              label="Title"
              required
          ></v-text-field>
          <v-text-field
              width="300px"
              :counter="350"
              label="Description"
          ></v-text-field>
          <v-select
              width="300px"
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Type is required']"
              label="Category"
              required>
          </v-select>
          <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
          >Submit</v-btn>
          <v-btn
              @click="snackbar = true"
              color="grey"
          >Cancel</v-btn>
        </v-form>
    </v-flex>
  </v-container>
  <v-snackbar
    class="d-flex flex-wrap ga-3"
    v-model="snackbar">
    <v-card-text>
      Are you sure you want to cancel the test case creation?<br>
      This action cannot be undone.
    </v-card-text>
    <v-card-actions>
      <v-btn
          small
          color="green"
          flat
          @click="snackbar = false">
        Yes
      </v-btn>
      <v-btn
          color="red"
          flat
          @click="snackbar = false">
        No
      </v-btn>
    </v-card-actions>
  </v-snackbar>
</template>

<script>
export default {
  name: 'CreateTaskView',

  data: () => ({
    valid: true,
    snackbar: false,
    name: '',
    titleRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 10) || 'Title must be less than 10 characters',
    ],
    select: null,
    items: [
        'Task',
        'Health'
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.submitForm()
      }
    },
    async submitForm() {
      const formData = {
        title: this.title,
        description: this.description,
        category: this.category,
      }

      try {
        const response = await fetch('http://localhost:3000/api/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          const result = await response.json()
          console.log("Task created:", result)
          this.resetForm()
        } else {
          console.error('Failed to create task')
        }
      } catch (error) {
        console.error('Error:', error)
      }
    },
    resetForm() {
      this.title = '',
          this.description = '',
          this.category = '',
          this.$refs.form.reset()
    },
  },
}
</script>