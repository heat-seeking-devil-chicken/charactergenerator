import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import "../styles/index.css";

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
          saveInfo({ specialty: "Front End" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Front End Developer</Typography>
        </ExpansionPanelSummary>
        <div className="expansionPanel">
          <strong>Proficiencies</strong>
          <br />
          <br />
          <strong>Clothing</strong>: Plaid Shirts, Jean Jackets, Redwing Boots,
          Beanies
          <br />
          <br />
          <strong>Monitor</strong>: SUPER-ULTRAWIDE, ULTRAWIDE, Regular, Tablet
          <br />
          <br />
          <strong>Keyboard</strong>: Whatever Steven is currently using
          <br />
          <br />
          <strong>Tools</strong>: Macbook, display cord that fits any monitor,
          JUUL
        </div>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        onClick={() => {
          saveInfo({ specialty: "Back End" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Back End Developer</Typography>
        </ExpansionPanelSummary>
        <div className="expansionPanel">
          <strong>Proficiencies</strong>
          <br />
          <br />
          <strong>Clothing</strong>: Hoodies, Long Socks, Boots, Tevas
          <br />
          <br />
          <strong>Monitor</strong>: ULTRAWIDE, Regular
          <br />
          <br />
          <strong>Keyboard</strong>: Whatever Steven is currently using
          <br />
          <br />
          <strong>Tools</strong>: Macbook, display cord that fits any monitor,
          JUUL
        </div>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        onClick={() => {
          saveInfo({ specialty: "Full Stack" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>Full Stack Developer</Typography>
        </ExpansionPanelSummary>
        <div className="expansionPanel">
          <strong>Proficiencies</strong>
          <br />
          <br />
          <strong>Clothing</strong>:
          <br />
          <br />
          <strong>Monitor</strong>: ULTRAWIDE, Regular, Tablet
          <br />
          <br />
          <strong>Keyboard</strong>: RGB Mechanical, Laptop, Wired
          <br />
          <br />
          <strong>Tools</strong>: Macbook Pro, external harddrive, CS Textbooks
        </div>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        onClick={() => {
          saveInfo({ specialty: "DevOps" });
        }}
      >
        <ExpansionPanelSummary>
          <Typography>DevOps Engineer</Typography>
        </ExpansionPanelSummary>
        <div className="expansionPanel">
          <strong>Proficiencies</strong>
          <br />
          <br />
          <strong>Clothing</strong>: Jean Shorts, Flip Flops, Hemp Bracelets
          <br />
          <br />
          <strong>Monitor</strong>: Regular, Laptop Screen
          <br />
          <br />
          <strong>Keyboard</strong>: Laptop, Wireless
          <br />
          <br />
          <strong>Tools</strong>: Hackysack, AWS Free-Tier Login, Wireless
          Mouse, Chromecast
        </div>
      </ExpansionPanel>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(SpecialtyPage);
