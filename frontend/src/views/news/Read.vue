<template>
  <div class="container text-left">
      <br><h2>{{news.title}}</h2>
      <p>Written by {{news.author}}</p>
      <p>Posted on {{news.postDate}}</p>
      <p>{{news.body}}</p>
      <b-button :to="{ name: 'news-edit', params: { id: news._id }}" variant="outline-primary" class="mx-2">Edit article</b-button>
      <b-button variant="danger" @click.prevent="onDelete(news._id)" class="mx-2">Delete article</b-button>
  </div>
</template>

<script>
import { api } from '@/helpers/helpers';
const dateFormat = require('dateformat');

export default {
    name: 'Read',
    data() {
      return {
        news: {}
      };
    },
    methods:{
      async onDelete(id) {
          const sure = window.confirm('Are you sure?');
          if (!sure) return;
          await api.deleteNews(id);
          this.$router.push('/pta-network-news');
      }
    },
    async mounted() {
      this.news = await api.getNews(this.$route.params.id);
      this.news.postDate = dateFormat(this.news.postDate, "mmmm dS, yyyy, h:MM TT");
    }
}
</script>

<style>

</style>
