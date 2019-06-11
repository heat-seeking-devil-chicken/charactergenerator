import React from "react";
import { Link } from "react-router-dom";

const RacesPage = props => {
  return (
    <div>
      <p>Choose A Race</p>
      <Link to="/">Go home</Link>

      <Link to="/classes">Go to classes</Link>
    </div>
  );
};

export default RacesPage;
