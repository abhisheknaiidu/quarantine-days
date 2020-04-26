 <template>
     <section>
     <h1> {{ $route.params.name }} </h1>
      <form>
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
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data: () => ({
    post: {
      title: '',
      description: '',
      URL: '',
    },
  }),
  mounted() {
    // this.init();
  },
  computed: mapState('subreddits', ['subreddits']),
  methods: mapActions('subreddits', ['init']),
};
</script>
