import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  // setting Current Todos array when any new todos came
  const [currTodos, setCurrTodos] = useState([]);

  // saving todo in currTodos array
  const saveTodo = (todo) => {
    setCurrTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };
  // updating todo
  const updateTodo = (id, todo) => {
    setCurrTodos((prevTodos) =>
      prevTodos.map((elem) => {
        if (elem.id === id) return { ...elem, ...todo };
        else return elem;
      })
    );
  };
  // deleting todo
  const deleteTodo = (id) => {
    setCurrTodos((prevTodos) => prevTodos.filter((elem) => elem.id != id));
  };
  // is todo compleated
  const isTodoCompleated = (id) => {
    setCurrTodos((prevTodos) =>
      prevTodos.map((elem) =>
        elem.id === id ? { ...elem, compleated: !elem.compleated } : elem
      )
    );
  };

  // getting todos array from the Local Storage
  useEffect(() => {
    // pasrse => bcz in storage the data are in String format but we need Json so we parse from string to json
    const getTodos = JSON.parse(localStorage.getItem("TodosArr"));
    if (getTodos && getTodos.length > 0) setCurrTodos(getTodos);
  }, []);
  
  // inserting / setting todos arrays to the Local Storage
  // useEffect => bcz we want it to render each time when any dependency change
  useEffect(() => {
    // stringify => bcz the local storage only strore the data in string format not in json
    // and we have data in JSON
    localStorage.setItem("TodosArr", JSON.stringify(currTodos));
  }, [currTodos]);


  return (
    <>
      <TodoProvider
        value={{
          currTodos,
          saveTodo,
          updateTodo,
          deleteTodo,
          isTodoCompleated,
        }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              {/* Todo form goes here */}
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              <h2>ready</h2>
              {currTodos.map((todoElem) => {
                return (
                  <div key={todoElem.id} className="w-full">
                    <TodoItems todoElem={todoElem} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
