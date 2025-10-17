```jsx
import React, { useState } from 'react';

export default function () {
  const [message, setMessage] = useState('');

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>The message is: {message}</p>
    </div>
  );
}
```
