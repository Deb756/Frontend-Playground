import React from "react";

// we can use props in function parameter by 2 ways
// 1. by directly props
// 2. by destructuring props object(bcz in react props are object used to pass data from one to other page)
function Propss(props) {
  // function Propss({userName,friend,bio}) {
  // console.log(props);
  return (
    <div>
      <hr />
      <p>Using the props here</p>
      <h2>My name is {props.userName || "By Default User"}</h2>
      <h2>Age is {props.bio.age}</h2>
      <h2>my friends are {props.friends}</h2>
      <h2>my college is {props.bio.college}</h2>

      {/* // function Propss({userName="by default User",friend,bio}) {
      // for this add props directly
      //  we can also give default value at parameter like {userName="by default User"} */}
      {/* <hr />
      <p>Using the props here</p>
      <h2>My name is {userName || "By Default User"}</h2>
      <h2>Age is {bio.age}</h2>
      <h2>my friends are {friends}</h2>
      <h2>my college is {bio.college}</h2> */}
    </div>
  );
}

export default Propss;
