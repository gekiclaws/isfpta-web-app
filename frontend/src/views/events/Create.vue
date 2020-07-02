<template>
  <div>
    <br><h1>Create Event</h1>
    <div>
      <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group
          id="title-group"
          label="Event title:"
          label-for="title"
          description="What do you want to call your event?"
          >
            <b-form-input
              id="title"
              v-model="event.title"
              type="text"
              required
              placeholder="Enter title"
            ></b-form-input>
          </b-form-group>

          <b-form-group
          id="date-group"
          label="Event date:"
          label-for="date"
          description="What is the date of the event?"
          >
            <!-- <b-form-input
              id="date"
              v-model="event.eventDate"
              type="date"
              required
            ></b-form-input> -->
            <b-form-datepicker
              id="date"
              v-model="event.eventDate"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group
          id="body-group"
          label="Event body:"
          label-for="body"
          description="Provide a description for the event."
          >
            <b-form-textarea
              id="body"
              v-model="event.body"
              placeholder="Enter event description"
              rows="4"
              no-resize
              required
            ></b-form-textarea>
          </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { api } from '@/helpers/helpers';

  export default {
    name: 'newEvent',
    props: {
        event: {
            type: Object,
            required: false,
            default: () => {
                return {
                  title: "",
                  postDate: new Date(),
                  eventDate: new Date(),
                  body: ""
                };
            }
        }    
    },
    data() {
      return {
        events: []
      };
    },
    methods: {
      async onSubmit() {
        //this.event.postDate = currentDate.getFullYear() + '-' + (currentDate.getMonth() < 12 ? currentDate.getMonth() + 1 : 1) + '-' + currentDate.getDate();
        await api.createEvent(this.event);
        console.log(event.eventDate);
        this.$router.push('/events');
      },
      onReset() {
        // Reset our form values
        this.event.title = ''
        this.event.eventDate = ''
        this.event.body = ''
        // Trick to reset/clear native browser form validation state
        // this.show = false
        // this.$nextTick(() => {
        //   this.show = true
        // })
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