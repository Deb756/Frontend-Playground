# Project : BG Changer

> ## Coverded Topics : _PROPS in React , useState() hook working_

1. `Props` → pass data from parent to child (read-only).

2. `useState(State | ()=>State)` → manage local state inside a component (mutable).
   - Returns a stateful value, and a callback function to update it.
   ```jsx
     function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
   ```
   - convenience overload when first argument is omitted
