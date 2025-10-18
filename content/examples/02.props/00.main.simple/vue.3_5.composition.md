```vue
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  mark: {
    type: String,
    default: '!',
  },
});
</script>

<template>
  <h1>Hello {{ props.name }}{{ props.mark }}</h1>
</template>
```

#### Using

```html
<MyComponent name="world" />
```
