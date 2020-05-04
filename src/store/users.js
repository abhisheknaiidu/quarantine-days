import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  users: [],
};
/* eslint-disable */
// Turn the array into object where ID's are the key
// and the user names are the values in it.
const getters = {
// creating an object where the properties are the ID's
// and the user names are values to it.
  usersById(state) {
    return state.users.reduce((byId, user) => {
      byId[user.id] = user;
      return byId;
    }, {});
  },
};

const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('users', db.collection('users'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
