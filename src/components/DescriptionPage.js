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
  const [spacing, setSpacing] = React.useState(2);

  const skillNums = [];

  for (const prop in props.characterSkills) {
    skillNums.push(
      <Grid key={prop}>
        <Paper>{`${prop}: ${props.characterSkills[prop]}`}</Paper>
      </Grid>
    );
  }

  return (
    <div>
      <p>{props.name}</p>
      <p>{`Advancement Type: ${props.advancementType}`}</p>
      <p>{`Coding Skills Type: ${props.codingSkillsType}`}</p>
      <p>{`Stereotype: ${props.stereotype}`}</p>
      <p>{`Specialty: ${props.specialty}`}</p>
      <p>Skills: </p>
      <Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {skillNums}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Description);
