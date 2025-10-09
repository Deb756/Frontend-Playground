# Project : Password Genrator

> ## Coverded Topic : Hooks _useState(),useCallBack(),useEffect(),useRef()_

1. `useState(state | () => state)` → store state in a function component.

   - Returns a stateful value, and a callback function to update it.

   ```jsx
   function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
   ```

   - convenience overload when first argument is omitted

2. `useEffect(()=>{},[deps])` → run side effects after render.
3. `useCallback(()=>{},[deps])` → memoize functions to avoid unnecessary re-renders.
4. `useRef()` → access DOM nodes or store values

   - that persist without re-rendering.
     useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

   - Note that useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.
