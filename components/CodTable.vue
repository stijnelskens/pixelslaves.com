<script setup lang="ts">
const columns = [
  {
    key: "id",
    label: "#",
  },
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
  {
    key: "killrecord",
    label: "Kill Record",
    sortable: true,
  },
  {
    key: "wins",
    label: "Wins",
    sortable: true,
  },
  {
    key: "score",
    label: "Score / Min",
    sortable: true,
  },
];

const people = [
  {
    id: 1,
    player: "Lindsay Walton",
    kd: "Front-end Developer",
    kills: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    id: 2,
    player: "Courtney Henry",
    kd: "Designer",
    kills: "courtney.henry@example.com",
    role: "Admin",
  },
  {
    id: 3,
    player: "Tom Cook",
    kd: "Director of Product",
    kills: "tom.cook@example.com",
    role: "Member",
  },
  {
    id: 4,
    player: "Whitney Francis",
    kd: "Copywriter",
    kills: "whitney.francis@example.com",
    role: "Admin",
  },
  {
    id: 5,
    player: "Leonard Krasner",
    kd: "Senior Designer",
    kills: "leonard.krasner@example.com",
    role: "Owner",
  },
  {
    id: 6,
    player: "Floyd Miles",
    kd: "Principal Designer",
    kills: "floyd.miles@example.com",
    role: "Member",
  },
];
</script>

<template>
  <UTable :columns="columns" :rows="people" />
</template>
