`ref()` uses a `.value` property to change the value of the state. `ref()` is deep reactivity by default.

Vue automatically unwraps refs — so, you can use `{{ count }}` instead of `{{ count.value }}` in `<template>`

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
