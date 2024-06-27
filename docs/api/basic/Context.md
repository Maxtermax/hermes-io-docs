---
sidebar_position: 3
---

# Context
The `Context` class designed to create `notification context` instances, only notifications submitted within a specific context will be listened, others will be ignored, you can think on this as a `whitelist`. 

```javascript
import { Context } from "hermes-io";
export const CounterContext = new Context('CounterContext');
```

The context constrains the observer by telling which `notifications` must listen to.

:::warning
This concept has nothing to do with the `react context api`.
:::

To simply things you can generate the context by using [hermes-io-cli](https://www.npmjs.com/package/hermes-io-cli#context)
```
hermes-io-cli --root="./src" --context="CounterContext"
```
