<script setup lang="ts">
import type { ExamplesCollectionItem } from '@nuxt/content';

const props = defineProps<{
  examples: Record<string, Record<string, ExamplesCollectionItem>>;
}>();

const { currentFrameworks, frameworks } = useSettings();

const values = computed(() => [
  props.examples?.simple?.['react.19.functional']?.body || null,
  props.examples?.simple?.['vue.3_5.composition']?.body || null,
]);
</script>

<template>
  <div class="flex gap-4 md:gap-8 ml:gap-12 w-full">
    <template v-for="i in currentFrameworks.length" :key="i">
      <div v-if="currentFrameworks[i - 1]">
        <div class="flex gap-2 opacity-75 text-xs mb-2">
          <FrameworkLogo
            :name="currentFrameworks[i - 1]!"
            :size="16"
            class="grayscale-50"
          />
          {{ frameworks[currentFrameworks[i - 1]!].name }}
          {{ frameworks[currentFrameworks[i - 1]!].versions[0] }},
          {{ frameworks[currentFrameworks[i - 1]!].variants?.[0] }}
        </div>
        <ContentRenderer
          v-if="values[i - 1]"
          :value="values[i - 1]!"
          class="grow"
        />
      </div>
    </template>
  </div>
</template>
