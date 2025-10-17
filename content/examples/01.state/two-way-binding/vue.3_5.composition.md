```vue
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
</script>

<template>
  <div>
    <input v-model="message" />
    <p>The message is: {{ message }}</p>
  </div>
</template>
```
