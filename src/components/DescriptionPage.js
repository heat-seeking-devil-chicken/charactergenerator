import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
    backgroundColor: "lightGray",
    padding: "5px 0 35px",
    marginTop: "15px"
  };

  const paper = {
    padding: "10px 5px",
    height: "50px",
    width: "120px",
    textAlign: "center",
    backgroundColor: "cornflowerBlue",
    color: "white"
  };

  const upperPaper = {
    padding: "5px",
    height: "75px",
    width: "120px",
    textAlign: "center",
    backgroundColor: "cornflowerBlue",
    color: "white"
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
        <Grid item>
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
            <Grid item xs={6}>
              <Paper style={upperPaper}>
                <h3>{props.codingSkillsType}</h3>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
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
      <div style={bodyStyle}>
        <button id="saveToServer"> Save To Server </button>
      </div>
    </div>

  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
