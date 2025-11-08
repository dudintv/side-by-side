- **Optional** — by default OR “required: false”
- **Required** — add “required: true” as a prop property

```ts /?:/
const {
  start,
  disabled = false,
  description,
} = defineProps<{
  start: number;
  disabled?: boolean;
  description?: string | null;
}>();
```

The `Boolean` absent props will be cast to `false`.
