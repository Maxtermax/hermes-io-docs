---
sidebar_position: 8
---

# useStore

The `useStore` hook is designed to manage your component’s state using `mutations` and `queries`, let's explore the functionality by following the demo: [File explorer](/docs/api/advanced/Example)


### Parameter

| key   | value          | description    |
| ----- | -------------- | -------------- |
| store | Store instance | [Store instance](/docs/api/advanced/useStore#store) |
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

### reducer

Pure functions that receive the state and the action to be performed and return a new state, without directly modifying the current state.

### Example 

```javascript
export default function reducer(state, action) {
  const actions = {
    [CONSTANTS.SET_FILE_STATE]: () =>
      map(
        state,
        ({ type, id }) =>
          type === CONSTANTS.DIRECTORY_TYPE.FILE && id === action.payload.id,
        { hightlight: action.payload.value }
      ),
  };
  return actions[action.type]?.();
}
```


## Store

The `Store` class is designed to: `store`, `mutate` and `query` information, combined with the [context](/docs/api/basic/Context) and [observer](/docs/api/basic/Observer) pattern to ensure reactivity on data changes alongside with the `useStore` hook.

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

`useObserver` is a communication mecanishm to send information from one place to another whatever you do with that whether it's a http request or trigger a re-render or any other bussiness logic is up to you. 

In the other hand `useStore` is designed to orchestrate partially or globally the data of you application, you can have a store for the entire app (global store) or for a specific section of you app (micro store).

:::tip
Pro tip: Move the re-renders to closest to where is explicitly required that way you app will be better optimized you can use an architecture oriented to fine grained updates as an alternative to `memo` check the demo: [file explorer](https://stackblitz.com/edit/vitejs-vite-juuupt?file=README.md) 
:::

### Conclusion
If you need a communication mechanism to manage business logic use `useObserver` and if you need a `store` and granually re-renders then use `useStore` alongside with `useMutations` 
