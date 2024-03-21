import React from "react";
import "../styles/NavBar.css";
import { FaRegCircleUser } from "react-icons/fa6";
// import
function NavBar() {
  return (
    <div id="nav">
      <div id="icon">Icon</div>
      <a href="#Home" className="nav_item">
        Home
      </a>
      <a href="#About" className="nav_item">
        About
      </a>
      <a href="#services" className="nav_item">
        Services
      </a>
      <a href="#Testimonials" className="nav_item">
        Testimonials
      </a>
      <a href="/register" className="nav_item">
        Register
      </a>
      <a href="/register" className="nav_item account">
        <FaRegCircleUser />
      </a>
    </div>
  );
}
export default NavBar;
