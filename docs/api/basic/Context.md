---
sidebar_position: 3
---

# Context
The `Context` class is designed to create `notification context`, only notifications submitted within a specific context will be listened, others will be ignored, you can think on this as a `whitelist`, this context constrains the observer by telling which `notifications` must listen to.

```javascript
import { Context } from "hermes-io";
export const CounterContext = new Context('CounterContext');
```

:::warning
This concept has nothing to do with the `react context api`.
:::

To simply things you can generate the context by using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#context)
```
hermes-io-cli --root="./src" --context="CounterContext"
```
