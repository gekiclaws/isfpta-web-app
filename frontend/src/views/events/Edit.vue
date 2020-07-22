<template>
  <div class="container">
    <br><h1>Edit Event</h1>
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
            <b-form-datepicker
              id="date"
              v-model="event.eventDate"
            ></b-form-datepicker>
          </b-form-group>

          <b-form-group
          id="time-group"
          label="Event time:"
          label-for="time"
          description="What is the time of the event?"
          >
            <b-form-timepicker
              id="time"
              v-model="eventTime"
            ></b-form-timepicker>
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
    name: 'newEvent',
    props: {
        event: {
            type: Object,
            required: false,
            default: () => {
                return {
                  title: "",
                  postDate: "",
                  eventDate: new Date(),
                  body: ""
                };
            }
        },
        eventTime:{
            type: String,
            required: true,  
        }    
    },
    data() {
      return {
        events: []
      };
    },
    methods: {
      async onSubmit() {
        this.event.postDate = new Date();

        var list = this.eventTime.split(":")
        var ms = ((list[0]*60+parseInt(list[1]))*60+parseInt(list[2]))*1000 + this.event.postDate.getTimezoneOffset()*60*1000
        this.event.eventDate = (new Date(this.event.eventDate)).getTime() + ms;

        await api.updateEvent(this.event);
        this.$router.push('/events');
      },
      onReset() {
        // Reset our form values
        this.event.title = ''
        this.event.eventDate = ''
        this.event.body = ''
      }
    },
    async mounted() {
        let evt = await api.getEvent(this.$route.params.id);
        this.event.postDate = evt.postDate;
        let date1 = new Date(this.event.eventDate);
        let var1 = date1.getTime()-date1.getTimezoneOffset()*60*1000;
        let var2 = [date1.getHours(), date1.getMinutes()]
        var1 = var1 - (var2[0]*60+var2[1])*60*1000
        let date2 = new Date(var1)
        this.event.eventDate = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDay();
        this.eventTime = var2[0]+":"+var2[1]+":00"
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>