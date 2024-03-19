---
sidebar_position: 10
---

# mutate

`useStore` provides a `mutate` method meant to modify the data, once the method is called the `reducer` will performed the corresponding mutation base on the `type` and all the store's subscribers will be notified about the mutation, let's explore this by following the demo: [file explorer](https://stackblitz.com/~/github.com/Maxtermax/file-explorer)
### Parameter

| key     | value                | required | description                                            |
| ------- | -------------------- | -------- | ------------------------------------------------------ |
| type    | string               | true     | Event type                                          |
| targets | string[] or number[] | false    | List of subscribers to be notified on states mutations |
| payload | object               | true     | Mutation payload                                       |

:::warning
Important: If the targets parameter is not passed then all the store's subscribers will be notified on states mutations otherwise only the subscribers in the list will be notified.
:::

### Example

```javascript
const { mutate } = useStore({
  /* ... */
});

const handleClick = () => {
  mutate({
    type: CONSTANTS.SET_FILE_STATE,
    targets: [
      /*...*/
    ],
    payload: { value: "" },
  });
};
```

:::tip
Pro tip: After the useStore is initialized the mutate method can be accessed from the store's [instance](/docs/basics/useStore#store)

```javascript
import explorer from "@/store/explorer";
explorer.mutate(/*...*/);
```
:::

:::tip
Pro tip: You can have a two way communication bridge by invoking resolver inside the onChange callback.

```javascript
  const result = await mutate({/*...*/});
```

```javascript
 useMutations({
    noUpdate: true,
    onChange: (value, resolver) => someAsynchronousOperation(value).then(resolver)
    events: [CONSTANTS.SET_FOLDER_STATE],
    store: explorer,
    id, 
 })
```
:::



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
