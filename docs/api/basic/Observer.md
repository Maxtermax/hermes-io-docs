---
sidebar_position: 2
---

The `Observer` class is designed to create `subscribable` instances by invoking the method `subscribe`
```javascript
// ./src/observers/counter.js
import { Observer } from "hermes-io";
export const CounterObserver = new Observer();

```
The `CounterObserver` is designed to manage the `increment` and `decrement` here is am example to illustrate [counter application demo](https://stackblitz.com/edit/hermes-counter?file=README.md)

### generate observer (optional)
To simply things you can generate the observer by using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#observer)
```
hermes-io-cli --root="./src" --observer="CounterObserver"
```
