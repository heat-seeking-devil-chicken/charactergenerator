import React from "react";
import { Link } from "react-router-dom";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

const Description = () => {
  const leftButton = {
    position: "absolute",
    top: "30%",
    left: "25%",
    padding: "7px 12px",
    border: "1px solid black"
  };

  const rightButton = {
    position: "absolute",
    top: "30%",
    right: "25%",
    padding: "7px 12px",
    border: "1px solid black"
  };

  return (
    <div>
      <Link to="/specialty">
        <button style={leftButton}>
          <ArrowBack />
        </button>
      </Link>
      <Link to="/">
        <button style={rightButton}>
          <ArrowForward />
        </button>
      </Link>
    </div>
  );
};

export default Description;
