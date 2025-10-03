<script setup lang="ts">
import type { FrameworkName, FrameworkMeta } from '~/types';
const { name } = defineProps<{ name: FrameworkName }>();

const { frameworks } = useSettings();
const framework = computed<FrameworkMeta>(() => frameworks.value[name]);
const displayName = computed(() => framework.value.name);
const version = computed(() => framework.value.versions[0]);
const variant = computed(() => framework.value.variants?.[0] || null);
</script>

<template>
  <div class="flex items-center gap-4 max-sm:gap-2">
    <FrameworkLogo :name />
    <div class="flex items-baseline gap-2 max-lg:gap-1 max-lg:flex-col">
      <span class="shrink-0 text-lg font-semibold leading-none">
        {{ displayName }} {{ version }}
      </span>
      <span
        v-if="variant"
        class="text-base max-lg:text-sm font-medium leading-none shrink-0 opacity-60"
      >
        {{ variant }}
      </span>
    </div>
  </div>
</template>
