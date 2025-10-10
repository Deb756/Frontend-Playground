import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItems({ todoElem }) {
  const { isTodoCompleated, updateTodo, saveTodo, deleteTodo } = useTodo();
  //   setting the description of todo
  const [desc, setDesc] = useState(todoElem.description);
  const [title, setTitle] = useState(todoElem.title);
  //  checking toso compleated or not
  const [isEditable, setIsEditable] = useState(false);

  const editTodo = () => {
    updateTodo(todoElem.id, { ...todoElem, title:title,description: desc });
    setIsEditable(false);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoElem.compleated ? "bg-[#a3ff85]" : "bg-[#ecadad]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todoElem.compleated}
        onChange={() => {
          isTodoCompleated(todoElem.id);
        }}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoElem.compleated ? "line-through" : ""}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        readOnly={!isEditable}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoElem.compleated ? "line-through" : ""}`}
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todoElem.completed) return;
          if (isEditable) editTodo();
          else setIsEditable((prev) => !prev);
        }}
        disabled={todoElem.compleated}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoElem.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItems;
