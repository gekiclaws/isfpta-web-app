<template>
  <div>
      <br><h2>{{event.title}}</h2>
      <p>post date - {{event.postDate}}</p>
      <p>event date - {{event.eventDate}}</p>
      <p>{{event.body}}</p>
      <b-button variant="outline-primary">Edit event</b-button>
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
      console.log(dateFormat(this.event.postDate, "longTime"));
      this.event.postDate = new Intl.DateTimeFormat('en-GB').format(event.postDate);
      this.event.eventDate = new Intl.DateTimeFormat('en-GB').format(event.eventDate);
    }
}
</script>

<style>

</style>
