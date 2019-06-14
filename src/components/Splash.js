import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../styles/index.css";

import brogrammer from "../styles/images/brogrammer.png";
import hacker from "../styles/images/hacker.jpg";
import lazy from "../styles/images/lazy-genius.jpg";
import golfer from "../styles/images/code-golfer.jpg";
import ninja from "../styles/images/code-ninja.jpg";

const mapStateToProps = store => ({
  characters: store.counterReducer.characters
});

const Splash = props => {
  console.log(props.characters);

  const characterCard = {
    backgroundColor: "#FFFAF0",
    border: "1px solid black",
    color: "black",
    width: "250px",
    margin: "25px auto 0",
    textAlign: "center"
  };

  const characters = {
    textAlign: "center",
    display: "flex"
  };

  const image = {
    width: "120px",
    height: "120px"
  };

  const characterInfo = props.characters.map(obj => {
    return (
      <div style={characterCard}>
        <h2>{obj.name}</h2>
        <img style={image} src={brogrammer} />
        <hr />
        <p>
          <strong>Stereotype</strong>: {obj.stereotype}
        </p>
        <p>
          <strong>Specialty</strong>: {obj.specialty}
        </p>
      </div>
    );
  });

  return (
    <>
      <div style={characters}>
        <h1>Character List:</h1>
        {characterInfo}
      </div>

      <div style={{ textAlign: "center", margin: "25px" }}>
        <Link to={"/preferences"}>
          <button className="button">Create New Character</button>
        </Link>
      </div>
    </>
  );
};

export default connect(
  mapStateToProps,
  null
)(Splash);
