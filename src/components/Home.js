import React from "react";
import { Link } from "react-router-dom";
import { ArrowForward } from "@material-ui/icons";

const names = {
  0: "Natalie",
  1: "Aidan",
  2: "Alyvia",
  3: "Alex",
  4: "Mikey",
  5: "Sam",
  6: "Jay",
  7: "Johnny",
  8: "David",
  9: "Julie",
  10: "Tian",
  11: "Jonathan",
  12: "Karen",
  13: "Sam",
  14: "Parker",
  15: "Tim",
  16: "Natyln",
  17: "Roy",
  18: "Keith",
  19: "Mike",
  20: "Raffi",
  21: "Jason",
  22: "Steven",
  23: "Sam",
  24: "Jaime",
  25: "Chet"
};

const adjectives = {
  0: "Patient",
  1: "Swift",
  2: "Googler",
  3: "HelpDesk",
  4: "Know-it-all",
  5: "Jester",
  6: "Loud",
  7: "Bold",
  8: "Strong",
  9: "Small",
  10: "Speed Typer",
  11: "MDN Expert",
  12: "Tall",
  13: "Sober",
  14: "Drunk",
  15: "Crazy",
  16: "Calm"
  // 17:
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.randomName = this.randomName.bind(this);
  }

  randomName() {
    const newName = names[Math.floor(Math.random() * 25)];
    const adjective = adjectives[Math.floor(Math.random() * 16)];
    this.setState({
      name: newName + " the " + adjective
    });
    console.log(this.state.name);
  }

  render() {
    const rightButton = {
      position: "absolute",
      top: "30%",
      right: "25%",
      padding: "7px 12px",
      border: "1px solid black"
    };

    return (
      <div className="home">
        <img className="avatar" />
        <h4>Character Name</h4>
        <input
          type="text"
          placeholder="ex. Silver the unSober"
          value={this.state.name}
          onChange={e => this.setState({ name: e.target.value })}
        />
        <button onClick={e => this.randomName()}>Randomized Name</button>
        <hr />

        <h2>Character Preferences</h2>
        <h4>Advancement Type:</h4>
        <p>Milestone-based character progression / XP-based progression</p>
        {/*not sure if it makes sense to change progression type to something more code-related 
      <select>
        <option value="Feature completion (Milestone)">Feature completion</option>
        <option value="Lines of code committed (XP)">Lines of code committed</option>
      </select> */}
        <select>
          <option value="Milestone">Milestone</option>
          <option value="XP">XP</option>
        </select>

        <h4>Coding Skills Type</h4>
        <p>
          When leveling up, increase hit points (health) by the fixed value for
          your chosen class or manually enter a rolled value.
        </p>
        <select>
          <option value="Fixed">Fixed</option>
          <option value="Manual">Manual</option>
        </select>

        <Link to="/character">
          <button style={rightButton}>
            <ArrowForward />
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
