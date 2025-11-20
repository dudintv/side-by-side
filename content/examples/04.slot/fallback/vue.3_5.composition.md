`IconButton.vue`

```vue
<template>
  <button class="btn">
    <slot>
      <span>👆</span>
    </slot>
  </button>
</template>
```

Usage:

```jsx /IconButton/
<template>
  <div>
    <IconButton />

    <IconButton>
      <span>❤️</span>
    </IconButton>
  </div>
</template>
```
