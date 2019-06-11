import React from "react";
import { Link } from "react-router-dom";

class CharacterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
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

        <br />
        <br />
        <Link to="/">
          <button>{"<"}</button>
        </Link>
        <Link to="/specialty">
          <button>{">"}</button>
        </Link>
      </div>
    );
  }
}

export default CharacterPage;
