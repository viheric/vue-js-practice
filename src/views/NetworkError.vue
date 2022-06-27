<template>
    <h1>Uh uh !</h1>
    <h3>
        Looks like you're experiencing some network issues 
        <a href="#" v-on:click="$router.go(-1)">Click here and try again</a>
    </h3>
</template>