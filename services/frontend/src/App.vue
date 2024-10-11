<template>
  <v-app>
    <v-main>
      <v-app-bar app></v-app-bar>
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
