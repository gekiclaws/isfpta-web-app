<template>
  <div>
    <h1>Events</h1>
    <div><b-card-group deck>  
      <b-card :title="event.title" :sub-title="event.postDate" v-for="(event, i) in events" :key="i">
        <b-card-text>{{event.body}}</b-card-text>
        <b-card-text>{{event.eventDate}}</b-card-text>
        <!-- <a href="#" class="card-link">Card link</a>
        <b-link href="#" class="card-link">Another link</b-link> -->
      </b-card>
   </b-card-group></div>
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';

  export default {
    name: 'Events',
    data() {
      return {
        events: [
          {
            key: 1,
            title: "An event title",
            postDate: "2020-5-13",
            eventDate: "2020-5-20",
            body: "Title description",
          },
          {
            key: 2,
            title: "An event title 2",
            postDate: "2020-5-13",
            eventDate: "2020-5-20",
            body: "Title description",
          },
          {
            key: 3,
            title: "An event title 3",
            postDate: "2020-5-13",
            eventDate: "2020-5-20",
            body: "Title description",
          }
        ]
      };
    },
    methods: {
      // async onDestroy(id) {
      //   const sure = window.confirm('Are you sure?');
      //   if (!sure) return;
      //   await api.deletetask(id);
      //   this.flash('task deleted sucessfully!', 'success');
      //   const newtasks = this.tasks.filter(task => task._id !== id);
      //   this.tasks = newtasks;
      // },
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