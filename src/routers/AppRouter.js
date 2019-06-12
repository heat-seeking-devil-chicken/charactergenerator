import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import SpecialtyPage from "../components/SpecialtyPage";
import CharacterPage from "../components/CharacterPage";
import DescriptionPage from "../components/DescriptionPage";
import ErrorPage from "../components/ErrorPage";
import Counter from "../Counter.js";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
// import "../styles/index.css";

const store = createStore(reducers, composeWithDevTools());

const AppRouter = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header className="header" />
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/specialty" component={SpecialtyPage} />
            <Route path="/character" component={CharacterPage} />
            <Route path="/description" component={DescriptionPage} />
            <Route path="/*" component={ErrorPage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
