<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/products">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>

    <!-- ooutput the page content -->
    <div>
      <slot />
    </div>

    <footer>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products/123">Products</NuxtLink></li>
      </ul>
    </footer>
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

</style>