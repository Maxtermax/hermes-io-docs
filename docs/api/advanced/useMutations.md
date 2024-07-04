---
sidebar_position: 11
---

# useMutations

The `useMutations` hook is designed to synchronize store changes with your component’s state. Additionally, you can manage local state with `useMutations` by setting an `initialState` and updating the state by returning a new value in the `onChange` function.

### Parameter

| key      | value            | required | description                                                                                                                          |
| -------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| events   | string[]         | true     | List of events to listen, the events should match with the parameter type in the [mutate](/docs/api/advanced/mutate) method                |
| initialState   | object   | false     |  Initial state meant to manage you local state optionally   |
| onChange | function         | true     | Callback called on store mutations                                                                                                |
| store    | store instance   | true     | [Store instance](/docs/api/advanced/useStore#store)                                                                                                                       |
| id       | string or number | true     | Unique identifier, string or number that should match with [targets](/docs/api/advanced/mutate) (if passed) parameter in the mutate method |
| noUpdate | boolean          | false    | Flag that indicates whether a re-render must occurred when `onChange` is invoked, default value: `false`.                                             |

:::warning
Important: By default `useMutation` triggers a re-render on event changes after invoking the `onChange` callback unless the `noUpdate` is set to `false`
:::

### Example

```javascript
import { useMutations } from "hermes-io";
import store from "store/app";
import { CONSTANTS } from "constants";

const Folder = ({ id }) => {
  const { state } = useMutations({
    initialState: { isExpanded: false },
    events: [CONSTANTS.SET_FOLDER_STATE],
    onChange: (value) => ({ isExpanded: value }),
    store,
    id,
  });
  return <FolderIcon isExpanded={state.isExpanded} />
}
```

To make it more practical, you can listen to event changes by implement `onEvent`and update the state, base on the business logic.

| Name     | Description                                                | 
|----------|------------------------------------------------------------|
| onEvent  | Callback called on store mutations, same api as `onChange` |


```javascript
import { useMutations } from "hermes-io";
import store from "store/app";
import { CONSTANTS } from "constants";

const Folder = ({ id }) => {
  const { state, onEvent } = useMutations({
    initialState: { isExpanded: false },
    store,
    id,
  });

  onEvent(CONSTANTS.SET_FOLDER_STATE, (value) => ({ isExpanded: value });

  return <FolderIcon isExpanded={state.isExpanded} />
}
```



:::tip
Pro tip: You can have a two way communication bridge by invoking resolver argument inside the ` onChange` callback.

```javascript
  const result = await mutate({/*...*/});
```

```javascript
 useMutations({
    noUpdate: true,
    onChange: (value, resolver) => { 
      someAsynchronousOperation(value).then(resolver);
    },
    events: [CONSTANTS.SET_FOLDER_STATE],
    store: explorer,
    id, 
 })
```
:::

:::tip
Pro tip: You override the `noUpdate` value when the `onChange` method is called, for example cancel the components re-render this way: `setNoUpdate(true);` 

```javascript
 useMutations({
    events: [CONSTANTS.SET_FOLDER_STATE],
    noUpdate: false,
    onChange: (value, resolver, setNoUpdate) => { 
      someAsynchronousOperation(value)
      .then(resolver)
      .then(() => setNoUpdate(true)); // cancel component's re-render dynamically
    },
    store: explorer,
    id, 
 })
```
:::
