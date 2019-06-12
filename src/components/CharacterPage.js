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
  const [stereotype, setStereoType] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(10);
  const [javascript, setJavascript] = React.useState(10);
  const [sleepResistance, setSleepResistance] = React.useState(10);
  const [googleFu, setGoogleFu] = React.useState(10);
  const [hygiene, setHygiene] = React.useState(10);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function saveInfo() {
    props.stereotypeUpdate({
      stereotype,
      typingSpeed,
      javascript,
      sleepResistance,
      googleFu,
      hygiene
    });
  }

  return (
    <div>
      <h1>What coding stereotype are you?</h1>

      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary>
          <Typography>Brogrammer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
          <button
            onClick={() => {
              setStereoType("Brogrammer");
              setTypingSpeed(12);
              setJavascript(11);
              setSleepResistance(14);
              setGoogleFu(10);
              setHygiene(6);
            }}
          >
            Choose stereotype
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary>
          <Typography>Hacker</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
          <button
            onClick={() => {
              setStereoType("Hacker");
              setTypingSpeed(4);
              setJavascript(4);
              setSleepResistance(3);
              setGoogleFu(10);
              setHygiene(10);
            }}
          >
            Choose stereotype
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary>
          <Typography>Lazy Genius</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
          <button
            onClick={() => {
              setStereoType("Lazy Genius");
              setTypingSpeed(4);
              setJavascript(4);
              setSleepResistance(3);
              setGoogleFu(10);
              setHygiene(10);
            }}
          >
            Choose stereotype
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary>
          <Typography>Code Golfer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's someinfo about the thing</Typography>
          <button
            onClick={() => {
              setStereoType("Code Golfer");
              setTypingSpeed(4);
              setJavascript(4);
              setSleepResistance(3);
              setGoogleFu(10);
              setHygiene(10);
            }}
          >
            Choose stereotype
          </button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <button onClick={saveInfo}> Save Character Choice </button>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CharacterPage);
