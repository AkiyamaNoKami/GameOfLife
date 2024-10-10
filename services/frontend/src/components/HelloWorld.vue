<template>
  <div class="hello">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'PingComponent',
  data () {
    return {
      msg: '',
    };
  },
  methods: {
    getMessage () {
      axios.get('/')
      .then((res) => {
        this.msg = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
