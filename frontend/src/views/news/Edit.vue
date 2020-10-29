<template>
  <div class="container">
    <br><h1>Edit News</h1>
    <div>
      <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
          id="title-group"
          label="News title:"
          label-for="title"
          description="What is the title of your article?"
          >
            <b-form-input
              id="title"
              v-model="news.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="author-group"
          label="Author:"
          label-for="author"
          >
            <b-form-input
              id="author"
              v-model="news.author"
              type="text"
              required
              placeholder="Enter author name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="body-group"
          label="News body:"
          label-for="body"
          description="Write the body of your news article here."
          >
            <b-form-textarea
              id="body"
              v-model="news.body"
              placeholder="Enter news body"
              rows="4"
              no-resize
              required
            ></b-form-textarea>
          </b-form-group>

        <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
        <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>

        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';

  export default {
    name: 'newNews',
    props: {
        news: {
            type: Object,
            required: false,
            default: () => {
                return {
                  title: "",
                  author: "",
                  postDate: "",
                  body: ""
                };
            }
        }
    },
    methods: {
      async onSubmit() {
        this.news.postDate = new Date();
        await api.updateNews(this.$route.params.id, this.news);
        this.$router.push('/news');
      },
      onReset() {
        // Reset our form values
        this.news.title = ''
        this.news.author = ''
        this.news.body = ''
      }
    },
    async mounted() {
        let response = await api.getNews(this.$route.params.id);
        this.news.title = response.title;
        this.news.postDate = response.postDate;
        this.news.author = response.author;
        this.news.body = response.body;
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>