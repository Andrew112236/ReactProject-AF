import React from "react";
import Menu from "../Menu";
import { BiSolidUserCircle } from "react-icons/bi";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__block" />
      <Menu />
      <div className="username">
        <BiSolidUserCircle className="username__icon" />
      </div>
    </div>
  );
}

export default Sidebar;
