<!-- /products/:id -->
<template>
  <div>
    <p>Product details for {{ id }} / {{ product.title }}</p>
    <p>{{ product.price }}</p>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`

// fetch the product
const { data: product } = await useFetch(uri)
console.log(product)

/******** Reactive Instance **********/


/******** Hooks **********/

definePageMeta({
  layout: 'products',
})

/******** Functions **********/


</script>

<style scoped>

</style>