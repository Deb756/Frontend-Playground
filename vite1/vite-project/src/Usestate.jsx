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
  return (
    <div>
      <h2>Count is = {count}</h2>
      <button onClick={incrCount}>Increase</button>
      <button onClick={decrCount}>Decrease</button>
    </div>
  );
}

export default Usestate;
