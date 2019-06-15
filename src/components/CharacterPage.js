import React from "react";
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import "../styles/index.css";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const mapDispatchToProps = dispatch => ({
  stereotypeUpdate: payload => dispatch(actions.stereotypeUpdate(payload))
});

const CharacterPage = props => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
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

  const attributes = [
    "Typing Speed",
    "JavaScript",
    "Sleep Resistance",
    "Google Fu",
    "Hygiene"
  ];

  const characterAttr = arr => {
    return arr.map((el, idx) => {
      return [attributes[idx], el];
    });
  };

  const characterComp = arr => {
    return arr.map(el => {
      return (
        <Grid item key={el[0]}>
          <Paper style={paper}>
            {el[0]} <br /> {el[1]}
          </Paper>
        </Grid>
      );
    });
  };

  const brogrammerAttr = characterAttr(["+2", "+1", "+4", "-2", "-4"]);
  const brogrammerComp = characterComp(brogrammerAttr);

  const hackerAttr = characterAttr(["+5", "+3", "+0", "-2", "-6"]);
  const hackerComp = characterComp(hackerAttr);

  const lazyAttr = characterAttr(["-3", "+5", "-6", "+3", "-2"]);
  const lazyComp = characterComp(lazyAttr);

  const golferAttr = characterAttr(["-6", "+4", "+4", "+3", "-1"]);
  const golferComp = characterComp(golferAttr);

  const ninjaAttr = characterAttr(["-3", "+4", "-1", "+4", "+2"]);
  const ninjaComp = characterComp(ninjaAttr);

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
          <Typography>
            <strong>Brogrammer</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The Brogrammer sips on protein shakes and lifts weights between
            coding sessions, brah.
          </Typography>
        </ExpansionPanelDetails>
        <Grid container justify="center" spacing={3}>
          {brogrammerComp}
        </Grid>
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
          <Typography>
            <strong>Hacker</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            He's bypassing the triple firewall and hacking into your mainframe.
            Ok - he's in.
          </Typography>
        </ExpansionPanelDetails>
        <Grid container justify="center" spacing={3}>
          {hackerComp}
        </Grid>
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
          <Typography>
            <strong>Lazy Genius</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            The lazy genius may show up at 11:30 in his unwashed sweatpants -
            but he'll also tell you exactly why your code is buggy.
          </Typography>
        </ExpansionPanelDetails>
        <Grid container justify="center" spacing={3}>
          {lazyComp}
        </Grid>
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
          <Typography>
            <strong>Code Golfer</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Oh, you finally solved that algorithm? I bet I can do it in 3 lines.
          </Typography>
        </ExpansionPanelDetails>
        <Grid container justify="center" spacing={3}>
          {golferComp}
        </Grid>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Ninja",
            typingSpeed: 7,
            javascript: 14,
            sleepResistance: 9,
            googleFu: 14,
            hygiene: 12
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>
            <strong>Ninja</strong>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Ninjas work alone, and they do it with precision and speed.
          </Typography>
        </ExpansionPanelDetails>
        <Grid container justify="center" spacing={3}>
          {ninjaComp}
        </Grid>
      </ExpansionPanel>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CharacterPage);
