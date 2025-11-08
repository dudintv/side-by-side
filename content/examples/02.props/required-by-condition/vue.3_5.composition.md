```vue /never/
<script setup lang="ts">
type Props =
  | {
      variant: 'text';
      icon?: never;
      label: string;
    }
  | {
      variant: 'icon';
      icon: any;
      label?: never;
    };

const { variant, label, icon } = defineProps<Props>();
</script>

<template>
  <button>
    {{ variant === 'text' ? label : icon }}
  </button>
</template>
```

Watch ["Conditional Properties in Vue.js" on YouTube](https://www.youtube.com/watch?v=vyD5pYOa5mY)
