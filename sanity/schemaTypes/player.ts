import {defineType} from 'sanity'

export default defineType({
  name: 'player',
  title: 'Player',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'categories'}}],
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
    },
    {
      name: 'twitch',
      title: 'Twitch',
      type: 'url',
    },
    {
      name: 'youtube',
      title: 'Youtube',
      type: 'url',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'tiktok',
      title: 'Tiktok',
      type: 'url',
    },
    // {
    //   name: 'highlighted',
    //   title: 'Highlighted',
    //   type: 'boolean',
    //   initialValue: false,
    // },
  ],
})
