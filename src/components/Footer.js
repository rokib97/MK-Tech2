import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-black.png";

const Footer = () => {
  return (
    <footer class="footer w-full mx-auto p-10 bg-base-100 text-base-content mt-16 ">
      <div className="ml-32">
        <img src={logo} className="w-64" alt="" />
        <p>
          The Car Doctor Service.
          <br />
          Providing reliable services since 1992
        </p>
      </div>
      <div>
        <span class="footer-title">Services</span>
        <Link to="/" class="link link-hover">
          Branding
        </Link>
        <Link to="/" class="link link-hover">
          Design
        </Link>
        <Link to="/" class="link link-hover">
          Marketing
        </Link>
        <Link to="/" class="link link-hover">
          Advertisement
        </Link>
      </div>
      <div>
        <span class="footer-title">Company</span>
        <Link to="/" class="link link-hover">
          About us
        </Link>
        <Link to="/" class="link link-hover">
          Contact
        </Link>
        <Link to="/" class="link link-hover">
          Jobs
        </Link>
        <Link to="/" class="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <span class="footer-title">Legal</span>
        <Link to="/" class="link link-hover">
          Terms of use
        </Link>
        <Link to="/" class="link link-hover">
          Privacy policy
        </Link>
        <Link to="/" class="link link-hover">
          Cookie policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
