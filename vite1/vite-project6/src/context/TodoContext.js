import { createContext, useContext } from "react";


export const TodoContext = createContext({
    currTodos: [
        {
            id: 1,
            title:'title 1',
            description: '1st todo',
            compleated: false
        }
    ],
    saveTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    isTodoCompleated: (id) => { }
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}