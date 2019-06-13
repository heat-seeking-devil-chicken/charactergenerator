import React from 'react';
import logo from './logo.svg';
import './App.css';
import { logicalExpression } from '@babel/types';
import axios from 'axios';

class App extends React.Component {
  login(){
      const crediential = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };
      console.log(crediential);
      axios.post('/login', crediential)
      .then((response) => {
        console.log(response.data.rows);
      })
      .catch((err) => {
        console.log('err:' , err);
      })
      // fetch('/login',{
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   method: 'POST',
      //   body: JSON.stringify(crediential)
      // }).then(res => {
      //   // console.log(res)
      //   // console.log(res.text())
      //   // console.log(res.json())
      //   // console.log(JSON.parse(res))
      //   return res.json()
      //   // return JSON.parse(res)
      // }).then(data => {
      //   console.log('data',data)
      // }).catch(err => {
      //   console.log('err massage!', err)
      // })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <p>username</p><input id='username'/>
            <p>password</p><input type="password" id='password'/>
            <button onClick={this.login}>CLick me!</button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
