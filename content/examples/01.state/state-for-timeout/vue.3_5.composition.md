```vue /timeoutId/
<script setup lang="ts">
const message = ref('Waiting...');
let timeoutId: ReturnType<typeof setTimeout> | null = null; // [!code highlight]

onMounted(() => {
  timeoutId = setTimeout(() => {
    message.value = 'Timeout finished!';
  }, 1000);
});

onUnmounted(() => {
  if (timeoutId) {
    resetTimeout(timeoutId);
    timeoutId = null;
  }
});
</script>

<template>
  <div>{{ message }}</div>
</template>
```
