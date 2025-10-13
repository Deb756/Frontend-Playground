import { configureStore } from "@reduxjs/toolkit";
import { TodoSliceReducers } from "../features/todos/TodoSlice";

export const Store = configureStore({
    reducer: TodoSliceReducers
})