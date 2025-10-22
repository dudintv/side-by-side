```vue
// [!code word:year]
<script setup lang="ts">
const year = new Date().getFullYear(); // [!code highlight]
</script>

<template>
  <div>{{ year }}</div>
</template>
```
