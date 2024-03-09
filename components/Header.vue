<script setup lang="ts">
const route = useRoute();

const isHomepage = computed(() => route.path === "/");
</script>

<template>
  <header
    class="py-8 border-t-4 border-[#ff2d2d]"
    v-motion-fade-visible-once
    :delay="400"
  >
    <div class="container px-4 mx-auto">
      <div
        class="flex items-center"
        :class="isHomepage ? 'justify-end' : 'justify-between'"
      >
        <NuxtLink
          to="/"
          class="flex items-center space-x-4"
          aria-label="Home"
          v-if="!isHomepage"
        >
          <Logo class="w-16" />
          <span class="font-semibold">PixelSlaves</span>
        </NuxtLink>
        <ThemeSelector />
      </div>
    </div>
  </header>
</template>
