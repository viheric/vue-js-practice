<template>
  <p>Edit the event</p>
</template>

<script>
export default {
  props: ["event"],
  data: function () {
    return {
      unsavedChanges: true,
    }
  },
  //Vue 2 way
  /*beforeRouteLeave(routeTo, routeFrom, next) {
    if (this.unsavedChanges) {
      const answer = window.confirm('Are sure you want to leave this page ?')
      if (answer) {
        next()
      } else {
        next(false)
      }
    } else
      next()
  }*/
  //Using Vue 3 to implement the above code
  beforeRouteLeave() {
    //console.log("beforeRouteLeave with Vue 3");
    if (this.unsavedChanges) {
      /*const answer = window.confirm('Are sure you want to leave this page ?')
      if (!answer) {
        return false
      } */
      return window.confirm('Are sure you want to leave this page ?')
      // return {name:'EventList'} : can return a route
    }
  }
};
</script>
