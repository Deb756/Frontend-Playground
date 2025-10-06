import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div className="m-0 p-0">
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">React-Router</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? `text-amber-300` : ``)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) => (isActive ? `text-amber-300` : ``)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) => (isActive ? `text-amber-300` : ``)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Button</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
