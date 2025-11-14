Vue caches computed by default. [Vue docs](https://vuejs.org/guide/essentials/computed.html#computed-caching-vs-methods)

```vue /filtered/ /products/ /computed/
<script setup>
const { products } = defineProps<{
  products: { id: number; price: number }[]
}>()

const minPrice = ref(100)

const filtered = computed(() => { // [!code highlight]
  return products
    .filter(p => p.price >= minPrice.value)
    .sort((a, b) => a.price - b.price)
})
</script>

<template>
  <div>
    <input type="number" v-model.number="minPrice" />
    <p>Showing {{ filtered.length }} items</p>
  </div>
</template>
```
