---
sidebar_position: 7 
---

# withNotify
`hermes-io` provides a HOC to access to the `notify` in a simple way: 

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
