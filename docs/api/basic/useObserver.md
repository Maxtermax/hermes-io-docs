---
sidebar_position: 4
---

# useObserver
The `useObserver` hook integrates the `Observer` and `Context`, this can be used to subscribe listeners and receive `notifications` under certain constraints provided by the `notification context`.

### Parameter 

| key      | value             | required | description                                                                                                                                                     |
|----------|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| observer | Observer instance | true     | Instance of the class Observer                                                                                                                               |
| listener | Function          | true     | Callback function                                                                                                                                   |
| contexts | context[]    | true     | An array of Context class instances. If a notification arrives that is not associated with any of the contexts in the array, the listener callback will not be triggered. |

### Example

```javascript
import { useObserver } from 'hermes-io';

export function Counter() {
  const [count, setCount] = useState(0);
  const handleCounterNotification = (event) => {
   // handle notification
  };

  useObserver({
    contexts: [CounterContext],
    observer: CounterObserver,
    listener: handleCounterNotification,
  });

  return <h1>Counter: {count}</h1>;
}
```

### generate hook (optional)
To simply things you can generate a custom hook by using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#use-observer)
```
hermes-io-cli --root="./src" --hook="useCounter"
```

## Fine grained updates
`hermes-io` allows smart and details updates by taking the responsibility of components communications, an observable architecture like this is an interesting alternative to: `prop drilling`, `Redux`, `useContext`.

Let's explore this concept by the following example:

```javascript
// ./src/RenderTracker.jsx
function RenderTracker() {
  // track re-renders using the `renderCount` 
  const renderCount = useRef(0);
  renderCount.current++;
  return <h2>Re render tracker: {renderCount.current}</h2>;
}
```

In the following structure when the parent re-renders all the children will re-render as well, if this behaviour is not the desired typically react provides techniques like [memo](https://react.dev/reference/react/memo) 

```javascript

function Counter({ count }) {
  return <h1>Count: {count}</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevValue) => prevValue + 1);// increment value and update state
  const decrement = () => setCount((prevValue) => prevValue - 1);// decrement value and update state

  return (
    <div>
      <Counter count={count} />
      <RenderTracker />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```
![unoptimized](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*JdC40HJ0BVSAqDWJQzH3pA.gif)

let's explore other way to optimize this component by moving the state inside `Counter` and handle the business logic within the incoming notifications:

```javascript
export function Counter() {
  const [count, setCount] = useState(0);
  const handleCounterNotification = (event) => {
    const { value = {} } = event;
    const { type } = value;
    if (type === INCREMENT) setCount((prevValue) => prevValue + 1);
    if (type === DECREMENT) setCount((prevValue) => prevValue - 1);
  };

  useObserver({
    contexts: [CounterContext],
    observer: CounterObserver,
    listener: handleCounterNotification,
  });

  return <h1>Counter: {count}</h1>;
}

```
![optimized](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VhOkr1735qdrHHyuJszqvQ.gif)
