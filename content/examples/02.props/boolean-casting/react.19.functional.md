```jsx /disabled/
interface Props {
  disabled?: boolean
}
```

Usage

```html /disabled/
<Button disabled />          <!-- disabled = true -->
<Button disabled={false} />  <!-- disabled = false -->
<Button disabled={true} />   <!-- disabled = true -->
<Button />                   <!-- disabled = undefined -->
```

```jsx /disabled/
// ❌ Wrong - won't coerce
<Button disabled="true" /> // (string, not boolean!)

// ✅ Correct
<Button disabled={true} /> // boolean
```
