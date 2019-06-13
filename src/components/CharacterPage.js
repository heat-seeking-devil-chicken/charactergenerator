import React from "react";
import * as actions from "../actions/actions";
import { connect } from "react-redux";
import "../styles/index.css"

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
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
          <Typography>The Brogrammer sips on protein shakes and lifts weights between coding sessions, brah.</Typography>
        </ExpansionPanelDetails>
        <div className="attributeBox">
          <strong> Attributes:</strong>
          <br />
          <Grid>
            <Card> <strong className="specialtyAttr"> Typing Speed:</strong>: +2 </Card>
            <Card> <strong className="specialtyAttr"> JavaScript:</strong>: +1 </Card>
            <Card> <strong className="specialtyAttr"> Sleep Resistance:</strong>: +4 </Card>
            <Card> <strong className="specialtyAttr"> Google Fu:</strong>: -2 </Card>
            <Card> <strong className="specialtyAttr"> Hygiene:</strong>: -4 </Card>
          </Grid>
        </div>
        <span style={{ height: "100px", width: "100px", backgroundColor: "red" }}></span>

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
          <Typography>He's bypassing the triple firewall and hacking into your mainframe. Ok - he's in.</Typography>
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
          <Typography>The lazy genius may show up at 11:30 in his unwashed sweatpants - but he'll also tell you exactly why your code is buggy.</Typography>
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
          <Typography>Oh, you finally solved that algorithm? I bet I can do it in 3 lines.</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        onClick={() => {
          props.stereotypeUpdate({
            stereotype: "Ninja",
            typingSpeed: 15,
            javascript: 16,
            sleepResistance: 16,
            googleFu: 12,
            hygiene: 10
          });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Ninja</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Ninjas work alone, and they do it with precision and speed.</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div >
  );
};

export default connect(
  null,
  mapDispatchToProps
)(CharacterPage);
