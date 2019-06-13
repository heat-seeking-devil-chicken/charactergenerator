import React from "react";
import * as actions from "../actions/actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  homeUpdate: payload => dispatch(actions.homeUpdate(payload))
});

const names = {
  0: "Natalie",
  1: "Aidan",
  2: "Alyvia",
  3: "Alex",
  4: "Lil' Mikey",
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
  16: "Calm",
  17: "Wild",
  18: "Insane",
  19: "Dramatic",
  20: "Frail"
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      advancementType: "Milestone",
      codingSkillsType: "Fixed"
    };
    this.randomName = this.randomName.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  randomName() {
    const newName = names[Math.floor(Math.random() * 26)];
    const adjective = adjectives[Math.floor(Math.random() * 21)];
    this.setState({
      name: newName + " the " + adjective
    });
    return `${newName} the ${adjective}`;
  }

  saveInfo(payload) {
    this.props.homeUpdate(payload);
  }

  render() {
    return (
      <div className="home">
        <h1>Character Name</h1>
        <input
          className="input"
          type="text"
          placeholder="ex. Silver the SuperSober"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        <button
          className="button"
          onClick={e => {
            this.saveInfo({ name: this.randomName() });
          }}
        >
          Randomized Name
        </button>
        <hr />

        <h1>Character Preferences</h1>
        <h2>Education Progression Type:</h2>
        <h3>
          Self-taught progression / CS Degree Progression / CodeSmith
          Progression
        </h3>

        <select
          className="button"
          onChange={e => this.saveInfo({ advancementType: e.target.value })}
        >
          <option value="Self-Taught">Self-Taught</option>
          <option value="CS Degree">CS Degree</option>
          <option value="CodeSmith">CodeSmith</option>
        </select>

        <h2>Skill Upgrade Type:</h2>
        <h3>
          When leveling up, increase skill points by: <br /> -The fixed value
          for your chosen class <br /> -Manually enter a rolled value
        </h3>
        <select
          className="button"
          onChange={e => this.saveInfo({ specialty: e.target.value })}
        >
          <option value="Fixed">Fixed</option>
          <option value="Manual">Manual</option>
        </select>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Home);
