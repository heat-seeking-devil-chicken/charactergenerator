import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";

import brogrammer from "../styles/images/brogrammer.png";
import hacker from "../styles/images/hacker.jpg";
import lazy from "../styles/images/lazy-genius.jpg";
import golfer from "../styles/images/code-golfer.jpg";
import ninja from "../styles/images/code-ninja.jpg";

const mapStateToProps = store => ({
  name: store.counterReducer.name,
  advancementType: store.counterReducer.advancementType,
  codingSkillsType: store.counterReducer.codingSkillsType,
  stereotype: store.counterReducer.stereotype,
  specialty: store.counterReducer.specialty,
  characterSkills: store.counterReducer.characterSkills
});

const Description = props => {
  const bodyStyle = {
    textAlign: "center",
    border: "1px solid black",
    backgroundColor: "#FFFAF0",
    padding: "5px 0 35px",
    marginTop: "15px",
    color: "black",
    borderRadius: "3px"
  };

  const paper = {
    padding: "10px 5px",
    height: "50px",
    width: "120px",
    textAlign: "center",
    backgroundColor: "cornflowerBlue",
    color: "white",
    border: "0.5px solid black"
  };

  const upperPaper = {
    padding: "5px",
    height: "75px",
    width: "120px",
    textAlign: "center",
    backgroundColor: "cornflowerBlue",
    color: "white",
    border: "0.5px solid black"
  };

  const bigAvatar = {
    margin: "60px auto 0",
    width: "250px",
    height: "250px"
  };

  const skills = [
    "Typing Speed",
    "JavaScript",
    "Sleep Resistance",
    "Google Fu",
    "Hygiene"
  ];

  let skillsArr = [];

  for (const prop in props.characterSkills) {
    skillsArr.push(props.characterSkills[prop]);
  }

  skillsArr = skillsArr.map((el, idx) => [skills[idx], el]);

  const skillNums = skillsArr.map(el => {
    return (
      <Grid item key={el[0]}>
        <Paper style={paper}>
          {el[0]} <br /> {el[1]}
        </Paper>
      </Grid>
    );
  });

  return (
    <div style={bodyStyle}>
      <h1>{props.name}</h1>
      <Grid container>
        <Grid item xs={4}>
          <h1>Advancement Type: </h1>
          <Grid container justify="center">
            <Grid item>
              <Paper style={upperPaper}>
                <h3>{props.advancementType}</h3>
              </Paper>
            </Grid>
          </Grid>
          <h1>Coding Skills Type: </h1>
          <Grid container justify="center">
            <Grid item>
              <Paper style={upperPaper}>
                <h3>{props.codingSkillsType}</h3>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          {props.stereotype === "Brogrammer" ? (
            <Avatar alt="Programmer" style={bigAvatar} src={brogrammer} />
          ) : props.stereotype === "Hacker" ? (
            <Avatar alt="Hacker" style={bigAvatar} src={hacker} />
          ) : props.stereotype === "Lazy Genius" ? (
            <Avatar alt="Lazy-Genius" style={bigAvatar} src={lazy} />
          ) : props.stereotype === "Code Golfer" ? (
            <Avatar alt="Code-Golfer" style={bigAvatar} src={golfer} />
          ) : props.stereotype === "Ninja" ? (
            <Avatar alt="Code-Ninja" style={bigAvatar} src={ninja} />
          ) : null}
        </Grid>

        <Grid item xs={4}>
          <h1>Stereotype:</h1>
          <Grid container justify="center">
            <Grid item>
              <Paper style={upperPaper}>
                <h3>{props.stereotype}</h3>
              </Paper>
            </Grid>
          </Grid>
          <h1>Specialty:</h1>
          <Grid container justify="center">
            <Grid item>
              <Paper style={upperPaper}>
                <h3>{props.specialty}</h3>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <h1>Skills </h1>
      <Grid container justify="center" spacing={3}>
        {skillNums}
      </Grid>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
