import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./History";
import Header from "./Header";
import HomePage from "./HomePage";
import Reaction from "./Games/Reaction/Reaction";
import Sequence from "../components/Games/SequenceMemory/Sequence";
import GuessTheColor from "../components/Games/GuessTheColor/GuessTheColor";
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
            <Route
              path="/superhuman/guess-the-color"
              component={GuessTheColor}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
