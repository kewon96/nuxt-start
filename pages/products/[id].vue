<!-- /products/:id -->
<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

const store = useProduct();
const { product } = storeToRefs(store);
const { id } = useRoute().params as { id: string }

/******** Reactive Instance **********/


/******** Hooks **********/

onMounted(() => {
  store.fetchProduct(id)
})

definePageMeta({
  layout: 'products',
})

/******** Functions **********/


</script>

<style scoped>

</style>