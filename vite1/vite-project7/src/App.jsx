import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-2  p-8 align-middle justify-center">
        <AddTodo />
        <TodoItems />
      </div>
    </>
  );
}

export default App;
