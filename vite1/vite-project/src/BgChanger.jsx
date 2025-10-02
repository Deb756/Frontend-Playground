import React from "react";

function BgChanger(props) {
  return (
    <div>
      <button onClick={() => props.changeBgColor("red")}>{"Dark"} mode</button>
    </div>
  );
}

export default BgChanger;
