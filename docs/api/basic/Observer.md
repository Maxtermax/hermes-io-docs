---
sidebar_position: 2
---

`hermes-io` provides an `Observer` class meant to create `subscribable` instances by invoking the method `subscribe`, check the following example:

let's export the `CounterObserver` instance, the purposes of this is handle notifications `increment` for and `decrement` the count.

```javascript
// ./src/observers/counter.js
import { Observer } from "hermes-io";
export const CounterObserver = new Observer();

```

### generate observer (optional)
To simply things you can generate the observer file using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#observer)
```
hermes-io-cli --root="./src" --observer="CounterObserver"
```
