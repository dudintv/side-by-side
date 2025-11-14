To update a value **every re-render** use a function (instead of `computed`). Functions are not cached.

```vue /lastUpdateTime/
<script setup>
const data = ref(0);

function lastUpdateTime() { // [!code highlight]
  return new Date().toLocaleTimeString();
}
</script>

<template>
  <div>
    <p>Data: {{ data }}</p>
    <p>Last touched: {{ lastUpdateTime() }}</p>
    <button @click="value++">Update</button>
  </div>
</template>
```

Use regular functions if the computed value doesn't know the original source of the value in advance:

```vue /formatTimestamp/
<script setup>
const items = [
  { name: 'N1', updatedAt: new Date() },
  { name: 'N2', updatedAt: new Date(Date.now() - 1000) },
];

function formatTimestamp(date) { // [!code highlight]
  return date.toLocaleTimeString();
}
</script>

<template>
  <ItemList :items>
    <template #item="{ item }">
      <h5>{{ item.name }}</h5>
      <p>Updated: {{ formatTimestamp(item.updatedAt) }}</p>
    </template>
  </ItemList>
</template>
```
