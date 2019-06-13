import React from "react";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const mapDispatchToProps = dispatch => ({
  stereotypeUpdate: payload => dispatch(actions.stereotypeUpdate(payload))
});

const CharacterPage = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>What coding stereotype are you?</h1>

      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Brogrammer",
            typingSpeed: 12,
            javascript: 11,
            sleepResistance: 14,
            googleFu: 8,
            hygiene: 6
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Brogrammer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Hacker",
            typingSpeed: 15,
            javascript: 13,
            sleepResistance: 10,
            googleFu: 8,
            hygiene: 4
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Hacker</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Lazy Genius",
            typingSpeed: 7,
            javascript: 15,
            sleepResistance: 4,
            googleFu: 13,
            hygiene: 8
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Lazy Genius</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Code Golfer",
            typingSpeed: 6,
            javascript: 16,
            sleepResistance: 14,
            googleFu: 13,
            hygiene: 9
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Code Golfer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CharacterPage);
