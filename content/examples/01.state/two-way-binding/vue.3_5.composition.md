Vue provides `v-model` as a dedicated syntax for two-way binding. Instead of writing separate `value` prop and `@input` event listener, you write `<input v-model="count">`.

`v-model` works on form elements (input, textarea, select) and custom Vue components.

```vue /message/
<script setup lang="ts">
import { ref } from 'vue';

const message = ref('');
</script>

<template>
  <div>
    <input v-model="message" />
    <p>You typed: {{ message }}</p>
  </div>
</template>
```

When you create custom components, you can implement `v-model` support by accepting a `modelValue` prop and emitting an `update:modelValue` event.

There is possible to have [multiple `v-model`s](https://vuejs.org/guide/components/v-model#multiple-v-model-bindings).

```vue
<UserName v-model:first-name="first" v-model:last-name="last" />
```

```vue
<script setup lang="ts">
const firstName = defineModel('firstName');
const lastName = defineModel('lastName');
</script>

<template>
  <input type="text" v-model="firstName" />
  <input type="text" v-model="lastName" />
</template>
```
