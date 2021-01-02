<template>
  <div class="container text-left">
      <br><h2>{{event.title}}</h2>
      <p>Posted {{event.postDate}}</p>
      <p>Event date | {{event.eventDate}}</p>
      <p>{{event.body}}</p>
      <p>Venue | {{event.venue}}</p>
      <p>Time | {{event.startTime.substring(0,5)}} to {{event.endTime.substring(0,5)}}</p>
      <p>Language | {{event.language}}</p>
      <p>Fees | {{event.fees}}</p>
      <p>Speaker | {{event.speaker}}</p>
      <p>{{event.speakerBlurb}}</p>
      <b-button :to="{ name: 'event-edit', params: { id: event._id }}" variant="outline-primary" class="mx-2">Edit event</b-button>
      <b-button variant="danger" @click.prevent="onDelete(event._id)" class="mx-2">Delete event</b-button>
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
      console.log(this.event);
      this.event.postDate = dateFormat(this.event.postDate, "mmmm dS, yyyy");
      this.event.eventDate = dateFormat(new Date(this.event.eventDate), "mmmm dS, yyyy");
    }
}
</script>

<style>

</style>
