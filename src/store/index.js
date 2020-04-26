import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
import { firebaseMutations } from 'vuexfire';
import auth from './auth';
import posts from './posts';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
  auth,
  posts,
  },
});
