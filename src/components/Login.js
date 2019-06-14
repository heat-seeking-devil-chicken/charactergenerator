import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import "../styles/index.css";

const mapDispachToProps = dispatch => ({
  verifyLogin: (username, password) =>
    dispatch(actions.verifyLogin(username, password))
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    this.props.verifyLogin(username, password);
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login">
          <h1>Coding Character Builder</h1>
          <hr />
          <h1>Username</h1>
          <input id="username" className="input" />
          <h1>Password</h1>
          <input type="password" id="password" className="input" />
          <br />
          <button className="button" onClick={this.login}>
            Login Here!
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispachToProps
)(Login);
