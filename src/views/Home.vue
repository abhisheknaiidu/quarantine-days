<template>
  <div class="home">
  <a class="button is-danger" @click="login()"> Login With Google </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  methods: mapActions('auth', ['login']),
};
</script>
