import React from "react";
import { Link } from "react-router-dom";
const Splash = props => {
  return (
    <div>
      <h1>splash</h1>
      <p>here's your info</p>
      <Link to={"/preferences"}>
        <button>Create New Character</button>
      </Link>
    </div>
  );
};

export default Splash;
