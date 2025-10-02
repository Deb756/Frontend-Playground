# **Frontend-Playground**

## React useState() hook

> used to cahnge the state of a variable in react

> **useState() return an arr of [count,setCount]**

> - **count** = org value
> - **setCount** = updating count where needed,
> - **eg ->** setCount(count++)

## Interview Question

> interview question what will be the answer of bellow

```jsx
// Question
const [count, setCount] = useState(15);
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
```

## React Props

> its used to send data in the form of **Object** from **one component to another**
> ans the data can be anything like **string,array,object**
> , <br>Also we can say props is an Object

- > sent in componets brackets **use {} to pass variables**

```jsx
<Card userNameProp="jhon" objProp={objBio} frndArr={frArr} />
```

- > **props send the data in **object** form to component we can access it by 2 ways**

1. ### props.properties

```jsx
function Card(props) {
  // console.log(props);
  return (
    <div>
      <hr />
      <p>Using the props here</p>
      <h2>My name is {props.userName || "By Default User"}<h2>
      <h2>Age is {props.bio.age}</h2>
      <h2>my friends are {props.friends}</h2>
      <h2>my college is {props.bio.college}</h2>
    </div>
  );
}

export default Propss;
```

2. ### By De-Structureing props to {userName,obj,frndArr}

```jsx
function Card({userName="default User",friend,bio}) {
  // console.log(props);
  return (
      {/* // function Propss({userName="by default User",friend,bio}) {
      // for this add props directly
      //  we can also give default value at parameter like {userName="by default User"} */}
      <hr />
      <p>Using the props here</p>
      <h2>My name is {userName || "By Default User"}</h2>
      <h2>Age is {bio.age}</h2>
      <h2>my friends are {friends}</h2>
      <h2>my college is {bio.college}</h2>
    </div>
  );
}

export default Propss;
```
