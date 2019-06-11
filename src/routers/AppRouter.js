import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../components/App";
import Header from "../components/Header";
import RacesPage from "../components/RacesPage";
import ClassesPage from "../components/ClassesPage";
import ErrorPage from "../components/ErrorPage";
import "../styles/index.css";

const AppRouter = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/races" component={RacesPage} />
        <Route path="/classes" component={ClassesPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
