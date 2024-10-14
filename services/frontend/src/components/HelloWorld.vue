<template>
  <v-container>
    <v-navigation-drawer permanent>
      <v-toolbar>
        <v-list>
          <v-list-item>
            <v-list-item-title class="title">
              Workspace
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="handleClick(item)"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
      items: [
        { title: 'Home', icon: 'dashboard'},
        { title: 'About', icon: 'question_answer'}
      ],
      right: null
  }),
  methods: {
    handleClick(item) {
      console.log('Clicked od:', item.title);
    },
  },
}
</script>
