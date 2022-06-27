<template>
  <p>Register to the event</p>

  <button v-on:click="register">Register</button>

</template>

<script>
export default {
  props: ["event"],
  inject: ['GStore'],
  methods: {
    register() {
      //
      //Make API call to register the event
      this.GStore.flashMessage = "You are successfully registred for " + this.event.title

      setTimeout(() => {
        this.GStore.flashMessage = ""
      }, 3000)

      this.$router.push({
        name: 'EventDetails',
        //params: { id: this.event.id } : not needed
      })
    }
  }
};
</script>
