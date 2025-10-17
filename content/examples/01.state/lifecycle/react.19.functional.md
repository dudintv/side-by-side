```jsx
import React, { useState, useEffect } from 'react';

export default function () {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  // Empty dependency array ensures
  // this effect runs only on mount and unmount

  return <div>{seconds}</div>;
}
```
