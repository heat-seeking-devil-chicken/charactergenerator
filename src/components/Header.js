import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1 className="headerH1">Coder Character Builder</h1>
      </div>
      <div className="headerNav">
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/"
          exact={true}
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/character"
        >
          Character
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/specialty"
        >
          Specialty
        </NavLink>
        <NavLink
          activeClassName="is-active"
          className="navLink"
          to="/description"
        >
          Description
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
