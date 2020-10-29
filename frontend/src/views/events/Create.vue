<template>
  <div class="container">
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
          id="body-group"
          label="Event description: (optional)"
          label-for="body"
          description="Provide a description for the event."
          >
            <b-form-textarea
              id="body"
              v-model="event.body"
              placeholder="Enter event description"
              rows="4"
              no-resize
            ></b-form-textarea>
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
          label="Event start:"
          label-for="startTime"
          description="What is the start time of the event?"
          >
            <b-form-timepicker
              id="startTime"
              v-model="event.startTime"
            ></b-form-timepicker>
          </b-form-group>

          <b-form-group
          id="time-group"
          label="Event end:"
          label-for="endTime"
          description="What is the end time of the event?"
          >
            <b-form-timepicker
              id="endTime"
              v-model="event.endTime"
            ></b-form-timepicker>
          </b-form-group>

          <b-form-group
          id="title-group"
          label="Venue:"
          label-for="venue"
          description="What is the event venue?"
          >
            <b-form-textarea
              id="venue"
              v-model="event.venue"
              type="text"
              required
              placeholder="Enter event venue"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
          id="title-group"
          label="Language:"
          label-for="language"
          description="What language will be spoken in the event?"
          >
            <b-form-textarea
              id="language"
              v-model="event.language"
              type="text"
              required
              placeholder="Enter event language"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
          id="body-group"
          label="Fees:"
          label-for="fees"
          description="What are the fees for the event?"
          >
            <b-form-textarea
              id="fees"
              v-model="event.fees"
              type="text"
              required
              placeholder="Enter event fees"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
          id="title-group"
          label="Speaker:"
          label-for="speaker"
          description="Who is the speaker for the event?"
          >
            <b-form-textarea
              id="speaker"
              v-model="event.speaker"
              type="text"
              required
              placeholder="Enter event speaker"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group
          id="body-group"
          label="Speaker introduction:"
          label-for="speakerBlurb"
          description="Any introduction for the speaker?"
          >
            <b-form-textarea
              id="speakerBlurb"
              v-model="event.speakerBlurb"
              type="text"
              placeholder="Enter event speaker introduction"
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
                  body: "",
                  postDate: "",
                  eventDate: new Date(),
                  startTime: "",
                  endTime: "",
                  venue: "",
                  language: "",
                  fees: "",
                  speaker: "",
                  speakerBlurb: ""
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
        this.event.postDate = new Date();
        await api.createEvent(this.event);
        this.$router.push('/events');
      },
      onReset() {
        // Reset our form values
        this.event.title = ''
        this.event.eventDate = ''
        this.event.body = ''
        this.event.startTime = ''
        this.event.endTime = ''
        this.event.venue = ''
        this.event.language = ''
        this.event.fees = ''
        this.event.speaker = ''
        this.event.speakerBlurb = ''
      }
    }
  }
</script>

<style>
  b-card-group deck {
    padding: 10px 10px;
  }
</style>