import React, { Component } from "react";
import "../../Css/Reaction.css";
var start = 0,
  green = 0,
  setTo = null,
  t0 = 0,
  t1 = 0,
  gCount = 0,
  avgRT = 0;
export default class Reflex extends Component {
  state = { renderBtn: null };
  componentDidMount() {
    window.scrollTo(0, document.getElementById("root"));
  }
  startReflex() {
    gCount = gCount + 1;
    t0 = performance.now();
    green = 1;
    document.getElementById("reflex-area").style.background = "#4bdb6a";
    document.getElementById(
      "game-text"
    ).innerHTML = `<i class="bi bi-hand-index-fill"></i> <br/>Click!`;
  }
  runReflex() {
    if (!start && !green && !this.state.renderBtn) {
      document.getElementById("avgtext").innerHTML = "";
      document.getElementById("infotext").innerHTML = "";
      start = 1;
      document.getElementById("reflex-area").style.background = "#ce2636";
      document.getElementById(
        "game-text"
      ).innerHTML = `<i class="bi bi-hourglass-split"></i> <br/>Wait for green`;
      var num = Math.floor(Math.random() * 500 + 500);
      setTo = setTimeout(this.startReflex, num);
      console.log(num);
    } else if (start && !green) {
      clearTimeout(setTo);
      start = 0;
      document.getElementById("reflex-area").style.background = "#2b87d1";
      document.getElementById(
        "game-text"
      ).innerHTML = `<i class="bi bi-shield-fill-exclamation"></i> <br/>Clicked too soon!`;
      document.getElementById("infotext").innerHTML = "Click to try again";
    } else if (start && green) {
      t1 = performance.now();
      document.getElementById("reflex-area").style.background = "#2b87d1";
      document.getElementById(
        "game-text"
      ).innerHTML = `<i class="bi bi-clock-fill"></i> <br/> ${Math.floor(
        t1 - t0
      )} ms`;
      document.getElementById("infotext").innerHTML = "Click to continue";
      avgRT = avgRT + Math.floor(t1 - t0);
      green = 0;
      start = 0;
      if (gCount == 2) {
        gCount = 0;
        start = 0;
        avgRT = avgRT / 2;
        this.setState({ renderBtn: true });
        document.getElementById(
          "avgtext"
        ).innerHTML = `Average Reflex Time ${avgRT.toFixed(2)}`;
        document.getElementById("infotext").innerHTML = "";
        avgRT = 0;
      }
    }
  }
  render() {
    return (
      <>
        <div
          onClick={() => this.runReflex()}
          className="container-fluid"
          id="reflex-area"
          style={{
            background: "#2b87d1",
            height: "93vh",
          }}
        >
          <div className="row" style={{ height: "25%" }}></div>
          <div className="row" style={{ height: "50%" }}>
            <div className="col-0 col-lg-2"></div>
            <div
              className="col-12 col-lg-8"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center flex-column bd-highlight ">
                <div
                  id="game-text"
                  className="p-2 bd-highlight"
                  style={{ textAlign: "center" }}
                >
                  <i className="bi bi-lightning-charge-fill"></i> <br />
                  Reaction Time Test
                </div>
                <div id="infotext">
                  When the red box turns green, click as fast as you can.
                  <br /> Click to Start the Game
                </div>
                <div id="avgtext" className="p-2 bd-highlight"></div>
                <div className="p-2 bd-highlight">
                  {this.state.renderBtn && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        document.getElementById(
                          "game-text"
                        ).innerHTML = `<i class="bi bi-lightning-charge-fill"></i> <br />Reaction Time Test`;
                        document.getElementById("avgtext").innerHTML = "";
                        document.getElementById("infotext").innerHTML =
                          "When the red box turns green, click as fast as you can.<br /> Click to Start the Game";
                        this.setState({ renderBtn: null });
                      }}
                    >
                      Start Again
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-0 col-lg-2"></div>
          </div>
          <div className="row" style={{ height: "25%" }}></div>
        </div>
      </>
    );
  }
}
