<script setup lang="ts">
import type { FrameworkName, FrameworkMeta } from '~/types';
const { name, isSmall = false } = defineProps<{ name: FrameworkName; isSmall?: boolean }>();

const { frameworks } = useSettings();
const framework = computed<FrameworkMeta>(() => frameworks.value[name]);
const displayName = computed(() => framework.value.name);
const version = computed(() => framework.value.versions[0]);
const variant = computed(() => framework.value.variants?.[0] || null);
</script>

<template>
  <div class="flex items-center transition-[gap]" :class="[isSmall ? 'gap-2' : 'gap-2 sm:gap-4']">
    <FrameworkLogo :name :size="isSmall ? 25 : 30" />
    <div class="flex items-baseline max-lg:flex-col" :class="[isSmall ? 'gap-0.5' : 'gap-1 lg:gap-2']">
      <span class="shrink-0 text-lg font-semibold leading-none"> {{ displayName }} {{ version }} </span>
      <span v-if="variant" class="text-xs md:text-sm lg:text-base font-medium leading-none shrink-0 opacity-60">
        {{ variant }}
      </span>
    </div>
  </div>
</template>
