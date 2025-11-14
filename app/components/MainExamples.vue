<script setup lang="ts">
import type { ExamplesCollectionItem } from '@nuxt/content';

const props = defineProps<{
  examples: Record<string, Record<string, ExamplesCollectionItem>>;
}>();

const examplesNames = computed(() => Object.keys(props.examples));
const items = computed(() =>
  examplesNames.value.map((key) => ({
    label: `${key[0]!.toUpperCase()}${key.slice(1)}`,
    value: key.toLowerCase(),
    slot: key.toLowerCase(),
  }))
);
const activeItem = ref(examplesNames.value[0]);
const hasMultipleExamples = computed(() => items.value?.length > 1);

const values = (itemName: string) =>
  activeItem.value
    ? [
        props.examples?.[itemName]?.['react.19.functional']?.body || null,
        props.examples?.[itemName]?.['vue.3_5.composition']?.body || null,
      ]
    : [];
</script>

<template>
  <div class="mb-12">
    <UTabs v-if="hasMultipleExamples" v-model="activeItem" :items variant="link">
      <template v-for="exampleItem of items" :key="exampleItem.value" #[exampleItem.value]="{ item }">
        <ComparingExamples :values="values(item.value)" />
      </template>
    </UTabs>
    <ComparingExamples v-else-if="items[0]?.value" :values="values(items[0]?.value)" />
  </div>
</template>
