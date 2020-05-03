<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/subreddits">
          Quarantine-Days  <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/241/face-with-medical-mask_1f637.png"/>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!isLoggedIn">
              <a class="button is Danger" @click="login()">
                Login with Google
              </a>
            </p>
            <p class="control logged-in" v-if="isLoggedIn">
              <span class="avatar">
                <figure>
                  <img :src="user.image">
                </figure>
                <figcaption>{{user.name}}</figcaption>
              </span>
              <a class="button is-primary" @click="logout()">
                LogOut
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
    <router-view class="main container"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');

html, body {
  height:100%;
  font-family: 'Special Elite', cursive;
}
#app {
     width: 100%;
     height: 100%;
     background-color: #fff;
     -webkit-animation: random 5s infinite;
     animation: random 5s infinite;
}
@keyframes  random {
    15% { background-color: #b6d468; }
    30% { background-color: #fd8b8e; }
    45% { background-color: #c74ae6; }
    60% { background-color: #b51e3b; }
    75% { background-color: #4c4433; }
}

.main {
  margin-top: 2em;
}
.logged-in {
  display: flex;
  flex-direction: row;
}
.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
