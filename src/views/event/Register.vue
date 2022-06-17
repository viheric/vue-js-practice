<template>
  <p>Register to the event</p>

  <button v-on:click="register">Register</button>
  
</template>

<script>
export default {
  props: ["event"],
  methods: {
    register() {
      console.log(this.$router.params);
      this.$router.push({
        name: 'EventDetails',
        //params: { id: this.event.id } : not needed
      })
    }
  }
};
</script>
