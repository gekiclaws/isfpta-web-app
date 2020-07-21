<template>
  <div>
      <br><h2>{{event.title}}</h2>
      <p>post date - {{event.postDate}}</p>
      <p>event date - {{event.eventDate}}</p>
      <p>{{event.body}}</p>
      <b-button :to="{ name: 'event-edit', params: { id: event._id }}" variant="outline-primary">Edit event</b-button>
      <b-button variant="danger" @click.prevent="onDelete(event._id)">Delete event</b-button>
  </div>
</template>

<script>
import { api } from '@/helpers/helpers';
const dateFormat = require('dateformat');

export default {
    name: 'Read',
    data() {
      return {
        event: {}
      };
    },
    methods:{
      async onDelete(id) {
          const sure = window.confirm('Are you sure?');
          if (!sure) return;
          await api.deleteEvent(id);
          this.$router.push('/events');
      }
    },
    async mounted() {
      this.event = await api.getEvent(this.$route.params.id);
      this.event.postDate = dateFormat(this.event.postDate, "mmmm dS, yyyy, h:MM:ss TT Z");
      this.event.eventDate = dateFormat(this.event.eventDate, "mmmm dS, yyyy, h:MM:ss TT Z");
    }
}
</script>

<style>

</style>
