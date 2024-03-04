<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-bold">{{ post.name }}</h3>
      <span class="text-sm">{{
        post.categories.map((category) => category.title).join(", ")
      }}</span>
    </template>
    <template #footer>
      <ul
        class="flex items-center gap-2"
        v-if="post.twitch || post.instagram || post.tiktok"
      >
        <li v-if="post.twitch">
          <a :href="post.twitch" target="_blank" rel="noopener noreferrer">T</a>
        </li>
        <li v-if="post.instagram">
          <a :href="post.instagram" target="_blank" rel="noopener noreferrer"
            >I</a
          >
        </li>
        <li v-if="post.tiktok">
          <a :href="post.tiktok" target="_blank" rel="noopener noreferrer"
            >TI</a
          >
        </li>
        <li v-if="post.twitter">
          <a :href="post.twitter" target="_blank" rel="noopener noreferrer"
            >X</a
          >
        </li>
      </ul>
    </template>
  </UCard>
</template>
