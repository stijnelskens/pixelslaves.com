<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="py-6 border-t border-gray-200 dark:border-gray-800">
    <div class="container px-4 mx-auto">
      <span>© {{ year }} - PixelSlaves.com</span>
    </div>
  </footer>
</template>
