<template>
  <div>
    <h1>Create Event</h1>
    <div>
      <div>
        <b-form @submit="onSubmit" @reset="onReset">
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

          <!-- <b-form-group
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
          </b-form-group> -->

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
                postDate: "",
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