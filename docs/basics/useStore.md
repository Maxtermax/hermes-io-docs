---
sidebar_position: 5 
---

# useStore 
`hermes-io` provides a hook to manage the component's state, oriented to a smart data propagation and updates throughout the use of `mutations` and  `queries`, let's explore this by following the demo: [file explorer demo](https://stackblitz.com/~/github.com/Maxtermax/file-explorer)

### Parameter 

| key     | value          | required | description                                                                                                                               |
|---------|----------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|
| store   | new Store | reducer | Function       | true     | Pure functions that receive the state and the action to be performed and return a new state, without directly modifying the current state |
| data    | Object         | true     | Initial state object                                                                                                                      |


### Example


```javascript
import explorer from "@/store/explorer";
import data from "@/mock/data";
import reducer from "@/reducer";
import { useStore } from 'hermes-io';

export default function App() {
    const { mutate, query } = useStore({ store: explorer, reducer, data });
}
```

## Store 
To create a store that manage the state of your application `hermes-io` provides a `Store class` meant to hold, `mutate` and `query` information, combined with the [context](/docs/basics/Context) and [observer](/docs/basics/Observer) pattern to ensure reactivity on data changes along side with the `useStore` hook.

### Parameter 
| key      | value             | required | description                    |
|----------|-------------------|----------|--------------------------------|
| context  | Context instance  | true     | Notification context instance  |
| observer | Observer instance | true     | Subscribable observer instance |

### Example

```javascript
export const explorer = new Store({ context, observer });
```







