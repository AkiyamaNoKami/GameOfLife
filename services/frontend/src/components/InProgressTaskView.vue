<template>
  <v-data-table
      v-model="selected"
      :items="items"
      :headers="headers"
      item-value="_id"
      show-select
      hide-default-footer
  ></v-data-table>
  <v-defaults-provider :defaults="{ VBtn: {color: 'blue darken-2', elevation: 3}}">
    <v-btn @click="markAsDone" class="task_btn">Done</v-btn>
    <v-btn @click="markTaskAsDropped" class="task_btn">Drop</v-btn>
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
        { text: 'TaskId', value: '_id' },
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
        const response = await fetch('http://localhost:3000/api/tasks/inprogress');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetching tasks:', data);

          this.items = data;
        } else {
          console.error('Failed to fetch tasks');
        }
      } catch (error) {
        console.error('Failed to fetch tasks', error);
      }
    },

    async markAsDone() {
      console.log('Selected tasks:', this.selected);
      try {
        for (const taskId of this.selected) {
          const task = this.items.find(item => item._id === taskId)
          console.log(`Marking task as done :`, task);

          if(!task || !task._id) {
            console.error(`Task id ${taskId} not valid`, task);
            continue;
          }
          const response = await fetch(`http://localhost:3000/api/tasks/${task._id}/mark-done`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            }
          });

          if (!response.ok) {
            const errorData = await response.json();
            console.error(`Failed to mark task is done. Status ${response.status}, message: ${errorData.statusText || 'Unknown error'}`);
          }
        }
        this.items = this.items.filter(item => !this.selected.includes(item));
        this.selected = [];
      } catch (error) {
        console.error('Failed to mark tasks as done, error:', error);
      }
    },

    async markTaskAsDropped() {
      try {
        for (const task of this.selected) {
          await fetch(`http://localhost:3000/api/tasks/${task._id}/mark-dropped`, {
            method: 'PATCH',
          });
        }
        this.items = this.items.filter(item => !this.selected.includes(item));
        this.selected = [];
      } catch (error) {
        console.error('Failed to mark tasks as done', error);
      }
    },
  },
};

</script>

<style scoped>
  .task_btn {
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }

  .task_btn:hover {
    background-color: lightseagreen !important;
  }
</style>