<!-- /about -->

<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid autem blanditiis, deserunt dolorem doloribus eius, facere iste, libero molestiae nobis odio omnis provident quam quod ut voluptate! Quasi, tempore!</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">




/******** Type & Interface **********/


/******** Instance **********/

definePageMeta({
  layout: 'about',
})

/******** Reactive Instance **********/

/* useAsyncData() and $fetch() are auto-imported */
const count = ref(1)
const double = computed(() => count.value * 2)
// const { data } = await useFetch('/api/api?name=mario', {
//   method: 'post',
//   body: { age: 30 }
// })

const { data } = await useFetch('/api/api')

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
