<template>
  <p>
    <span>@ {{ event.time }} on {{ event.date }}</span>
    {{ event.description }}
  </p>
</template>

<script>
export default {
  props: ["event"],
};
</script>
