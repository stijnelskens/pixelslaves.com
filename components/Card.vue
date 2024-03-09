<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <UCard v-motion-slide-visible-once-bottom :delay="200">
    <template #header>
      <h2 class="text-base font-bold sm:text-lg">{{ player.name }}</h2>
      <span class="text-sm">{{
        player.categories.map((category) => category.title).join(", ")
      }}</span>
    </template>
    <template
      #footer
      v-if="
        player.twitch ||
        player.instagram ||
        player.tiktok ||
        player.youtube ||
        player.twitter
      "
    >
      <ul class="flex items-center gap-2.5">
        <li v-if="player.twitch">
          <a
            :href="player.twitch"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:twitch" />
          </a>
        </li>
        <li v-if="player.instagram">
          <a
            :href="player.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:instagram" />
          </a>
        </li>
        <li v-if="player.tiktok">
          <a
            :href="player.tiktok"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
            ><Icon name="fa6-brands:tiktok"
          /></a>
        </li>
        <li v-if="player.youtube">
          <a
            :href="player.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:youtube" />
          </a>
        </li>
        <li v-if="player.twitter">
          <a
            :href="player.twitter"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:x-twitter" />
          </a>
        </li>
      </ul>
    </template>
  </UCard>
</template>
