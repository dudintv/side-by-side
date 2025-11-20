`ChildComponent.jsx`

```jsx /children/ /ChildComponent/
export default function ChildComponent({ children }) {
  return <div className="wrapper">{children}</div>;
}
```

`ParentComponent.jsx`

```jsx /ChildComponent/
export default function ParentComponent() {
  return (
    <ChildComponent>
      <p>Content for the child component's slot.</p>
    </ChildComponent>
  );
}
```
