<template>
  <v-container grid-list-xl>
    <v-flex>
      <v-card-title>Создать новый тест-кейс</v-card-title>
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
              label="Bug type"
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
        'Critical',
        'High',
        'Medium',
        'Low'
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this
      }
    }
  }
}
</script>