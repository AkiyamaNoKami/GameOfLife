<template>
  <v-data-table
      v-model="selected"
      :items="items"
      item-value="name"
      show-select
  ></v-data-table>
</template>

<script>
export default {
  name: 'SportView',

  data () {
    return {
      selected: [],
      items: [
        {
          name: '🍎 Running',
          location: 'Washington',
          height: '0.1',
          base: '0.07',
          volume: '0.0001',
        },
        {
          name: '🍌 Skate',
          location: 'Ecuador',
          height: '0.2',
          base: '0.05',
          volume: '0.0002',
        },
        {
          name: '🍇 Swimming',
          location: 'Italy',
          height: '0.02',
          base: '0.02',
          volume: '0.00001',
        },
      ],
    }
  },
}
</script>