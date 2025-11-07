<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>

<template>
  <a :href="href" target="_blank" rel="noopener">
    <slot />
  </a>
</template>
