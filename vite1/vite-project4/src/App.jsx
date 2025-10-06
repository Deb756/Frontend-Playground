import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Product, { ApiCall } from "./Components/Product";
import UserInfo from "./Components/UserInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}>
          <Route loader={ApiCall} path="Product" element={<Product />}></Route>
        </Route>
        {/* here we taking user data from url */}
        <Route path="/User/:userId" element={<UserInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
