---
sidebar_position: 5
---

# Toolkit

## Hermes-io CLI
This CLI is the official scaffolding generator for [hermes-io](https://www.npmjs.com/package/hermes-io#get-started), its generates a simple folder structure that guaranty separation of concerns encompassing pivotal elements such as: [contexts](https://github.com/Maxtermax/hermes-io#context), [hooks](https://github.com/Maxtermax/hermes-io#useobserver-hook) and [observers](https://github.com/Maxtermax/hermes-io#observer).

```
npm i hermes-io-cli -g
```

## Overview
This CLI is the official scaffolding generator for [hermes-io](https://www.npmjs.com/package/hermes-io#get-started), its generates a simple folder structure that guaranty separation of concerns encompassing pivotal elements such as: [contexts](https://github.com/Maxtermax/hermes-io#context), [hooks](https://github.com/Maxtermax/hermes-io#useobserver-hook) and [observers](https://github.com/Maxtermax/hermes-io#observer).

# Summary
- [Installation](#installation)
- [Context](#context)
- [Observer](#observer)
- [useObserver](#use-observer)

## Installation
```
npm install hermes-io-cli -g
```

## Usage

This CLI has a set of commands for generate folders and files for hermes-io entities.

###  Context
By passing the **context** argument a newly created folder named as '**contexts**' is automatically generated. Within this folder, a brand-new [Context](https://github.com/Maxtermax/hermes-io#context) file is generated, adopting the provided value as its designated name.
```
hermes-io-cli --context="MyContext"
```
result:
```
/contexts/MyContext.js
```
```javascript
import { Context } from 'hermes-io';
export const MyContext = new Context('MyContext'); 
```

###  Observer
By passing the **observer** argument a newly created folder named as '**observers**' is automatically generated. Within this folder, a brand-new  [Observer](https://github.com/Maxtermax/hermes-io#observer) file is generated, adopting the provided value as its designated name.
```
hermes-io-cli --observer="MyObserver"
```
result:
```
/observers/MyObserver.js
```
```javascript
import { Observer } from 'hermes-io';
export const MyObserver = new Observer('MyObserver'); 
```
Note: To simplify things you can generate one or more entities by passing the correspondings arguments in a single command, for example: 
```
hermes-io-cli --observer="MyObserver" --context="MyContext"
```
result:
```
/contexts/MyContext.js
```
```
/observers/MyObserver.js
```

###  Use observer

By passing the **hook** argument a newly created folder named as '**hooks**' is automatically generated. Within this folder, a brand-new  [observer hook](https://github.com/Maxtermax/hermes-io#useobserver-hook) file is generated, adopting the provided value as its designated name:
```
hermes-io-cli --hook="useCustom"
```
result:
```
/hooks/useCustom.js
```
```javascript
import { useObserver, Context, Observer } from 'hermes-io';

export const CustomContext = new Context('CustomContext'); 
export const CustomObserver = new Context('CustomObserver'); 

export const UseCustom = () => {
  const handleUseCustomNotification = (payload) => {
    /* handle notification */ 
  };
  useObserver({
    contexts: [CustomContext],
    observer: CustomObserver,
    listener: handleUseCustomNotification,
  });
};
```
Note: Is posible to link existing observers or contexts to a newly generated **useObserver** if the name of any match with the name of the custom hook, for example:
```
hermes-io-cli --hook="useCustom" --context="Custom" --observer="Custom"
```
result:
```
/hooks/useCustom.js
```
/observers/Custom.js
```
/contexts/Custom.js
```

```javascript
import { useObserver } from 'hermes-io';
import { Custom as ObserverCustom } from "../observers/Custom";
import { Custom as ContextCustom } from "../contexts/Custom";

export const UseCustom = () => {
  const handleUseCustomNotification = (event) => {
    /* handle notification */
    console.log(event);
  };
  useObserver({
    contexts: [ContextCustom],
    observer: ObserverCustom,
    listener: handleUseCustomNotification,
  });
}
```

###  Root folder
By default the folders are generated using the current path as a base (typically at the root of the project), this can be changed by using the root argument:
```
hermes-io-cli --root="./output" --context="MyContext" --observer="MyObserver"
```
result:
```
/output/contexts/MyContext.js
```
```
/output/observers/MyObserver.js
```


## Hermes-io Inspector 🔍
Chrome extension that allows inspect notifications emitted by [hermes-io](https://www.npmjs.com/package/hermes-io) in a friendly UI [demo](https://github.com/Maxtermax/hermes-io-devtools/assets/4247989/5e7dcaa5-cb0d-4a00-a685-4f65884a071c)

Install extension: [here](https://chromewebstore.google.com/detail/hermes-io/pjdkgcpikfmkncldipldmimanfkpeedm?hl=en)
