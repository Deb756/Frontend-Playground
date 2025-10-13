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
      const todos = {
        id: nanoid(),
        description: action.payload,
      };
      state.todos.push(todos);
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todoElem) => todoElem.id != id);
    },
  },
});

// export all functionality/ individual reducers  bcz we gonna use it in components
// we must have to export all the reducer functionality of every of the slices that we create here 
export const { addTodo, removeTodo } = TodoSlice.actions;

// bcz here can be multiple slices for eg-> like loginSlice => createSlice({}); like that multiple we can create and we have to export it to store.js and 
//so exporting the whole reducers of TodoSlice bcz it needed in store.js
export const TodoSliceReducers = TodoSlice.reducer;
