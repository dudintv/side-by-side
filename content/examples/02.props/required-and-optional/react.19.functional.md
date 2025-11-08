- **Optional** — by default
- **Required** — add “isRequired” to the field in “propTypes”

```js /?:/
export default function MyComponent({
  start,
  disabled = false,
  description,
}: {
  start: number;
  disabled?: boolean;
  description?: string | null;
}) {
  return (...)
}
```
