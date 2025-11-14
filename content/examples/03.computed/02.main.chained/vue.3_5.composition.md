```vue /filtered/ /sortedAndFiltered/
<script setup>
const { products } = defineProps<{
  products: { id: number; price: number }[]
}>()

const minPrice = ref(100);

const filtered = computed(() => {
  return products.filter(p => p.price >= minPrice.value);
})

const sortedAndFiltered = computed(() => {
  return filtered.sort((a, b) => a.price - b.price);
})
</script>

<template>
  <div>
    <input type="number" v-model.number="minPrice" />
    <p>Showing {{ sortedAndFiltered.length }} products</p>
  </div>
</template>
```
