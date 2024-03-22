---
sidebar_position: 4
---

# useObserver
`hermes-io` provides a `custom hook` to integrate the `Observer` with `Context`, this hook can be used to subscribe listeners and receive `notifications` under certain constraints provided by the `notification context`, let's analize this in detail.

### Parameter 

| key      | value             | required | description                                                                                                                                                     |
|----------|-------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| observer | Observer instance | true     | Instance of the class Observer                                                                                                                               |
| listener | Function          | true     | Callback function                                                                                                                                   |
| contexts | context[]    | true     | Array of instances of the class Context, when a notification comes and is not signed with any of the contexts in the array the listener callback will never be called |

### Example


```javascript
import { useObserver } from 'hermes-io';

// ./src/Counter.jsx
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
To simply things you can generate the observer file using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#use-observer)
```
hermes-io-cli --root="./src" --hook="useCounter"
```

## Fine grained updates
`hermes-io` allows smart and details updates by taking the responsibility of component communication, using an observable architecture this is an interesting alternative to: `prop drilling`, `Flux Pattern`, `useContext`.

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

In the following structure when the parent re-renders all the children will re-render as well, if this behaviour is not the desired typically react provides techniques like [memo](https://react.dev/reference/react/memo) to avoid it, let's explore other way to achieve the same result:

```javascript
// ./src/App.jsx

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

![unoptimized](https://raw.githubusercontent.com/Maxtermax/hermes-io-counter-demo/master/src/assets/unoptimized.gif)

an alternative could be move the state inside `Counter` and manage it on events changes:

```javascript
// ./src/Counter.jsx
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
![optimized](https://raw.githubusercontent.com/Maxtermax/hermes-io-counter-demo/master/src/assets/optimized.gif)

