---
sidebar_position: 3
---

# Context
`hermes-io` provides a `Context` class to create instances that can be used to create `notification context` that means that only notification 
submited on a specific context will be listened otherwise will be ignored, you can think on this like a `whitelist` let's analyze the following example:

The context constrains the observer by telling which `notifications` must listen to.

`NOTE:` this concept has nothing to do with the `react context api`.

```javascript
// ./src/contexts/counter.js
import { Context } from "hermes-io";
export const CounterContext = new Context('CounterContext');
```

### generate context (optional)
To simply things you can generate the observer file using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#context)
```
hermes-io-cli --root="./src" --context="CounterContext"
```