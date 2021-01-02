<template>
  <div class="container">
    <br><h1>Publish Service Opportunity</h1>
    <div>
      <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
          id="title-group"
          label="Opportunity title:"
          label-for="title"
          description="What is the title of the service opportunity?"
          >
            <b-form-input
              id="title"
              v-model="service.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="info-group"
          label="Opportunity information:"
          label-for="info"
          description="Input details of the service opportunity"
          >
            <b-form-textarea
              id="info"
              v-model="service.info"
              placeholder="Enter details here"
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
    name: 'newService',
    props: {
        service: {
            type: Object,
            required: false,
            default: () => {
                return {
                  title: "",
                  postDate: new Date(),
                  info: ""
                };
            }
        }   
    },
    methods: {
      async onSubmit() {
        this.service.postDate = new Date();
        await api.createService(this.service);
        this.$router.push('/community-service');
      },
      onReset() {
        // Reset our form values
        this.service.title = ''
        this.service.info = ''
      }
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>