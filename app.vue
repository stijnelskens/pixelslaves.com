<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "min-h-screen flex flex-col",
  },
});
</script>

<template>
  <Header />
  <main class="h-full">
    <NuxtPage />
  </main>
  <Footer />
</template>

<style>
:root {
  font-family: "Inter", sans-serif;
}
</style>
