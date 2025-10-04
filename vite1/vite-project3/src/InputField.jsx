import React from "react";

function InputField() {
  return (
    <div className="flex flex-col align-middle rounded-md p-3 justify-center bg-black text-white">
      <p>From</p>
      <div className="flex gap-30 pb-3 pt-3 pl-2 pr-2 align-middle justify-between">
        <input
          className="rounded-md outline-none"
          type="number"
          placeholder="Enter number"
        />
        <select
          id="currency"
          className="outline-none bg-black rounded-md cursor-pointer"
        >
          <option value="inr">inr</option>
          <option value="usd">usd</option>
        </select>
      </div>
    </div>
  );
}

export default InputField;
