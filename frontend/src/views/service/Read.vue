<template>
  <div class="container text-left">
      <br><h2>{{service.title}}</h2>
      <p>Published {{service.postDate}}</p>
      <p>{{service.info}}</p>
      <b-button :to="{ name: 'service-edit', params: { id: service._id }}" variant="outline-primary" class="mx-2">Edit service opportunity</b-button>
      <b-button variant="danger" @click.prevent="onDelete(service._id)" class="mx-2">Delete service opportunity</b-button>
  </div>
</template>

<script>
import { api } from '@/helpers/helpers';
const dateFormat = require('dateformat');

export default {
    name: 'Read',
    data() {
      return {
        service: {}
      };
    },
    methods:{
      async onDelete(id) {
          const sure = window.confirm('Are you sure?');
          if (!sure) return;
          await api.deleteService(id);
          this.$router.push('/community-service');
      }
    },
    async mounted() {
      this.service = await api.getService(this.$route.params.id);
      console.log(this.service);
      this.service.postDate = dateFormat(this.service.postDate, "mmmm dS, yyyy");
    }
}
</script>

<style>

</style>
