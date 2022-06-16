<template>
  <div v-if="event" class="event-details">
    <h1>{{ event.title }}</h1>

    <div>
      <router-link :to="{ name: 'EventDetails' }">Details</router-link> |
      <router-link :to="{ name: 'EventRegister' }">Register</router-link> |
      <router-link :to="{ name: 'EventEdit' }">Edit</router-link>
    </div>

    <p>Edit the event</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
  //props: [{ id: { type: String, required: true } }],
  props: ["id"],
  data() {
    return {
      event: null,
    };
  },
  created() {
    EventService.getEvent(2)
      .then((response) => (this.event = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
