<script setup lang="ts">
import { type Player } from "~/types/players";
import { copy } from "../utils";

const query = groq`*[_type == "player"] | order(_createdAt desc) {
    ...,
    categories[]->
  }`;
const { data: players, pending } = await useSanityQuery<Player[]>(query);

const sortedPlayers = computed(() => {
  if (!players.value) return [];
  const copiedPlayers = copy(players.value);
  return copiedPlayers?.sort((a, b) => {
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
      <h1 class="sr-only">Players</h1>
      <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        <Card
          v-if="sortedPlayers"
          v-for="player in sortedPlayers"
          :key="player._id"
          :player="player"
        />
      </div>
    </div>
  </section>
</template>
