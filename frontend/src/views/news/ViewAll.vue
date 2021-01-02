<template>
  <div class="mx-5">
    <br><h1>PTA News Items</h1>
    <b-button size="lg" variant="primary" to="/pta-network-news/create">New post</b-button>
    <br><br>
    <b-card-group class="d-flex flex-wrap justify-content-center" deck>  
      <router-link :to="{ name: 'news-read', params: { id: news._id }}" v-for="(news, i) in newsList" :key="i">
        <b-card class="mb-3" :title="news.title" :sub-title="changeDate(news.postDate)">
          <b-card-text>{{news.author}}</b-card-text>
          <b-card-text>{{news.body}}</b-card-text>
        </b-card>
      </router-link>
    </b-card-group>
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';
  const dateFormat = require('dateformat');

  export default {
    name: 'News',
    data() {
      return {
        newsList: []
      };
    },
    methods: {
      changeDate(str) {
        var date = new Date(str);
        return "Published "+dateFormat(date, "mmm d, yyyy");
      }
    },
    async mounted() {
      this.newsList = await api.getAllNews();
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>