<script setup lang="ts">
import type { ExamplesCollectionItem } from '@nuxt/content';

const props = defineProps<{
  examples: Record<string, Record<string, ExamplesCollectionItem>>;
  topic: string;
}>();

const values = computed(() => {
  return [
    props.examples?.[props.topic]?.['react.19.functional']?.body || null,
    props.examples?.[props.topic]?.['vue.3_5.composition']?.body || null,
  ];
});
const hasValues = computed(() => values.value.every(Boolean));
</script>

<template>
  <ComparingExamples v-if="hasValues" :values />
</template>
