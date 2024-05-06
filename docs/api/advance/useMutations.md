---
sidebar_position: 11
---

# useMutations

React custom hook meant to synchronize the store changes with the component's state

### Parameter

| key      | value            | required | description                                                                                                                          |
| -------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| events   | string[]         | true     | List of events to listen, the events should match with the parameter type in the [mutate](/docs/api/advance/mutate) method                |
| onChange | function         | true     | Callback to called on store mutations                                                                                                |
| store    | store instance   | true     | Store instance                                                                                                                       |
| id       | string or number | true     | Unique identifier, string or number that should match with [targets](/docs/api/advance/mutate) (if passed) parameter in the mutate method |
| noUpdate | boolean          | false    | Boolean parameter, that indicates whether re-render once the onChange is invoked or not, default value: `false`.                                             |

:::warning
Important: By default `useMutation` triggers a re-render on event changes after invoking the `onChange` callback unless the `noUpdate` is set to `false`
:::

### Example

```javascript
import { useMutations } from "hermes-io";

const state = useRef(false);
const isExpanded = state.current;

useMutations({
  events: [CONSTANTS.SET_FOLDER_STATE],
  onChange: (value) => (state.current = value),
  store: explorer,
  id,
});
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
Pro tip: You override the `noUpdate` value when the `onChange` method is called, for example cancel the component's re-render this way: `setNoUpdate(true);` 

```javascript
 useMutations({
    events: [CONSTANTS.SET_FOLDER_STATE],
    noUpdate: false,
    onChange: (value, resolver, setNoUpdate) => { 
      someAsynchronousOperation(value)
      .then(resolver)
      .then(() => setNoUpdate(true)); // cancel component's re-render 
    },
    store: explorer,
    id, 
 })
```
:::


