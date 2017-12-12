import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers/";


ReactDOM.render(<App />, document.getElementById("root"));