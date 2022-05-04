import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/brand_logo.png";

function TopBar(props) {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="brand_logo">
          <img className="brand_logo__image" src={logo} alt="" />
          <label className="brand_logo__label">Smart Bin Monitor</label>
        </div>
        <div>
          <ul className="list nav-list">
            <li className="list__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/dash-board">Dashboard</NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/manage-zone">Manage Zone</NavLink>
            </li>
            <li className="list__item">
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
