import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
import { vuexfireMutations } from 'vuexfire';
import auth from './auth';
import subreddits from './subreddits';
import subreddit from './subreddit';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
  auth,
  subreddits,
  subreddit,
  },
});
