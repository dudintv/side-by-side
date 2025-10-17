```jsx
import React, { useState } from 'react';

export default function () {
  const [count, setCount] = useState(0);

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={reset}> reset </button>
    </div>
  );
}
```
