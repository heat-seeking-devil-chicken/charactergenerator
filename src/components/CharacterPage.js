import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

const CharacterPage = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [typingSpeed, setTypingSpeed] = React.useState(10);
  const [javascript, setJavascript] = React.useState(10);
  const [sleepResistance, setSleepResistance] = React.useState(10);
  const [googleFu, setGoogleFu] = React.useState(10);
  const [hygiene, setHygiene] = React.useState(10);

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

  console.log("typingSpeed", typingSpeed);
  console.log("javascript", javascript);
  console.log("sleepResistance", sleepResistance);
  console.log("googleFu", googleFu);
  console.log("hygiene", hygiene);

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
          <Typography>
            Here's someinfo about the thing
            <br />
            here's something else
          </Typography>
          <button
            onClick={() => {
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
    </div>
  );
};

export default CharacterPage;
