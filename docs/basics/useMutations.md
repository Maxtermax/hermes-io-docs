---
sidebar_position: 11
---

# useMutations

`hermes-io` provides a hook to sync the store changes with the componet's state

### Parameter

| key      | value            | required | description                                                                                                                          |
| -------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| events   | string[]         | true     | List of events to listen, the events should match with the parameter type in the [mutate](/docs/basics/mutate) method                |
| onChange | function         | true     | Callback to called on store mutations                                                                                                |
| store    | store instance   | true     | Store instance                                                                                                                       |
| id       | string or number | true     | Unique identifier, string or number that should match with [targets](/docs/basics/mutate) (if passed) parameter in the mutate method |
| noUpdate | boolean          | false    | Boolean parameter, that indicates whether re-render once the onChange is invoked or not.                                             |

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
