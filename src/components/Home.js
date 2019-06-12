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
      name: "",
      advancementType: "Milestone",
      codingSkillsType: "Fixed"
    };
    this.randomName = this.randomName.bind(this);
    this.saveInfo = this.saveInfo.bind(this);
  }

  randomName() {
    const newName = names[Math.floor(Math.random() * 25)];
    const adjective = adjectives[Math.floor(Math.random() * 16)];
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
        {/* <img className="avatar" /> */}
        <h4>Character Name</h4>
        <input
          type="text"
          placeholder="ex. Silver the unSober"
          value={this.state.name}
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <button
          onClick={e => {
            this.saveInfo({ name: this.randomName() });
          }}
        >
          Randomized Name
        </button>
        <hr />

        <h2>Character Preferences</h2>
        <h4>Advancement Type:</h4>
        <p>Milestone-based character progression / XP-based progression</p>

        <select
          onChange={e => this.saveInfo({ advancementType: e.target.value })}
        >
          <option value="Milestone">Milestone</option>
          <option value="XP">XP</option>
        </select>

        <h4>Coding Skills Type</h4>
        <p>
          When leveling up, increase hit points (health) by the fixed value for
          your chosen class or manually enter a rolled value.
        </p>
        <select onChange={e => this.saveInfo({ specialty: e.target.value })}>
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
