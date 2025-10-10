import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const { saveTodo } = useTodo();
  const [description, setdescription] = useState("");
  const [title, setTitle] = useState("");

  const save = (e) => {
    e.preventDefault();
    if (!description && !title) return;
    else saveTodo({ title,description, compleated: false });
    setdescription("");
  };
  return (
    <form onSubmit={save} className="flex">
      <input
        type="text"
        placeholder="Write Title..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Write Description..."
        className="w-full border border-black/10  px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
