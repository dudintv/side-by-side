### Required

Add “required: true” as a prop property.

### Optional

By default OR “required: false”.

```js
const props = defineProps({
  start: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
  description: {
    type: [String, null],
    required: false,
  },
});
```

```ts
const props = defineProps({
  start: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
  description: {
    type: [String, null],
    required: false,
  },
});
```
