```vue
<script setup lang="ts">
import { ref } from 'vue';

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
