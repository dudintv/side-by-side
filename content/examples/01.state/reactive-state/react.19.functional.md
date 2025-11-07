React requires you to call the setter function: `setValue(newValue)`. This function call triggers an asynchronous re-render of the component. You must pass a new value rather than mutating the existing one. Updating state doesn't immediately change the variable — you'll still see the old value until the next render completes.

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
