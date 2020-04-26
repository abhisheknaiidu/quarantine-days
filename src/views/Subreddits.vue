<template>
<pre> {{subreddits}} </pre>

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
