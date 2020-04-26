import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
  posts: [],
};

const actions = {
  init: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('posts', db.collection('posts'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};
