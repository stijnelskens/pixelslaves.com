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
      <h2 class="text-lg font-bold">{{ post.name }}</h2>
      <span class="text-sm">{{
        post.categories.map((category) => category.title).join(", ")
      }}</span>
    </template>
    <template
      #footer
      v-if="
        post.twitch ||
        post.instagram ||
        post.tiktok ||
        post.youtube ||
        post.twitter
      "
    >
      <ul class="flex items-center gap-2.5">
        <li v-if="post.twitch">
          <a
            :href="post.twitch"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:twitch" />
          </a>
        </li>
        <li v-if="post.instagram">
          <a
            :href="post.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:instagram" />
          </a>
        </li>
        <li v-if="post.tiktok">
          <a
            :href="post.tiktok"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
            ><Icon name="fa6-brands:tiktok"
          /></a>
        </li>
        <li v-if="post.youtube">
          <a
            :href="post.youtube"
            target="_blank"
            rel="noopener noreferrer"
            class="text-lg duration-300 ease-out transtion-color hover:text-primary"
          >
            <Icon name="fa6-brands:youtube" />
          </a>
        </li>
        <li v-if="post.twitter">
          <a
            :href="post.twitter"
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
