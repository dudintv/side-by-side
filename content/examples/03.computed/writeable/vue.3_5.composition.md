```vue /isDarkMode/
<script setup>
import { ref, computed } from 'vue';
const userPreferences = ref({
  theme: 'light', // default theme
});

const isDarkMode = computed({
  get() {
    return userPreferences.value.theme === 'dark';
  },
  set(value) {
    userPreferences.value.theme = value ? 'dark' : 'light';
  },
});
</script>

<template>
  <div>
    <label>
      <input type="checkbox" v-model="isDarkMode" />
      Enable Dark Mode
      </label>
    <p>Theme: {{ userPreferences.theme }}</p>
  </div>
</template>
```
