Wrap with `useMemo` to cache computed value to avoid recompute the value if the source variables are not changed. [React docs](https://react.dev/reference/react/useMemo)

```jsx /filtered/ /products/ /useMemo/
export default function ProductFilter({ products }: {
  id: number
  price: number
}[]) {
  const [minPrice, setMinPrice] = useState(100)

  const filtered = useMemo(() => {  // [!code highlight]
    return products
      .filter(p => p.price >= minPrice)
      .sort((a, b) => a.price - b.price)
  }, [products, minPrice])

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <p>Showing {filtered.length} items</p>
    </div>
  )
}
```
