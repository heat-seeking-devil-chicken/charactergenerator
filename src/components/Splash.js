import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { textAlign } from "@material-ui/system";

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
    // margin: "0 auto"
    textAlign: "center"
  };

  const characterInfo = props.characters.map(obj => {
    return (
      <div style={characterCard}>
        <h2>{obj.name}</h2>
        <hr />
        <p>Stereotype: {obj.stereotype}</p>
        <p>Specialty: {obj.specialty}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Character List:</h1>
      {characterInfo}

      <Link to={"/preferences"}>
        <button>Create New Character</button>
      </Link>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Splash);
