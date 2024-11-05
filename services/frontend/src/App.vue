<template>
  <v-app>
    <v-app-bar app>
      <v-icon class="ml-3" color="blue" size="x-large">mdi-gamepad</v-icon>
      <div class="font-weight-black ml-5">{{ appName }}</div>
      <v-btn
          @click="$router.push({name: 'createNewTask'})"
          class="ml-5"
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
            <v-list-item
                @click="goHome"
                prepend-icon="mdi-home"
                title="Home"
            ></v-list-item>

            <v-list-group value="Tasks">
              <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    prepend-icon="mdi-checkbox-multiple-marked-outline"
                    title="Tasks"
                ></v-list-item>
              </template>

              <v-list-item
                  v-for="([title, icon], i) in tasks"
                  :key="i"
                  :prepend-icon="icon"
                  :title="title"
                  :value="title"
                  style="padding-left: 30px !important"
                  @click="navigateTo('/tasks/$(title.toLowerCase()')"
              ></v-list-item>
              </v-list-group>
            <v-list-group value="Health">
              <template v-slot:activator="{ props }">
                <v-list-item
                    v-bind="props"
                    prepend-icon="mdi-heart-outline"
                    title="Health"
                ></v-list-item>
              </template>

              <v-list-item
                  v-for="([title, icon], i) in health"
                  :key="i"
                  :prepend-icon="icon"
                  :title="title"
                  :value="title"
                  style="padding-left: 30px !important"
              ></v-list-item>
            </v-list-group>
          </v-list>
        </v-navigation-drawer>

        <v-main style="height: 100vh">
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

    tasks: [
      ['In progress', 'mdi-checkbox-multiple-blank-outline'],
      ['Planning', 'mdi-calendar-blank-outline'],
      ['Done', 'mdi-checkbox-marked-outline'],
      ['Droped', 'mdi-checkbox-blank-off-outline'],
    ],
    health: [
      ['Food', 'mdi-baguette'],
      ['Sport', 'mdi-snowboard'],
      ['Pils', 'mdi-pill'],
      ['Emotions', 'mdi-sticker-emoji'],
    ],
  }),
  methods: {
    goHome() {
      this.$router.push('/');
    },
    refreshApp() {
      this.appName = 'Penguin TMC - Updated';
      console.log('App refresh')
    },
    navigateTo(path) {
      this.$router.push(path);
    }
  },

}
</script>
