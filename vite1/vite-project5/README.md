# Project : UI Light Mode & Dark Mode changer

## Coverded Topics : `Context Api ,React.createContext() , context.Provider ,useContext(context)`

**( Important -> Go to `Theme.js` then `App.jsx` then `ToggleButton.jsx` for better grasp )**

1. `Context Api`

   - Context lets components pass information deep down without explicitly passing props.

2. `React.createContext()`
   - Lets you create a Context that components can provide or read.
   - defaultValue The value you want the context to have when there is no matching
   - in the tree above the component reading the context. This is meant as a "last resort" fallback.
3. `contextName.Provider`
   - Used to provide the Created context to a Component
   - eg .
   ```jsx
   export const ThemeProvider = ThemeContext.Provider;
   ```
   - And next we will have to wrap all the Component of `App.jsx` to `<ThemeProvider values={//all values passed when creatingContext}>`
     then any Component in our App can use it directly by calling `useContext()`
4. `useContext(Context)`
   - Accepts a context object (the value returned from `React.createContext`) and returns the current
   - **Returns a stateful value, and a function to update it.**
