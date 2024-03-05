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
  <section class="py-10">
    <div class="container px-4 mx-auto space-y-8">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 197.15 210.53"
        class="w-20"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              fill="#323232"
              d="M104.66,199.93v0c-2.18,3.78-4.59,7.92-6.12,10.58-.13-.28-2.39-4.18-2.39-4.18-3.57-6.2-8.18-14.2-13.39-23.27-2.85-5-5.88-10.26-9-15.73C68.37,158,62.67,148.1,57,138.2c-10.67-18.58-21.32-37.13-29.66-51.63L18.28,70.83c-.56-1-1.11-1.91-1.61-2.8l18.4,8.5Z"
            />
            <polygon
              fill="#323232"
              points="163.72 76.53 35.07 76.53 16.67 68.03 158.64 68.03 163.72 76.53"
            />
            <path
              fill="#323232"
              d="M197.15,39.06C191.21,50,185.21,60.49,179,71.16q-3.59,6.21-7.31,12.56l-.79,1.33-1,1.78-6.15-10.3,14.14-26.82Z"
            />
            <path
              d="M169.84,86.85H49.32l3.92,6.83,3.57,6.18c5.2,9,27.5,47.57,41.54,71.85,2.83,4.89,5.32,9.19,7.28,12.56s3.35,5.8,4,7c0,0-2.35,4.06-5,8.69L35.07,76.53H163.71l6.15,10.3Z"
            />
            <path
              d="M177.85,49.71,163.71,76.53,158.64,68l.45-.71.93-1.41c.46-.73.93-1.4,1.33-2.09,0-.08.1-.16.14-.24.43-.74.85-1.49,1.34-2.38l1.91-3.54h-154L8.57,54,0,39.06,20.89,49.71Z"
            />
            <polygon
              fill="#323232"
              points="163.72 97.38 148.99 106.79 85.83 106.79 67.32 97.38 163.72 97.38"
            />
            <path
              fill="#323232"
              d="M114.38,162.74,115.59,181l-5.84-10.1-5.07-8.77c1.9-3.25,9.64-16.72,9.64-16.72H95l-27.64-48,18.51,9.41,13.81,28,29.89.16Z"
            />
            <path
              d="M163.71,97.38l-.66,1.17-.24.38-9.72,17H100l6,10.18h41.28q-10.69,18.45-21.42,37.13l-2.38,4.12L115.59,181l-1.21-18.22L129.53,135l-29.89-.16-13.81-28H149Z"
            />
            <polygon
              fill="#323232"
              points="197.15 39.06 177.85 49.71 20.89 49.71 0 39.06 197.15 39.06"
            />
            <path
              fill="#ff2d2d"
              d="M75.14,187.45s-4.73-8.3-7.73-13.49A82.8,82.8,0,0,1,16.48,85.28L9,72.37,5.93,66.91a97.35,97.35,0,0,0,72,125.41C77,190.74,76.11,189.11,75.14,187.45Zm116-119.68q-2.19,3.77-4.53,7.81c-2,3.49-4.08,7-6.19,10.64a82.68,82.68,0,0,1-50.51,87.51L119.81,191.2v0l-.58,1A97.35,97.35,0,0,0,191.09,67.77ZM98.37,0A97,97,0,0,0,27.83,30.29H49.77a82.74,82.74,0,0,1,97.18,0h22A97,97,0,0,0,98.37,0Z"
            />
          </g>
        </g>
      </svg>
      <h1 class="sr-only">Crew</h1>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
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
