import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducers from "../reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

import Header from "../components/Header";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import SpecialtyPage from "../components/SpecialtyPage";
import CharacterPage from "../components/CharacterPage";
import DescriptionPage from "../components/DescriptionPage";
import Login from "../components/Login";
import * as actions from "../actions/actions";

const store = createStore(reducers, composeWithDevTools());

const mapStateToProps = store => ({
  login: store.counterReducer.login,
});
const mapDispachToProps = dispatch => ({
  verifyLogin: payload => dispatch(actions.homeUpdate(payload))
})
class AppRouter extends React.Component {
  
  render(){
    return (
        <BrowserRouter>
          <div>
            
              <Switch>
                {this.props.login === false ?<Route path='/' verifyLogin ={this.props.verifyLogin} component={Login}/> : (
                <>
                <Header className="header" />
                <div className="main">
                  
                <Route path="/" exact={true} component={Home} />
                <Route path="/specialty" component={SpecialtyPage} />
                <Route path="/character" component={CharacterPage} />
                <Route path="/description" component={DescriptionPage} />
                <Route path="/*" component={ErrorPage} />
                
                </div>
                </>
                )}
                
              </Switch>
            </div>
          
        </BrowserRouter>
    )
  }  // 
};

export default connect(
  mapStateToProps,
  null
)(AppRouter);
