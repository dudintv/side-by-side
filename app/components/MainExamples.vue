<script setup lang="ts">
import type { ExamplesCollectionItem } from '@nuxt/content';

const props = defineProps<{
  examples: Record<string, Record<string, ExamplesCollectionItem>>;
}>();

const examplesNames = computed(() => Object.keys(props.examples));
const items = computed(() =>
  examplesNames.value.map((key) => ({
    label: key,
  }))
);
const activeItem = ref(examplesNames.value[0]);
const values = computed(() =>
  activeItem.value
    ? [
        props.examples?.[activeItem.value]?.['react.19.functional']?.body || null,
        props.examples?.[activeItem.value]?.['vue.3_5.composition']?.body || null,
      ]
    : []
);
</script>

<template>
  <div class="mb-12">
    <div class="flex gap-4 md:gap-6 lg:gap-8 pt-8 pb-4">
      <h3>Examples</h3>
      <UTabs v-model="activeItem" :items variant="link" />
    </div>
    <ComparingExamples :values />
  </div>
</template>
