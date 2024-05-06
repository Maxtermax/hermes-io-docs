---
sidebar_position: 12
hide_table_of_contents: true
---

Let's see the power of a smart update approach navigate the repo below and notice the red flash animation indicating that there was a re-render only in the desired components.

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app"
  class="advance-container"
  id="advance-demo"
/>

### store

Let's begin by generating an instance of the Store class and pass the required arguments.

<iframe 
  width="1000px"
  height="358px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/286fefb3ee3183f24c961024e0002b0d5fda6283&target=explorer.js&lines=8:8&standalone=true"
  class="advance-container"
  id="advance-demo"
/>

Then populate the store by passing the `data` argument to `useStore`.

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/36e650929da1f16ab2f02280ae398daba7b0e9a7&target=useHighlight.js&lines=13:13&standalone=true"
  class="advance-container"
  id="advance-demo-queries"
/>



### reducer 

When a mutation is sent the reducer will perform an action that changes the data in the store.

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/5ed87f20e3adf99965c5658ca1e36d7df70b9d6c&target=reducer.js&standalone=true"
  class="advance-container"
  id="advance-demo"
/>

### mutations 
In this file lives all possibles mutations, let take at look to the `setFileHightLight` it will mutate the store to highlight the files names on the text field changes.


<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/17f6c7d88407d8b60cc7fab73f895aac3bdc0201&target=mutations.js&lines=5:18&standalone=true"
  class="advance-container"
  id="advance-demo"
/>

### queries 
In this file lives all posibles queries to the store for example: `getHighlights` retrives all the files highlighted in the store. 

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/54b4db5d1752334c3b1f90f7e9cd9edf438c2a9b&target=queries.js&lines=5:12&standalone=true"
  class="advance-container"
  id="advance-demo"
/>

### Implementation 

With all the pieces in place we can performed mutations and queries for the desired use case for example the `onClear` function.

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/36e650929da1f16ab2f02280ae398daba7b0e9a7&target=useHighlight.js&lines=15:22&standalone=true"
  class="advance-container"
  id="advance-demo-queries"
/>

Now let's sync the store changes with ui by implementing ` useMutations`.

<iframe 
  width="1000px"
  height="700px"
  src="https://file-explorer-mauve.vercel.app?resource_url=https://api.github.com/repos/Maxtermax/file-explorer/git/trees/556495cc594dfa569a3980292b21107b9d74619e&target=Highlight.jsx&lines=28:33&standalone=true"
  class="advance-container"
  id="advance-demo-queries"
/>










