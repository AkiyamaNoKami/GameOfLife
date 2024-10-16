<template>
  <v-container grid-list-xl>
    <v-flex>
      <v-card-title>Создать новый тест-кейс</v-card-title>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation>
          <v-text-field
              v-model="model"
              :counter="10"
              :rules="titleRules"
              label="Название"
              required
          ></v-text-field>

          <v-text-field
          label="Описание"
          ></v-text-field>
        </v-form>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'CreateCaseView',
}
</script>