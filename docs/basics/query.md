---
sidebar_position: 8
---

# query

`useStore` provides a `query` method meant to retrieve specifics chunks of data from the store, let's explore this by following the demo: [file explorer demo](https://stackblitz.com/~/github.com/Maxtermax/file-explorer)

### Parameter

| value    | required | description                                        |
| -------- | -------- | -------------------------------------------------- |
| Function | true     | Function that retrieves chunks data from the store |

### Example

```javascript
const { query } = useStore({
  /* ... */
});
const name = query((store) => store.state.name);
console.log({ name });
```

:::tip
Pro tip: After the useStore is initialized the mutate method can be accessed from the store's [instance](/docs/basics/useStore#store)


```javascript
import explorer from "@/store/explorer";
const name = explorer.query((store) => store.state.name);
```
:::
