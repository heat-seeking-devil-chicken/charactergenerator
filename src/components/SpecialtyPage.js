import React from "react";
import { Link } from "react-router-dom";

const SpecialtyPage = props => {
  return (
    <div>
      <p>Choose Your Specialty</p>
      <select>
        <option value="Front End Developer">Front End Developer</option>
        <option value="Back End Developer">Back End Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="DevOps">DevOps</option>
      </select>
      <br />
      <br />
      <Link to="/character">
        <button>{"<"}</button>
      </Link>
    </div>
  );
};

export default SpecialtyPage;
