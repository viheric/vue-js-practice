<template>
    <h3>Oups! Something went wrong !</h3>
    <p>{{ error }}</p>
</template>

<script>
export default {
    props: ['error'],
}
</script>