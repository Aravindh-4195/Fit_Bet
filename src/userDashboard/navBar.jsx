import React from "react";
import "./styles/userNav.css";
import { FaRegCircleUser } from "react-icons/fa6";
// import
function NavBarUser() {
  return (
    <div id="UserNav">
      <div id="userIcon">
        <FaRegCircleUser />
      </div>

      <a href="/user" className="navUserItem">
        Account Details
      </a>
      <a href="/user/currentSubscriptions" className="navUserItem">
        Current Subscriptions
      </a>
      <a href="#orders" className="navUserItem">
        Order History
      </a>
      <a href="#services" className="navUserItem">
        Customer Care
      </a>
      <a href="/" className="navUserItem">
        Logout
      </a>
      {/* <a href="/register" className="nav_item_user account">logout</a> */}
    </div>
  );
}
export default NavBarUser;
