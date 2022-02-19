<script setup> 
import Nav from "./components/Nav.vue";
import index from "./pages/index.vue";
</script>

<template>
  <Nav />
  <div class="container mx-auto">
   <router-view />
  </div>
</template>

