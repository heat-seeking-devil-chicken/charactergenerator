import React from "react";
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapDispachToProps = dispatch => ({
    verifyLogin: (username, password) => dispatch(actions.verifyLogin(username, password))
  })

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        this.props.verifyLogin(username, password)
    }
  
    render() {
    
      return (
        <div className="login">
          <header className="login-header">
            <div>
              <p>username</p><input id='username'/>
              <p>password</p><input type="password" id='password'/>
              <button onClick={this.login}>Click me!</button>
            </div>
          </header>
        </div>
      );
    }
  
}

export default connect(
  null,
  mapDispachToProps
)(Login);
