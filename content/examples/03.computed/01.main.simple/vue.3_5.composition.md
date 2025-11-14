```vue /userPath/ /userId/
<script setup>
const { userId } = defineProps<{ userId: string }>()

const userPath = computed(() => `/users/${userId}`)
</script>

<template>
  <a :href="userPath"> Go to user {{ userId }} </a>
</template>
```
