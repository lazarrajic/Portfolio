import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaHammer,
  FaChalkboardTeacher,
  FaPhone,
} from "react-icons/fa";
import "./Sidebar.css";
import profileImage from "../../images/unnamed.png";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();

  function toggleSidebar() {
    setCollapsed(!collapsed);
  }
  // function isActive(to) {
  //   return location.pathname === to ? "active" : "";
  // }

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {collapsed ? <FaBars /> : <FaTimes />}
      </button>
      {!collapsed && (
        <div className="profileImageContainer">
          <img className="profileImage" src={profileImage} alt="Profile" />
          <div style={{ fontWeight: "700" }}>LAZAR RAJIC</div>
        </div>
      )}
      <ul className={`menu ${collapsed ? "menu-collapsed" : ""}`}>
        <li>
          <NavLink className="link" to="/">
            <div className="menu-item">
              <FaHome className="icon" to="/" />
              <h3 className="name">Home</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="skills">
            <div className="menu-item">
              <FaHammer className="icon" />
              <h3 className="name">Skills</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="projects">
            <div className="menu-item">
              <FaChalkboardTeacher className="icon" />
              <h3 className="name">Projects</h3>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="contact">
            <div className="menu-item">
              <FaPhone className="icon" />
              <h3 className="name">Contact</h3>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
