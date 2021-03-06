import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";
import Header from "./Header";
import HomePage from "./HomePage";
import Reflex from "../components/GameList/Reflex";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/superhuman" exact component={HomePage} />
            <Route path="/superhuman/reflex" component={Reflex} />
          </Switch>
        </Router>
      </div>
    );
  }
}
