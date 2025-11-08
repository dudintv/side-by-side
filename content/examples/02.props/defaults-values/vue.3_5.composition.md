```vue /= 'Hello'/ /= false/ / name: 'Guest' /
<script setup lang="ts">
const {
  greeting = 'Hello',
  isAdmin = false,
  user = () => ({ name: 'Guest' }),
} = defineProps<{
  greeting?: string;
  isAdmin?: boolean;
  user?: { name: string };
}>();
</script>

<template>
  <div>
    <p>{{ greeting }}</p>
    <p>Admin: {{ isAdmin ? 'Yes' : 'No' }}</p>
    <p>User: {{ user.name }}</p>
  </div>
</template>
```
