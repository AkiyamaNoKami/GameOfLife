<template>
  <v-card>
<!--    <v-layout>-->
<!--      <v-navigation-drawer-->
<!--          image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"-->
<!--          theme="dark"-->
<!--          permanent>-->
<!--        <v-list nav>-->
<!--          <v-list-item prepend-icon="mdi-home" title="Home" value="home"></v-list-item>-->
<!--          <v-list-item prepend-icon="mdi-bookshelf" title="Project" value="project"></v-list-item>-->
<!--          <v-list-item prepend-icon="mdi-abacus" title="Statistic" value="statistic"></v-list-item>-->
<!--          <v-list-item-->
<!--              class="opacity-80 bg-blue-accent-4 text-white"-->
<!--              prepend-icon="mdi-plus"-->
<!--              title="Create new case"-->
<!--              value="create-new-case"-->
<!--              @click="$router.push({name:'createNewCase'})"></v-list-item>-->
<!--        </v-list>-->
<!--      </v-navigation-drawer>-->
<!--      <v-main style="height: 600px"></v-main>-->
<!--    </v-layout>-->
  </v-card>
</template>
<script>

export default {
  name: 'HelloWorld',

  data: () => ({
      items: [
        { title: 'Project', icon: 'dashboard'},
        { title: 'Statistics', icon: 'question_answer'},
        { title: 'Settings', icon: 'question_answer'}
      ],
      right: null
  })
}
</script>
