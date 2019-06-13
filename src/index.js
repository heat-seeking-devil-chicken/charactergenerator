import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AppRouter from "./routers/AppRouter";
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>,
document.getElementById("root"));
