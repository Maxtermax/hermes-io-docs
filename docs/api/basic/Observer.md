---
sidebar_position: 2
---

`hermes-io` provides an `Observer` class meant to create `subscribable` instances by invoking the method `subscribe`, check the following example:
```javascript
// ./src/observers/counter.js
import { Observer } from "hermes-io";
export const CounterObserver = new Observer();

```
The purposes of `CounterObserver` is handle the `increment` and `decrement` notifications for the [counter application demo](https://stackblitz.com/edit/hermes-counter?file=README.md)

### generate observer (optional)
To simply things you can generate the observer by using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#observer)
```
hermes-io-cli --root="./src" --observer="CounterObserver"
```
