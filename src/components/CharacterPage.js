import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const CharacterPage = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

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
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default CharacterPage;
