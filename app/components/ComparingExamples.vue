<script setup lang="ts">
import type { MarkdownRoot } from '@nuxt/content';

defineProps<{ values: (MarkdownRoot | null)[] }>();
const { currentFrameworks, currentFrameworksAmount, frameworks } = useSettings();
</script>

<template>
  <div class="mt-6 mb-12 comparing">
    <div
      class="example-root grid gap-4 md:gap-8 ml:gap-12 w-full"
      :style="`grid-template-columns: repeat(${currentFrameworksAmount}, 1fr);`"
    >
      <template v-for="(frameworkName, i) in currentFrameworks" :key="frameworkName">
        <div v-if="frameworks[frameworkName]">
          <div class="flex gap-2 opacity-75 text-xs mb-2 pl-6">
            <FrameworkLogo :name="frameworkName" :size="16" class="grayscale-50" />
            {{ frameworks[frameworkName].name }}
            {{ frameworks[frameworkName].versions[0] }},
            {{ frameworks[frameworkName].variants?.[0] }}
          </div>
          <ContentRenderer v-if="values[i]" :value="values[i]!" class="grow" />
        </div>
      </template>
    </div>
  </div>
</template>
