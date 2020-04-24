import firebase from '@/firebase';
/* eslint-disable */

const state = {
	user: {},
	isLoggedIn: false,
};

const mutations = {
	setUser(state, user) {
		console.log(user)
		state.user = user;
		state.isLoggedIn = true;
	}
};
// actions can only be async in nature 
// Mutations and stae, getters are not allowed to be async
const actions = {
	async login({commit}) {
	  const provider = new firebase.auth.GoogleAuthProvider();
	  const { user } = await firebase.auth().signInWithPopup(provider);
      commit('setUser', {
      	id: user.uid,
      	name: user.displayName,
      	image: user.photoURL,
      	created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
}