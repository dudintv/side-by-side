```vue /title/ /isPublished/ /publishedAt/
<script setup lang="ts">
import { defineProps } from 'vue';

const { title, publishedAt, isPublished } = defineProps<{
  title: string;
  isPublished?: boolean;
  publishedAt?: Date;
}>();
</script>

<template>
  <h1>{{ title }}{{ !isPublished && '(draft)' }}</h1>
  <span v-if="publishedAt">{{ publishedAt }}</span>
</template>
```

#### Using

```jsx /title/ /isPublished/ /publishedAt/
<ArticleCard
  title="Vue"
  :publishedAt="new Date()"
  isPublished
/>
```
