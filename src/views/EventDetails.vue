<template>
  <div v-if="event" class="event-details">
    <h1>{{ event.title }}</h1>
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <p>{{ event.description }}</p>
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
    EventService.getEvent(this.id)
      .then((response) => (this.event = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
