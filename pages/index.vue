<script setup lang="ts">
import { type Post } from "~/types/Post";

const query = groq`*[_type == "player"] | order(_createdAt desc) {
    ...,
    categories[]->
  }`;
const { data: posts } = await useSanityQuery<Post[]>(query);

const sortedPosts = computed(() => {
  if (!posts) return [];
  // Sort the array with the items with social media first in the array (post.twitter, twitch, etc..) sort the items with categories.title === Retired last
  return posts.value?.sort((a, b) => {
    if (a.twitch && !b.twitch) return -1;
    if (a.instagram && !b.instagram) return -1;
    if (a.twitter && !b.twitter) return -1;
    if (a.youtube && !b.youtube) return -1;
    if (a.categories.find((category) => category.title === "Retired")) return 1;
    if (b.categories.find((category) => category.title === "Retired"))
      return -1;
    return 0;
  });
});

definePageMeta({
  title: "Crew",
});
</script>

<template>
  <section class="pb-10">
    <div class="container px-4 mx-auto">
      <h1 class="sr-only">Crew</h1>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <Card
          v-if="sortedPosts"
          v-for="post in sortedPosts"
          :key="post._id"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>
