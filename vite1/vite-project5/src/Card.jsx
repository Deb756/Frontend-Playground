import React from "react";
import ToggleButton from "./ToggleButton";

function Card({ title, description, children }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <ToggleButton />
    </div>
  );
}

export default Card;
