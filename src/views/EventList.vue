<template>
  <div class="events">
    <h1>Events for Good</h1>

    <div v-if="$route.query !== {}">
      <div v-for="(val, ind) in $route.query"> {{ ind + " : " + val }}</div>
    </div>
    --
    <div v-show="query !== {}">
      <span v-for="(val, prop) in query">{{ prop + "=>" + val + " |" }}</span>
    </div>
    <div>
      {{ queryString }}
    </div>

    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  props: ["query"],
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => console.log(error));
  },
  computed: {
    queryString() {
      var arr = [];
      for (let p in this.query)
        arr.push(p + "=>" + this.query[p]);
      return arr.toString("-")
    }
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
