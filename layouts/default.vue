<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products/123">Products</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <!-- output the page content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

/******** Type & Interface **********/


/******** Instance **********/


/******** Reactive Instance **********/


/******** Hooks **********/


/******** Functions **********/


</script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>