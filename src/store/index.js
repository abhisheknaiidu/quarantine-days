import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
import auth from './auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  auth
  },
});
