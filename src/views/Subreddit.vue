 <template>
     <section>
     <button
        @click="showForm = !showForm"
        class="button is-primary">
        Toggle Form
      </button>
      <form
        v-if="showForm"
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
    <button class="button is-success">Add Post</button>
    </form>
    <div class="posts columns is-multiline is-4">
          <div class="column is-4"
              v-for="post in posts"
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
                          <div class="media-content">
                              <p class="title is-4"
                                  v-if="!post.URL">{{post.title}}</p>
                              <p class="title is-4"
                                  v-if="post.URL">
                                  <a :href="post.URL"
                                      target="_blank">{{post.title}}</a>
                              </p>
                          </div>
                      </div>
                      <div class="content">
                          {{post.description}}
                          <br>
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
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  mounted() {
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
    ...mapGetters('subreddit', ['subreddit']),
  },
  methods: {
    isImage(url) {
      return url.match(/(png|jpg|jpeg|gif)$/);
    },
    ...mapActions('subreddit', ['createPost', 'initSubreddit', 'initPosts']),
    async onCreatePost() {
      if (this.post.title && (this.post.description || this.post.URL)) {
        await this.createPost(this.post);
      }
    },
  },
};
</script>

<style>

.posts {
   margin-top: 2em;
    }
.card {
   height: 100%;
   margin: 1%;
   border-radius: 5px;
    }
.card img {
   border-radius: 5px;
    }

</style>