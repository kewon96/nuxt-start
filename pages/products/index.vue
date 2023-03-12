<!-- /products/hello -->

<template>
  <div>
    <p>Products</p>

    <div v-if="isLoading">isLoading....</div>

    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/

// fetch the products
// const { data: products } = await useFetch(`https://fakestoreapi.com/products`);
const store = useProduct();
const { products, isLoading } = storeToRefs(store);
const { fetchProduct } = store;

/******** Reactive Instance **********/

onMounted(fetchProduct)


/******** Hooks **********/


definePageMeta({
  layout: 'products',
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