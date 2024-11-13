<template>
  <v-data-table
      v-model="selected"
      :items="items"
      :headers="headers"
      item-value="title"
      show-select
  ></v-data-table>
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