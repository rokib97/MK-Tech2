import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-black.png";
const Navbar = () => {
  return (
    <div class="navbar bg-base-100 relative z-50 px-12">
      <div class="flex-1">
        <img src={logo} className="w-48" alt="" />
      </div>
      <div class="flex-none font-semibold">
        <ul class="menu menu-horizontal p-0">
          <li className="mr-2">
            <Link to="/">Home</Link>
          </li>
          <li tabindex="0" className="mr-2">
            <Link to="/">
              Services
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul class="p-2 bg-base-100">
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
            </ul>
          </li>
          <li tabindex="0" className="mr-2">
            <Link to="/">
              Products
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </Link>
            <ul class="p-2 bg-base-100">
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
              <li>
                <Link to="/">Submenu 1</Link>
              </li>
            </ul>
          </li>
          <li className="mr-2">
            <Link to="/">Become a Client</Link>
          </li>
          <li className="mr-2">
            <Link to="/">About Us</Link>
          </li>
          <li className="mr-2">
            <Link to="/">Login</Link>
          </li>
          <li className="mr-2">
            <Link to="/">Registration</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
