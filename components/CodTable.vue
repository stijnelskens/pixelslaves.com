<script setup lang="ts">
const columns = [
  // {
  //   key: "id",
  //   label: "#",
  // },
  {
    key: "player",
    label: "Player",
    sortable: true,
  },
  {
    key: "kd",
    label: "KD Ratio",
    sortable: true,
  },
  {
    key: "kills",
    label: "Kills",
    sortable: true,
    direction: "desc" as const,
  },
  // {
  //   key: "killrecord",
  //   label: "Kill Record",
  //   sortable: true,
  // },
  {
    key: "wins",
    label: "Wins",
    sortable: true,
  },
  // {
  //   key: "score",
  //   label: "Score / Min",
  //   sortable: true,
  // },
];

const people = [
  {
    id: 1,
    player: "Antonnio",
    kd: 0.5,
    kills: 450,
    wins: 64,
  },
  {
    id: 2,
    player: "chevywood",
    kd: 1.42,
    kills: 3449,
    wins: 121,
  },
  {
    id: 3,
    player: "Dj Puppy",
    kd: 1.48,
    kills: 2000,
    wins: 40,
  },
  {
    id: 4,
    player: "Step Bro",
    kd: 2.28,
    kills: 4290,
    wins: 152,
  },
];
</script>

<template>
  <UTable :columns="columns" :rows="people" />
</template>
