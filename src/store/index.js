import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
import { firebaseMutations } from 'vuexfire';
import auth from './auth';
import subreddits from './subreddits';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: firebaseMutations,
  modules: {
  auth,
  subreddits,
  },
});
