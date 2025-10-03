import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
    topics: defineCollection({
      type: 'page',
      source: 'topics/*.md',
    }),
  },
});
