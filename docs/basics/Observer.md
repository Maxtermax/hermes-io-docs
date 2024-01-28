---
sidebar_position: 2
---

`hermes-io` provides an `Observer` class to create instances that can be `subscribable` that means many subscribers can listen for notifications on the instance by using the method `subscribe`, check the following example:

We are exporting an instance of the class `Observer` called `CounterObserver` the propuses of this observer is handle notifications for `increment` and `decrement` the count.

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


