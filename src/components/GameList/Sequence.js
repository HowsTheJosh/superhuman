import React from "react";
import "../../Css/Sequence.css";
import SequenceMemoryGame from "./SequenceMemoryGame";
import SeqGameInfo from "./SeqGameInfo";
var h, wh, levels;
class Sequence extends React.Component {
  state = { renderInfo: true, gameOver: false };
  handler = (renderInfo, gameOver, levelsFromSequenceMemoryGame) => {
    levels = levelsFromSequenceMemoryGame;
    this.setState({ renderInfo, gameOver });
  };
  componentDidMount() {
    h = document.getElementById("navbar").clientHeight;

    wh = window.innerHeight;
    this.forceUpdate();
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
            <p id="levelPara" style={{ color: "white" }}></p>
          </div>
          <div className="row" style={{ height: "50%" }}>
            {this.state.renderInfo && (
              <SeqGameInfo
                handler={this.handler}
                iconStatus={<i className="bi bi-grid-fill" />}
                gameText="Sequence Memory Test"
                infoText="Memorize the Sequence."
                buttonText="Start"
              />
            )}
            {this.state.gameOver && (
              <SeqGameInfo
                handler={this.handler}
                iconStatus={<i className="bi bi-emoji-dizzy-fill" />}
                gameText="Game Over"
                infoText={`${levels} levels cleared`}
                buttonText="Start Again"
              />
            )}
            {!this.state.gameOver && !this.state.renderInfo && (
              <SequenceMemoryGame handler={this.handler} />
            )}
          </div>
          <div
            className="row"
            style={{ height: "25%", justifyContent: "center" }}
          >
            <p id="turnPara" style={{ color: "white" }}></p>
          </div>
        </div>
      </>
    );
  }
}
export default Sequence;
