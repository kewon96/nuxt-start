<!-- /products/hello -->

<template>
  <div>
    <p>Products</p>

<!--    <div v-if="isLoading">isLoading....</div>-->

    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

// fetch the products
const store = useProduct();
const { fetchProducts } = store;

/******** Reactive Instance **********/

const { products } = storeToRefs(store);

/******** Hooks **********/

onMounted(fetchProducts)

definePageMeta({
  layout: 'products',
})

useHead({
  title: 'Nuxt Dojo | Merch',
  meta: [
    { name: 'description', content: 'Nuxt 3 Merch' }
  ]
})


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