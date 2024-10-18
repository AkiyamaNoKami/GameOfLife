<template>
  <v-app>
    <v-app-bar app>
      <v-icon class="ml-3" color="blue" size="x-large">mdi-gamepad</v-icon>
      <div class="font-weight-black ml-5">{{ appName }}</div>
      <v-btn
          @click="$router.push({name: 'createNewTask'})"
          class="mr-15"
          color="primary"
          prepend-icon="mdi-plus">
        Create</v-btn>
    </v-app-bar>

    <v-main>
      <v-layout>
        <v-navigation-drawer
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            permanent>
          <v-list>
            <v-list-group
                v-for="item in items"
                :key="item.title"
                v-model="item.active"
                :prepend-icon="item.action"
                no-action>
              <template v-slot:activator>
                <v-list-item>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </template>

              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title">
                <v-list-item-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-item-action>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>

        <v-main class="зф-5" style="height: 600px">
        <router-view/>
        </v-main>
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    appName: 'GameOfLife',
  }),
  methods: {
    refreshApp() {
      this.appName = 'Penguin TMC - Updated';
      console.log('App refresh')
    }
  },
  items: [
    {
      action: 'local_activity',
      title: 'Attractions',
      items: [
        { title: 'List Item'}
      ]
    },
    {
      action: 'restaurant',
      title: 'Dining',
      active: true,
      items: [
        { title: 'Breakfast' },
        { title: 'Sushi' }
      ]
    },
    {
      action: 'school',
      title: 'Education',
      items: [
        { title: 'List Item' }
      ]
    },
    {
      action: 'directions_run',
      title: 'Family',
      items: [
        { title: 'List Item' }
      ]
    },
    {
      action: 'healing',
      title: 'Health',
      items: [
        { title: 'List Item' }
      ]
    },
    {
      action: 'content_cut',
      title: 'Office',
      items: [
        { title: 'List Item' }
      ]
    },
    {
      action: 'local_offer',
      title: 'Promotions',
      items: [
        { title: 'List Item' }
      ]
    }
  ]
}
</script>
