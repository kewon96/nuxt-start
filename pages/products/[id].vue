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

  if(Object.keys(product.value).length === 0) {
    throw createError({ statusCode: 404, statusMessage: 'Product is not Found', fatal: true })
  }
})

definePageMeta({
  layout: 'products',
})

/******** Functions **********/


</script>

<style scoped>

</style>