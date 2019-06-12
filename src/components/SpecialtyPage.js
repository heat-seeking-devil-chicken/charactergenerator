import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

import * as actions from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  specialtyUpdate: payload => dispatch(actions.specialtyUpdate(payload))
});

const SpecialtyPage = props => {
  const [expanded, setExpanded] = React.useState(false);
  const [specialty, setSpecialty] = React.useState("");

  function saveInfo() {
    props.specialtyUpdate({
      specialty
    });
  }

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>Choose Your Specialty</h1>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          onClick={() => {
            setSpecialty("Front-End Developer");
          }}
        >
          <Typography>Front End Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
          <button
            onClick={() => {
              setSpecialty("Front-End Developer");
            }}
          >
            Select Specialty
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary>
          <Typography>Back End Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
          <button
            onClick={() => {
              setSpecialty("Back-End Developer");
            }}
          >
            Select Specialty
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary>
          <Typography>Full Stack Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
          <button
            onClick={() => {
              setSpecialty("Full-Stack Developer");
            }}
          >
            Select Specialty
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary>
          <Typography>DevOps Engineer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
          <button
            onClick={() => {
              setSpecialty("DevOps Engineer");
            }}
          >
            Select Specialty
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <button onClick={saveInfo}>Save Specialty</button>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialtyPage);
