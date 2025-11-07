```jsx /timeoutId/

export default function TimeoutComponent(): React.FC {
  const [message, setMessage] = useState('Waiting...');

  useEffect(() => {
    const timeoutId = setTimeout(() => { // [!code highlight]
      setMessage('Timeout finished!');
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>{message}</div>;
};
```
