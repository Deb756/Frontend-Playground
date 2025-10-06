import React from "react";
import { Link, Outlet } from "react-router-dom";

function About() {
  return (
    <div>
      <h2 className="text-center text-3xl">About Page</h2>
      <div className="flex align-middle justify-center gap-2 p-5 m-5">
        <button className="bg-green-400 rounded-md p-2 active:scale-95 transition duration-100 cursor-pointer">
          <Link to="/About/Product">Go to Product</Link>
        </button>
        <button className="bg-green-400 rounded-md p-2 active:scale-95 transition duration-100 cursor-pointer">
          {/* (/User/Debabrat) => here by default i added "Debabrata" but we can pass {variables there} */}
          <Link to="/User/Debabrat">Go to User</Link>
        </button>
      </div>
      {/* (IMPORTANT) */}
      {/* if we are adding nested routes then <Outlet/> should be added at that route page (manadatory) */}
      <Outlet />
    </div>
  );
}

export default About;
