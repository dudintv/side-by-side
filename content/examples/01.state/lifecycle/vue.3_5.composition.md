```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const seconds = ref(new Date().getSeconds());
let intervalId: number | null = null;

onMounted(() => {
  intervalId = setInterval(() => {
    seconds.value = new Date().getSeconds();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
  intervalId = null;
});
</script>

<template>
  <div>{{ seconds }}</div>
</template>
```
