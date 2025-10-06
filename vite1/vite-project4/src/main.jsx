import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Product, { ApiCall } from "./Components/Product.jsx";
import UserInfo from "./Components/UserInfo.jsx";

// using data router here 
// here there is no use of <App/> to route 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/About" element={<About />}>
        <Route loader={ApiCall} path="Product" element={<Product />}></Route>
      </Route>
      {/* here we taking user data from url */}
      <Route path="/User/:userId" element={<UserInfo />}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* this is notmal router Browserouter */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
    {/* or */}
    <RouterProvider
      router={router}
      hydrate={false}
      fallbackElement={<div className="p-4 text-center">Loading...</div>} 
    />
    {/* // It means React Router is trying to stream / defer data from your loader */}
    {/* but doesn’t know what to show while waiting. there (fallbackElement) used */}
  </StrictMode>
);
