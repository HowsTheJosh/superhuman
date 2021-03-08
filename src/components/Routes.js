import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";
import Header from "./Header";
import HomePage from "./HomePage";
import Reaction from "../components/GameList/Reaction";
import Sequence from "../components/GameList/Sequence";
export default class Routes extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/superhuman" exact component={HomePage} />
            <Route path="/superhuman/reaction" component={Reaction} />
            <Route path="/superhuman/sequence-memory" component={Sequence} />
          </Switch>
        </Router>
      </div>
    );
  }
}
