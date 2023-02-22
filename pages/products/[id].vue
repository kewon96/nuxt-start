<!-- /products/:id -->
<template>
  <div>
    <p>Product details for {{ id }}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laboriosam?</p>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

const { id } = useRoute().params

/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>

</style>