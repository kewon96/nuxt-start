<!-- /index -->

<template>
  <div>
    <h2>Home</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem blanditiis, deserunt dolorem doloribus eius, facere iste, libero molestiae nobis odio omnis provident quam quod ut voluptate! Quasi, tempore!</p>
    x: {{x}} y: {{y}}

    <Input v-model="x" />
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


const {x, y} = useMouse()


/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>
