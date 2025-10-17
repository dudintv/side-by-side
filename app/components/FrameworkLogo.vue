<script setup lang="ts">
import type { FrameworkName } from '~/types';

const props = defineProps<{ name: FrameworkName; size?: number }>();
const colorMode = useColorMode();
const normalizedColorMode = computed(() =>
  colorMode.value === 'system' ? 'dark' : colorMode.value
);
const src = computed(
  () => `/logos/${props.name}.logo.${normalizedColorMode.value}.svg`
);
const alt = computed(() => `Logo of ${props.name}`);
</script>

<template>
  <img :src :alt :width="size || 30" />
</template>
