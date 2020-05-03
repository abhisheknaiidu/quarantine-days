<template>
  <aside class="menu topics">
    <p class="menu-label">
      Topics
    </p>
    <ul class="menu-list">
      <li v-for="subreddit in subreddits" :key="subreddit.id">
      <router-link
          :to="{ name: 'subreddit', params: { name: subreddit.name } }">
          <button class="post">
          {{subreddit.name}}
          </button>
          <br>
          <br>
        </router-link>
      </li>
    </ul>
  </aside>
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

<style>
@import '../styles/button.css';

.menu-label {
  margin-left: 30px;
}

@media (max-width: 768px) {
.topics {
  margin-left: 2rem;
}
}

</style>
