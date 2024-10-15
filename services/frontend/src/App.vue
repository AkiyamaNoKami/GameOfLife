<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <v-icon class="ml-3" color="blue" size="x-large">mdi-linux</v-icon>
        <div class="font-weight-black ml-5">Penguin TMC</div>
      </v-app-bar>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
