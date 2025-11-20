`IconButton.jsx`

```jsx /IconButton/
export default function IconButton({ children }) {
  return (
    <button className="btn">
      {children || <span>👆</span>}
    </button>
  );
}
```

Usage:

```jsx /IconButton/
export default function() {
  return (
    <div>
      <IconButton />

      <IconButton>
        <span>❤️</span>
      </IconButton>
    </div>
  );
}
```