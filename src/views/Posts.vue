<template>
<h1> {{posts}} </h1>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.init();
  },
  computed: mapState('posts', ['posts']),
  methods: mapActions('posts', ['init']),
};
</script>
