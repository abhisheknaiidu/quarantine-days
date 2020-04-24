import firebase from '@/firebase';
/* eslint-disable */

const state = {
	user: {},
	isLoggedIn: false,
};

const mutations = {
   setUser(state, user) {
    if (user) {
      state.user = user;
      state.isLoggedIn = true;
    } else {
      state.user = {};
      state.isLoggedIn = false;
    }
  },
};
// actions can only be async in nature 
// Mutations and stae, getters are not allowed to be async
const actions = {
	async login() {
	  const provider = new firebase.auth.GoogleAuthProvider();
	  await firebase.auth().signInWithPopup(provider);
	},
	async logout() {
	 await firebase.auth().signOut();
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}