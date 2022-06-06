import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 shadow-lg px-12">
      <div class="flex-1">
        <p class="btn btn-ghost normal-case text-xl">LOGO</p>
      </div>
      <div class="flex-none font-bold">
        <ul class="menu menu-horizontal p-0">
          <li>
            <p>Home</p>
          </li>
          <li tabindex="0">
            <p>
              Product
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </p>
            <ul class="p-2 bg-base-100">
              <li>
                <p>Product 1</p>
              </li>
              <li>
                <p>Product 2</p>
              </li>
              <li>
                <p>Product 3</p>
              </li>
              <li>
                <p>Product 4</p>
              </li>
            </ul>
          </li>
          <li tabindex="0">
            <p>
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
            </p>
            <ul class="p-2 bg-base-100">
              <li>
                <p>Service 1</p>
              </li>
              <li>
                <p>Service 2</p>
              </li>
              <li>
                <p>Service 3</p>
              </li>
              <li>
                <p>Service 4</p>
              </li>
            </ul>
          </li>
          <li>
            <p>Become a Client</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Login</p>
          </li>
          <li>
            <p>Register</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
