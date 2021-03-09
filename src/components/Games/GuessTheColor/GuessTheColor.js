import React from "react";
import "../../../Css/GuessTheColor.css";
import GuessTheColorGame from "./GuessTheColorGame";
import GuessGameInfo from "./GuessGameInfo";
var h, wh, timeTaken;
class GuessTheColor extends React.Component {
  state = { renderInfo: true, gameOver: false };
  handler = (renderInfo, gameOver, timeFromGuessTheColorGame) => {
    timeTaken = timeFromGuessTheColorGame;
    this.setState({ renderInfo, gameOver });
  };
  componentDidMount() {
    try {
      h = document.getElementById("navbar").clientHeight;
      wh = window.innerHeight;
      this.forceUpdate();
    } catch (err) {}
  }

  render() {
    return (
      <>
        <div
          className="container-fluid"
          id="reflex-area"
          style={{
            background: "#2b87d1",
            height: wh - h + "px",
          }}
        >
          <div
            id="levelDiv"
            className="row"
            style={{ height: "25%", justifyContent: "center" }}
          >
            <p id="timePara" style={{ color: "white" }}></p>
          </div>
          <div className="row" style={{ height: "50%" }}>
            {this.state.renderInfo && (
              <GuessGameInfo
                handler={this.handler}
                iconStatus={<i className="bi bi-palette-fill" />}
                gameText="Guess The Color"
                infoText="Select the text color. Don't get trapped by the text."
                buttonText="Start"
              />
            )}
            {this.state.gameOver && (
              <GuessGameInfo
                handler={this.handler}
                iconStatus={<i className="bi bi-emoji-sunglasses-fill" />}
                gameText="You made it!"
                infoText={`Time Taken: ${timeTaken} seconds `}
                buttonText="Start Again"
              />
            )}
            {!this.state.gameOver && !this.state.renderInfo && (
              <GuessTheColorGame handler={this.handler} />
            )}
          </div>
          <div
            className="row"
            style={{ height: "25%", justifyContent: "center" }}
          >
            <p id="levelPara" style={{ color: "white" }}></p>
          </div>
        </div>
      </>
    );
  }
}
export default GuessTheColor;
