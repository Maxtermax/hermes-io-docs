---
sidebar_position: 7 
---

# withNotify
The `withNotify` HOC allowaccess to the `notify` method in a simple way: 

### Parameter 
| key       | type           |  required    | value               | 
|-----------|-----------------|-------------|---------------------|
| Component | React component |    true     | App                 |
| options   | object          |    true     | context, observer   |

### Example
```javascript
import { withNotify } from "hermes-io";
import { HighlightContext as context } from "@/contexts/HighlightContext";
import { HighlightObserver as observer } from "@/observers/HighlightObserver";

const App = ({ notify }) => {
    const handleClick = () => notify({/*...*/});
} 

export default withNotify(App, { context, observer });
```
