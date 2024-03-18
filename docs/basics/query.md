---
sidebar_position: 8
---

# query

`useStore` provides a `query` method meant to retrieve specifics chunks of data from the store, let's explore this by following the demo: [file explorer](https://stackblitz.com/~/github.com/Maxtermax/file-explorer)

### Parameter

| value         | required | description                                                       |
| ------------- | -------- | ----------------------------------------------------------------- |
| Function      | true     | Function that retrieves chunks data from the store                |
| defaultValue  | false    | If the query value is undefined then the defaultValue is returned |

### Example

```javascript
const { query } = useStore({
  /* ... */
});
const name = query((store) => store.state.name, 'John doe');
console.log({ name });
```

:::tip
Pro tip: After the useStore is initialized the mutate method can be accessed from the store's [instance](/docs/basics/useStore#store)


```javascript
import explorer from "@/store/explorer";
const name = explorer.query((store) => store.state.name);
```
:::

:::tip
Pro tip: You can combine the [get](https://lodash.com/docs/4.17.15#get) method to gets the value at path of object.

```javascript
import explorer from "@/store/explorer";
import get from "lodash/get";

const prop = explorer.query(() => get(store.state, 'my.deep.propery', 'hello'));
```
:::
