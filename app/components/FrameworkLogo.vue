<script setup lang="ts">
import type { FrameworkName } from '~/types';

const props = defineProps<{ name: FrameworkName; size?: number }>();
const colorMode = useColorMode();

const universalSrc = computed(() => `/logos/${props.name}.logo.svg`);
const coloredSrc = computed(
  () => `/logos/${props.name}.logo.${colorMode.value}.svg`
);
const src = ref('');
const alt = computed(() => `Logo of ${props.name}`);

onMounted(() => {
  src.value = coloredSrc.value;
});
function onError() {
  src.value = universalSrc.value;
}
</script>

<template>
  <img :src :alt :width="size || 30" @error="onError" />
</template>
