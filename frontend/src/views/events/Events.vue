<template>
  <div>
    <br><h1>Events</h1>
    <b-button size="lg" variant="primary" to="/events/new">Add new event</b-button>
    <br><br>
    <div><b-card-group deck>  
      <router-link :to="{ name: 'event-read', params: { id: event._id }}" v-for="(event, i) in events" :key="i">
        <b-card :title="event.title" :sub-title="Intl.DateTimeFormat('en-GB').format(event.postDate)">
          <b-card-text>{{event.body}}</b-card-text>
          <b-card-text>{{event.eventDate}}</b-card-text>
        </b-card>
      </router-link>
   </b-card-group></div>
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';

  export default {
    name: 'Events',
    data() {
      return {
        events: []
      };
    },
    methods: {
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