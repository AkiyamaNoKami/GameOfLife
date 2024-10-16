<template>
  <v-app>
    <v-app-bar app>
      <v-icon class="ml-3" color="blue" size="x-large">mdi-linux</v-icon>
      <div class="font-weight-black ml-5">{{ appName }}</div>
    </v-app-bar>

    <v-main>
      <v-layout>

        <v-navigation-drawer
            image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            theme="dark"
            permanent>
          <v-list nav>
            <v-list-item
                prepend-icon="mdi-home"
                title="Home"
                value="home"
                @click="$router.push('/home')"
            ></v-list-item>
            <v-list-item prepend-icon="mdi-bookshelf" title="Project" value="project"></v-list-item>
            <v-list-item prepend-icon="mdi-abacus" title="Statistic" value="statistic"></v-list-item>
            <v-list-item
                class="opacity-80 bg-blue-accent-4 text-white"
                prepend-icon="mdi-plus"
                title="Create new case"
                value="create-new-case"
                @click="$router.push({name:'createNewCase'})"
            ></v-list-item>
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
    appName: 'Penguin TMC',
  }),

  methods: {
    refreshApp() {
      this.appName = 'Penguin TMC - Updated';
      console.log('App refresh')
    }
  }
}
</script>
