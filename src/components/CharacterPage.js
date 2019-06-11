import React from "react";
import { Link } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { ArrowForward, ArrowBack } from "@material-ui/icons";

class CharacterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
    const leftButton = {
      position: "absolute",
      top: "30%",
      left: "25%",
      padding: "7px 12px",
      border: "1px solid black"
    };

    const rightButton = {
      position: "absolute",
      top: "30%",
      right: "25%",
      padding: "7px 12px",
      border: "1px solid black"
    };
    return (
      <div>
        <p>What coding stereotype are you?</p>
        <select>
          <option value="Brogrammer">Brogrammer</option>
          <option value="Former CS Major">Former CS Major</option>
          <option value="Stack overflow warrior">Stack Overflow Warrior</option>
          <option value="Hackerman/woman">Hacker</option>
          <option value="Code Golfer">Code Golfer</option>
          <option value="Lazy Genius">Lazy Genius</option>
          <option value="Coffee Snob">Coffee Snob</option>
        </select>

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography>Brogrammer</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Here's someinfo about the thing</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography>Hacker</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Here's someinfo about the thing</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography>Lazy Genius</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Here's someinfo about the thing</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel>
          <ExpansionPanelSummary>
            <Typography>Code Golfer</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>Here's someinfo about the thing</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <br />
        <br />
        <Link to="/">
          <button style={leftButton}>
            <ArrowBack />
          </button>
        </Link>
        <Link to="/specialty">
          <button style={rightButton}>
            <ArrowForward />
          </button>
        </Link>
      </div>
    );
  }
}

export default CharacterPage;
