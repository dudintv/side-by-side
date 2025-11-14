```jsx /filtered/ /sortedAndFiltered/
export default function ProductFilter({ products }: Product {
  id: number;
  price: number;
}[]) {
  const [minPrice, setMinPrice] = useState(100);

  const filtered = useMemo(() => {
    return products.filter(p => p.price >= minPrice);
  }, [products, minPrice]);

  const sortedAndFiltered = useMemo(() => {
    return [...filtered].sort((a, b) => a.price - b.price);
  }, [filtered]);

  return (
    <div>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <p>Showing {sortedAndFiltered.length} products</p>
    </div>
  );
}
```
