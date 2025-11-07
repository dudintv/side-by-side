```jsx /count/
export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}> +1 </button>
      <button onClick={reset}> reset </button>
    </div>
  );
}
```
