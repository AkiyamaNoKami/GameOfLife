<template>
  <v-data-table
      v-model="selected"
      :items="items"
      :headers="headers"
      item-value="title"
      show-select
      hide-default-footer
  ></v-data-table>
  <v-defaults-provider :defaults="{ VBtn: {color: 'blue darken-2', elevation: 3}}">
    <v-btn class="done_task_btn">Done</v-btn>
  </v-defaults-provider>
</template>
<script>
export default {
  name: 'InProgressTaskView',

  data () {
    return {
      selected: [],
      items: [],
      headers: [
        { text: 'Task title', value: 'title' },
        { text: 'Task description', value: 'description' },
        { text: 'Task category', value: 'category' },
      ] ,
    };
  },
  created () {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks () {
      try {
        const response = await fetch('http://localhost:3000/api/tasks');
        if (response.ok) {
          const data = await response.json();
          this.items = data;
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    }
  }
}
</script>

<style scoped>
.done_task_btn {
  margin-top: 20px;
  margin-left: 20px;
  cursor: pointer;
}

.done_task_btn:hover {
  background-color: lightseagreen !important;
}
</style>