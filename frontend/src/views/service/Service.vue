<template>
  <div class="container">
    <br><h1>Community Service</h1>
    <b-button size="lg" variant="primary" to="/service/create">Add new service opportunity</b-button>
    <br><br>
    <!-- <b-card-group class="d-flex flex-wrap justify-content-center" deck>  
      <router-link :to="{ name: 'event-read', params: { id: event._id }}" v-for="(event, i) in events" :key="i">
        <b-card class="mb-3" :title="event.title" :sub-title="'Posted '+changeDate(event.postDate)"></b-card>
      </router-link>
    </b-card-group> -->
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';
  const dateFormat = require('dateformat');

  export default {
    name: 'Events',
    data() {
      return {
        events: []
      };
    },
    methods: {
      changeDate(str) {
        var date = new Date(str);
        return dateFormat(date, "mmm d, yyyy");
      }
    },
    async mounted() {
      this.events = await api.getAllEvents();
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>