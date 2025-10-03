import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // length of password
  const [length, setLength] = useState(8);
  // adding number to the password
  const [number, setNumber] = useState(false);
  // adding cahr to the password
  const [char, setChar] = useState(false);
  //  setting password
  const [password, setPassword] = useState("");

  // using useCallback(function(),[dependcy1,dep2])
  // used to memorize the dependencies and if any changes occure in any of dependency it will re-render/ rerun
  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
  let passGen = useCallback(() => {
    // generating random password
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "*%&^#$@!(){}[]";
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }
    setPassword(pass);
  }, [number, char, length, setPassword]);

  // WE can also do it by only useEffect() hook by passing the passGen() body directly
  // useEffect(function(),[dependency 1,dep2]) used to re-run if any dependency cahnge
  useEffect(() => {
    passGen();
  }, [number, char, length, setPassword, passGen]);

  // used to hold a refence of a element ( we can say two element can communicate with each other)
  // it contains all the info of that element we can also make cahnges on that also from other elemnts
  // <input ref={getPasswordRef}/>
  let getPasswordRef = useRef(null);

  // copy to clipboard password
  let copyToClipboard = () => {
    getPasswordRef.current.select();
    navigator.clipboard.writeText(password);
    // alert(`Copied to clipboard : ${password}`);
  };

  return (
    <div className="flex align-middle justify-center w-full">
      <div className="bg-gray-800 m-12 w-3xl flex align-middle justify-center gap-3 p-2.5 rounded-md flex-col">
        <h1>Password Generator</h1>
        <div className="flex">
          <input
            type="text"
            value={password}
            placeholder="password"
            className="outline-none rounded-l-md py-1 bg-white px-3 w-full text-black"
            ref={getPasswordRef}
            readOnly
          />
          <button
            className="active:scale-95 transition duration-100 rounded-r-md bg-white text-black p-2 outline-1 cursor-pointer "
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="p-1.5 flex gap-2">
          <input
            type="range"
            min={0}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="cursor-pointer"
          />
          <p>Length of password : {length}</p>
          <input
            type="checkbox"
            value={number}
            onChange={(e) => {
              setNumber((prev) => !prev);
            }}
          />
          Add Numbers
          <input
            type="checkbox"
            onChange={(e) => {
              setChar((prev) => !prev);
              // console.log(char);
            }}
            value={char}
          />
          Add Charactors
        </div>
      </div>
    </div>
  );
}

export default App;
