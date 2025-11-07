You store the input value in state using `useState()`. You set the input's value attribute to this state value. You add an onChange handler that captures the new value and updates state via `setState()`. 

The cycle: input changes → `onChange` fires → state updates → component re-renders → input displays new value.

```jsx /message/ /setMessage/
import React, { useState } from 'react';

export default function () {
  const [message, setMessage] = useState('');

  return (
    <div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>You typed: {message}</p>
    </div>
  );
}
```

You can add validation, transformation, or formatting in the `onChange` handler before updating state.

React also supports uncontrolled components using `useRef()`, where the DOM element maintains its own value and React doesn't control it. This approach has no _two-way binding_ — React only reads the value when you explicitly call the ref.

```jsx /messageRef/
export default function () {
  // useRef is used because it's not rendered
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    messageRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
```