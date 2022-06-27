<template>
    <h1>Oups !</h1>
    <h4>The {{ resource }} you're looking for doesn't exist</h4>

    <router-link :to="{ name: 'EventList' }">Redirect back to the home page</router-link>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            required: false,
            default: 'page'
        }
    }
}
</script>