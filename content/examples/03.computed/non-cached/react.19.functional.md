The regular `const` variable can be as a computed value with updating the value each re-render.

```jsx /lastUpdateTime/
export default function DataComponent() {
  const [data, setData] = useState(0);

  const lastUpdateTime = new Date().toLocaleTimeString(); // [!code highlight]

  return (
    <div>
      <p>Data: {data}</p>
      <p>Last touched: {lastUpdateTime()}</p>
      <button onClick={() => setData(data + 1)}>Update</button>
    </div>
  );
}
```

Use regular functions if the computed value doesn't know the original source of the value in advance:

```jsx /formatTimestamp/
export default function ParentComponent() {
  const items = [
    { name: 'N1', updatedAt: new Date() },
    { name: 'N2', updatedAt: new Date(Date.now() - 1000) },
  ];

  const formatTimestamp = (date) => date.toLocaleTimeString(); // [!code highlight]

  return (
    <ItemList items={items}>
      {items.map((item) => (
        <div key={item.id}>
          <h5>{item.name}</h5>
          <p>Updated: {formatTimestamp(item.updatedAt)}</p>
        </div>
      ))}
    </ItemList>
  );
}
```
