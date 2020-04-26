import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  subreddits = [],
  posts: [],
};

const getters = {
	subreddit = (state) => state.subreddits[0] ? state.subreddits[0] : {},
}

const actions = {
  initSubreddit: firestoreAction(({ bindFirestoreRef }, name) => {
    bindFirestoreRef('subreddits', db.collection('subreddits').where('name', '==', name));
  }),
  initPost: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', db.collection('posts'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
