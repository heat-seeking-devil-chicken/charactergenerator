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

  function saveInfo(payload) {
    props.specialtyUpdate(payload);
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
        onClick={() => {
          saveInfo({ specialty: "Front End Developer" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Front End Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        onClick={() => {
          saveInfo({ specialty: "Back End Developer" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Back End Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        onClick={() => {
          saveInfo({ specialty: "Full Stack Developer" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Full Stack Developer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        onClick={() => {
          saveInfo({ specialty: "DevOps Engineer" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>DevOps Engineer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialtyPage);
