import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./InputField";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-800 text-2xl gap-2 flex flex-col m-50 rounded-md w-fit mx-auto align-middle justify-center text-white p-5">
        <InputField />
        <InputField />
        <div className="flex justify-between gap-2">
          <button className="rounded-md bg-green-500 w-full text-black p-2 text-1xl active:scale-95 transition duration-100 cursor-pointer">
            Convert
          </button>
          <button className="rounded-md bg-green-500 w-full text-black p-2 text-1xl active:scale-95 transition duration-100 cursor-pointer">
            Swap
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
