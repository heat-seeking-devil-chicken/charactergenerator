import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Header from "../components/Header";
import SpecialtyPage from "../components/SpecialtyPage";
import CharacterPage from "../components/CharacterPage";
import DescriptionPage from "../components/DescriptionPage";
import ErrorPage from "../components/ErrorPage";
// import "../styles/index.css";

const AppRouter = () => (
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
);

export default AppRouter;
