---
sidebar_position: 5
---

# notify

Method to send notifications to the `subscribers` of a specific `Observer` signed with a `Context` that way we create a `notification context`, let's see this in details:

| key     | value                    | required | description      |
| ------- | ------------------------ | -------- | ---------------- |
| value   | any                      | true     | Payload          |
| context | Context instance         | true     | Context instance |

```javascript
// ./src/App.jsx

function App() {
  const increment = () => {
    // notify increment passing the event type: `INCREMENT`
    CounterObserver.notify({
      context: CounterContext,
      value: {
        type: INCREMENT,
      },
    });
  };

  const decrement = () => {
    // notify increment passing the event type: `DECREMENT`
    CounterObserver.notify({
      context: CounterContext,
      value: {
        type: DECREMENT,
      },
    });
  };

  return (
    <div>
      <Counter />
      <RenderTracker />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

:::tip

Pro tip: You can create a two way bidirectional bridge by invoking resolver inside the listener.

```javascript
const handleNotification = (event, resolver) => {
  setInterval(() => resolver("pong"), 5000);
};

useObserver({
  contexts: [Context],
  observer: Observer,
  listener: handleNotification,
});
```

```javascript
const handleClick = async () => {
  // ping...
  const result = await Observer.notify({
    context: Context,
    value: {...},
  });
  // wait for 5 seconds
  console.log(result)// pong
}
```
:::
