import React from "react";
// import "../styles/index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <img className="avatar" />
      <h4>Character Name</h4>
      <input type="text" placeholder="ex. Silver the Sober" />
      <button>Randomized Name</button>
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

      <br />
      <br />
      <Link to="/character">
        <button>{">"}</button>
      </Link>
    </div>
  );
}

export default Home;
