---
sidebar_position: 10
---

# mutate

Method meant to modify the store's data, when the method is called the `reducer` will perform the corresponding mutation base on the `type` and all the store's subscribers will be notified, let's explore this by following the demo: [file explorer](/docs/api/advance/Example#mutations)

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
Pro tip: After the useStore is initialized the mutate method can be accessed through the [store](/docs/api/advance/useStore#store)

```javascript
import explorer from "@/store/explorer";
explorer.mutate(/*...*/);
```
:::

