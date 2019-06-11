import React from "react";
import "./App.css";
import Counter from "./Counter"
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  count: 42
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }

    case "DECREMENT":
      return {
        count: state.count - 1
      }

    default:
      return state;
  }
}


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <h1>Character Generator App</h1>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}


export default App;
