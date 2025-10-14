# Project : Todo App

## Topic Coverded :

```jsx
1. Redux Tool Kit (RTK)
2. react-redux
3. store , reducer ,
4. configureStore(reducers objects/{reducres})
5. createSlice({name:'',initialState:{},reduceres:{}})
6. useSelectors((state) => state.stateProperties)
7. useDispatch()
```

**(NB : See the `Store.js`, `TodoSlice.jsx` , `main.jsx` and other files for better Understanding And also u can go to the `Redux Tool Kit Official website`)**

**-> Instalation**

```
npm install react-redux @reduxjs/toolkit
```

1. `Redux Tool Kit (RTK)`

   - The official, bateries-included toolset for efficient Redux developement

2. `react-redux`

   - The library that binds Redux to React Components

   - it provide hooks :- `useSelector()` , `useDispatch()` , `Provider`

3. `store`

   - this is the single source of truth of the entire App's state.

   - it a centralized object that hold the entire state tree of the App.

4. `reducer`

   - its a pure method that specifies how the application's `state` changes in response to `actions`

   - it provide a `callback(state,action)`

5. `Provider`

   - ita a component of `react-redux` which make the Redux store available to all the connected components with the React App

   - it has a `props` named `store = {urStorename}`

## Steps to set Redux in React

1. Create a store `eg. src\app\store.js`
2. Define the store

   - eg.

   ```jsx
   import { configureStore } from "@reduxjs/toolkit";
   import { TodoSliceReducers } from "../features/todos/TodoSlice";

   export const Store = configureStore({
     // Add all reducers here
     reducer: TodoSliceReducers,
   });
   ```

3. Create a state slice (the reducers)

   - create a folder `src/feature/todoSlice.jsx`

   - Define the slice

   ```jsx
   import { createSlice, nanoid } from "@reduxjs/toolkit";

   export const TodoSlice = createSlice({
     name: "TodoBuilder",
     initialState: {
       todos: [
         {
           id: "1",
           description: "Deba",
         },
       ],
     },
     reducers: {
       addTodo: (state, action) => {
         //body
         // we can also define method eleswhere and can put the reference here
       },
       removeTodo: (state, action) => {
         // body
       },
     },
   });

   // export all functionality/ individual reducers  bcz we gonna use it in components
   // we must have to export all the reducer functionality of every of the slices that we create here
   export const { addTodo, removeTodo } = TodoSlice.actions;

   // bcz here can be multiple slices for eg-> like loginSlice => createSlice({}); like that multiple we can create and we have to export it to store.js and
   //so exporting the whole reducers of TodoSlice bcz it needed in store.js
   export const TodoSliceReducers = TodoSlice.reducer;
   ```

4. Go back to `store.js` and add the `reducers` there
5. Connect `Redux` to `React`

   - Go to Entry file `src\main.jsx`
   - wrap root component :

   ````jsx
       import { StrictMode } from "react";
       import { createRoot } from "react-dom/client";
       import "./index.css";
       import App from "./App.jsx";
       import { Provider } from "react-redux";
       import { Store } from "./App/Store.js";

       createRoot(document.getElementById("root")).render(
       <StrictMode>
       // here added
       <Provider store={Store}>
       <App />
       </Provider>
       </StrictMode>
       );
       ```
   ````

6. Now ur Ready to read and change the state anywhere in the app

   - READ : `useSelector()`

     > A hook used to extract specific data from the Redux store state

   - WRITE : `useDispatch()`

     > A hook which return a `dispatch()` function , which use to send an `action` to the store
