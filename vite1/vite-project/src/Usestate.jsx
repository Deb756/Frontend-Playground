import React, { useState } from "react";

function Usestate() {
  // using use state here
  //   here useState("default val can be any thing string/boolean/int") hook return an array of two elem [count,setCount]
  // [count = innitial val setCount = val after operation]
  let [count, setCount] = useState(15);
  const incrCount = () => {
    // console.log("Counter working");
    setCount(++count);
  };
  const decrCount = () => {
    if (count > 15) setCount(--count);
    else console.log("Default Val reached");
  };

  // interview question what will be the answer of bellow
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1); // what will be the counter value when button click
    // Ans = 15 + 1 = 16
    // here in this only the the last line will be rendered bcz here we're  doin same count + 1
    //  like setCount(count+1) = 16
    //       setCount(count +1) = 16 ans so on , so to rendering same thing again and again but {count} value is remains unchanged
  };

  // solution
  // make the ++count or in setCount(prevCount => prevCount + 1)
  // bcz setCounter((x) => x) provides a call back fuction by default
  const solution = () => {
    setCount((prevCount) => prevCount + 1); // or setCount(++count)
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // prevCount is func argument for count we can put count also but it make code incosistant
    setCount((prevCount) => prevCount + 1); // what will be the counter value when button click
    // Ans = 15 + 4 = 20
    // bcz here the actual {count} is changeing
  };

  return (
    <div>
      <h2>Count is = {count}</h2>
      <button onClick={incrCount}>Increase</button>
      <button onClick={decrCount}>Decrease</button>
      <button onClick={increment}>Interview Question</button>
      <button onClick={solution}>Interview Question solution</button>
    </div>
  );
}

export default Usestate;
