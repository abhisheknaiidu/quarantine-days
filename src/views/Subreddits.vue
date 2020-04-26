<template>
<h1> {{subreddits}} </h1>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.init();
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>
