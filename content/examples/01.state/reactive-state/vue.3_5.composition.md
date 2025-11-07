```vue /count/
<script setup lang="ts">
const count = ref(0);

function reset() {
  count.value = 0;
}
</script>

<template>
  <div>{{ count }}</div>
  <button @click="count += 1">+1</button>
  <button @click="reset()">reset</button>
</template>
```
