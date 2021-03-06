import React, { Component } from "react";
import Banner from "./Banner";
import GameList from "./GameList";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <GameList />
      </div>
    );
  }
}
