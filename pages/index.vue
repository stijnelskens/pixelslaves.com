<script setup lang="ts">
import { type Post } from "~/types/Post";

const query = groq`*[_type == "player"] | order(_createdAt desc) {
    ...,
    categories[]->
  }`;
const { data: posts } = await useSanityQuery<Post[]>(query);
</script>

<template>
  <div class="container px-4 mx-auto">
    <section class="grid grid-cols-2 gap-8 md:grid-cols-4">
      <Card v-if="posts" v-for="post in posts" :key="post._id" :post="post" />
      <!-- <Welcome /> -->
    </section>
  </div>
</template>
