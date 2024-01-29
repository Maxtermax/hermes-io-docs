---
sidebar_position: 5
---

# Notify

Method that sends notifications to the `subscribers` of a specific `observer` signed with a `context` that way we create a `notification context`, let's see this in details:

| key     | value                    | required | description      |
| ------- | ------------------------ | -------- | ---------------- |
| value   | any                      | true     | payload          |
| context | new Context('MyContext') | true     | context instance |

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

Pro tip: You can have a ping pong notification by invoking resolver inside the listener.

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

[Play demo](https://stackblitz.com/~/github.com/Maxtermax/hermes-io-counter-demo) <svg viewBox="0 0 8 8" width="12" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="StyledIconBase-sc-ea9ulj-0 kvMjKH"><path d="M0 0v8h8V6H7v1H1V1h1V0H0zm4 0 1.5 1.5L3 4l1 1 2.5-2.5L8 4V0H4z"></path></svg>

## Examples

- [Counter](https://stackblitz.com/~/github.com/Maxtermax/hermes-io-counter-demo)
- [Sneaker store](https://sneaker-store-1.vercel.app)
