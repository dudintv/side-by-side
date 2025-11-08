```jsx /never/
type Props =
  | {
      variant: 'text';
      icon?: never;
      label: string;
    }
  | {
      variant: 'icon';
      icon: React.ReactNode;
      label?: never;
    };

export default function Button({ variant, label, icon }: Props) {
  <button>{variant === 'text' ? label : icon}</button>;
}
```

Usage:

```ts
// ✅ <Button variant="text" label="Click me" />
// ✅ <Button variant="icon" icon={<Icon />} />
// ❌ <Button variant="text" icon={<Icon />} /> // TypeScript error!
// ❌ <Button variant="icon" label="Click me" /> // TypeScript error!
```
