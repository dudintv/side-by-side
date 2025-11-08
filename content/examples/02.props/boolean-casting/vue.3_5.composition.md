[Vue docs (Boolean Casting)](https://vuejs.org/guide/components/props#boolean-casting)

```vue /disabled/ /size/
<script setup lang="ts">
const { disabled, size } = defineProps<{
  disabled?: boolean;
  size: boolean | string;
}>();
</script>
```

Usage

```html /disabled/ /size/
<Button />                    <!-- disabled = false -->
<Button :disabled="false" />  <!-- disabled = false -->
<Button disabled />           <!-- disabled = true -->
<Button size />               <!-- size = true (casting) -->
<Button size="large" />       <!-- size = "large" (string) -->
```

The `Boolean` absent props will be cast to `false`.

An absent optional prop other than Boolean will have `undefined` value.
