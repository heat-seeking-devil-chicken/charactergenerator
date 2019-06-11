import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";

const Header = () => {
  return (
    <>
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
        <NavLink activeClassName="is-active" className="navLink" to="/races">
          Races
        </NavLink>
        <NavLink activeClassName="is-active" className="navLink" to="/classes">
          Classes
        </NavLink>
      </div>
    </>
  );
};

export default Header;
