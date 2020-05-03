<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/#/subreddits">
          Quarantine-Days  <img class="logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/241/face-with-medical-mask_1f637.png"/>
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control" v-if="!isLoggedIn">
              <a class="button login" @click="login()">
                Login with Google
              </a>
            </p>
            <p class="control logged-in" v-if="isLoggedIn">
              <span class="avatar">
                <figcaption>{{user.name}}</figcaption>
                <figure>
                <div class="is-flex">
                <div class="profile">
                  <img :src="user.image">
                  </div>
                  <div  class="logout">
                   <a class="button is-primary" @click="logout()">
                LogOut
              </a>
              </div>
              </div>
                </figure>
              </span>
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

#app {
  font-family: 'Special Elite', cursive;
  background-color: #fdfdfd;
}

@media (max-width: 768px) {
.navbar {
  display: flex;
}
.nav-item {
  margin-left: 8px;
}
.login {
  font-size: 14px;
}
}

.menu-label {
  font-size: 1.4em;
}

.profile {
    margin-right: 8px;
    margin-top: 4px;
}

.logo {
  margin-bottom: 4px;
  margin-left: 4px;
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
