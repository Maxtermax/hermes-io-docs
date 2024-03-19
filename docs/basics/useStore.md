---
sidebar_position: 8
---

# useStore

`hermes-io` provides a hook to manage the component's state, oriented to a smart data propagation and updates by using `mutations` and `queries`, let's explore this by following the demo: [file explorer](https://stackblitz.com/~/github.com/Maxtermax/file-explorer)

### Parameter

| key   | value          | description    |
| ----- | -------------- | -------------- |
| store | Store instance | Store instance |
| data  | object         | Initial state  |

### Example

```javascript
import explorer from "@/store/explorer";
import data from "@/mock/data";
import reducer from "@/reducer";
import { useStore } from "hermes-io";

export default function App() {
  const { mutate, query } = useStore({ store: explorer, reducer, data });
}
```

## Store

To create a store that manage the state of your application `hermes-io` provides a `Store class` meant to hold, `mutate` and `query` information, combined with the [context](/docs/basics/Context) and [observer](/docs/basics/Observer) pattern to ensure reactivity on data changes along side with the `useStore` hook.

### Parameter

| key      | value             | required | description                    |
| -------- | ----------------- | -------- | ------------------------------ |
| context  | Context instance  | true     | Context instance               |
| observer | Observer instance | true     | Subscribable observer instance |

### Example

```javascript
export const explorer = new Store({ context, observer });
```

### useStore vs useObserver

`useObserver` is a communication mecanishm to send information from one place to another whatever you do with that information whether it's a http request or trigger a re-render or any other bussiness logic is up to you, in the other hand `useStore` is meant to orchestrate partially or globally the data of you application and syncronize the store with the state of you app, you can have a store for the entire app (global store) or for a specific section of you app (contained store).

:::tip
Pro tip: Move the re-renders to closest to where is explicitly required that way you app will be better optimized you can use an architecture oriented to fine grained updates as an alternative to `memo` check the demo: [file explorer](https://stackblitz.com/~/github.com/Maxtermax/file-explorer) 

<img width="400px" height="auto" src="/img/file-explorer.gif" alt="File explorer demo"/>
:::


### Conclusion
If you need a communication mechanism to manage business logic use `useObserver` and if you need a `store` and granually re-render components then use `useStore` alongside with `useMutations` 