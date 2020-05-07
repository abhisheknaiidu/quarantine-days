 <template>
     <section>
     <button
        v-if="isLoggedIn"
        @click="showForm = !showForm"
        class="post add-post">
        ADD POST
      </button>
      <form
        class="post-form"
        v-if="showForm && isLoggedIn"
        @submit.prevent="onCreatePost()">
       <b-field label="Title">
          <b-input
          v-model="post.title"
            required>
      </b-input>
    </b-field>
    <b-field label="Description">
     <b-input type="textarea"
              v-model="post.description">
     </b-input>
     </b-field>
        <b-field label="URL">
      <b-input v-model="post.URL"
               type="url">
      </b-input>
      </b-field>
    <button class="button post">Submit</button>
    </form>
    <form class="search-form">
          <b-field label="Search">
              <b-input v-model="searchTerm"></b-input>
          </b-field>
      </form>
    <div class="posts columns is-multiline is-4">
          <div class="column is-4"
              v-for="(post, index) in filteredPosts"
              :key="post.id">
              <div class="card">
                  <div class="card-image"
                      v-if="isImage(post.URL)">
                      <figure class="image">
                          <img :src="post.URL"
                              alt="Placeholder image">
                      </figure>
                  </div>
                  <div class="card-content">
                      <div class="media">
                        <div class="media-left">
                              <figure class="image is-48x48">
                              <img :src="loadedUsersById[post.user_id].image"
                                      alt="Placeholder image">
                              </figure>
                          </div>
                          <div class="media-content">
                              <p class="title is-4"
                                  v-if="!post.URL">{{post.title}}</p>
                              <p class="title is-4"
                                  v-if="post.URL">
                                  <a :href="post.URL"
                                      target="_blank">{{post.title}}</a>
                              </p>
                              <p class="subtitle is-6">{{loadedUsersById[post.user_id].name}}</p>
                          </div>
                      </div>
                      <div class="content">
                          {{post.description}}
                          <br>
                          <time>{{getCreated(index)}}</time>
                          <br>
                          <button
                            @click="deletePost(post.id)"
                            v-if="user && user.id == post.user_id"
                            class="button is-danger">
                            Delete Post
                          </button>
                          <!-- <router-link
                            :to="{
                              name: 'post',
                              params: {
                                name: $route.params.name,
                                post_id: post.id
                              }
                            }"
                            class="button is-primary">View Post</router-link> -->
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    showForm: false,
    searchTerm: '',
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  mounted() {
    this.initUsers();
    this.initSubreddit(this.$route.params.name);
  },
  // if anything changes in the URL with just typing instead of selecting the options.
  /* eslint-disable */
  watch: {
    '$route.params.name'() {
      this.initSubreddit(this.$route.params.name);
    },
    subreddit() {
      if (this.subreddit.id) {
        this.initPosts(this.subreddit.id);
      }
    },
  },
  computed: {
    ...mapState('subreddit', ['posts']),
    ...mapState('auth', ['isLoggedIn', 'user']),
    ...mapGetters({
      subreddit: 'subreddit/subreddit',
      usersById: 'users/usersById',
    }),
    filteredPosts() {
      if (this.searchTerm) {
        const regexp = new RegExp(this.searchTerm, 'gi');
        return this.posts.filter(post =>
          (post.title + post.description).match(regexp));
      }
      return this.posts;
    },
    loadedUsersById() {
    // because posts have the user informations
    // grabbing users-by-id and get the post
      return this.posts.reduce((byId, post) => {
        byId[post.user_id] = this.usersById[post.user_id] || {
          name: 'Loading...',
          image: 'https://bulma.io/images/placeholders/48x48.png',
        };
        return byId;
      }, {});
    },
  },
  methods: {
    isImage(url) {
      return url.match(/(png|jpg|jpeg|gif)$/);
    },
    ...mapActions('subreddit', ['createPost', 'initSubreddit', 'initPosts', 'deletePost']),
        ...mapActions('users', { initUsers: 'init' }),
    async onCreatePost() {
      if (this.post.title && (this.post.description || this.post.URL)) {
        await this.createPost(this.post);
        this.post = {
          title: '',
          description: '',
          URL: '',
        };
        this.showForm = false;
      }
    },
    getCreated(index) {
      function timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
          return `${interval} years`;
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
          return `${interval} months`;
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
          return `${interval} days`;
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
          return `${interval} hours`;
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
          return `${interval} minutes`;
        }
        return `${Math.floor(seconds)} seconds`;
      }
      return timeSince(this.posts[index].created_at.seconds * 1000) < 0 ?
        '0 seconds ago' :
        `${timeSince(this.posts[index].created_at.seconds * 1000)} ago`;
    },
  },
};
</script>

<style>
@import '../styles/button.css';

.search-form {
  margin-top: 2em;
    }

.posts {
   margin-top: 2em;
    }

.card {
  margin: 30px auto;
  border-radius: 40px;
box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card-image {
  border-radius: 40px;
}

.card .card-image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}


.post-form {
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .add-post {
  margin-left: 1.5rem;
  }

  .post-form {
   margin-left: 2rem;
   margin-right: 2rem;
  }

  .search-form {
   margin-left: 2rem;
   margin-right: 2rem;
  }

  .card {
    flex-direction: column;
    width: 70%;
  }
}

</style>