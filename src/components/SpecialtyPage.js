import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const SpecialtyPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h1>Choose Your Specialty</h1>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
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
      >
        <ExpansionPanelSummary>
          <Typography>DevOps Engineer</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Here's some info about the thing</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      {/* <div>
        <Link to="/character">
          <button style={leftButton}>
            <ArrowBack />
          </button>
        </Link>
        <Link to="/description">
          <button style={rightButton}>
            <ArrowForward />
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default SpecialtyPage;
