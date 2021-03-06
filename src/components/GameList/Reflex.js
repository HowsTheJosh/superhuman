import React, { Component } from "react";

var start = 0,
  green = 0,
  setTo = null,
  t0 = 0,
  t1 = 0,
  gCount = 0,
  avgRT = 0;
export default class Reflex extends Component {
  state = { renderBtn: null };
  startReflex() {
    gCount = gCount + 1;
    t0 = performance.now();
    green = 1;
    document.getElementById("reflex-area").style.background = "green";
    document.getElementById("game-text").innerHTML = "Click!";
  }
  runReflex() {
    if (!start && !green && !this.state.renderBtn) {
      document.getElementById("avgtext").innerHTML = "";
      start = 1;
      document.getElementById("reflex-area").style.background = "red";
      document.getElementById(
        "game-text"
      ).innerHTML = `<i class="bi bi-hourglass-split"></i> <br/>Wait for green`;
      var num = Math.floor(Math.random() * 500 + 500);
      setTo = setTimeout(this.startReflex, num);
      console.log(num);
    } else if (start && !green) {
      clearTimeout(setTo);
      start = 0;
      document.getElementById("reflex-area").style.background = "blue";
      document.getElementById("game-text").innerHTML = "Clicked too soon";
    } else if (start && green) {
      t1 = performance.now();
      document.getElementById("reflex-area").style.background = "blue";
      document.getElementById(
        "game-text"
      ).innerHTML = `<i class="bi bi-clock-fill"></i>  ${t1 - t0}`;
      avgRT = avgRT + (t1 - t0);
      green = 0;
      start = 0;
      if (gCount == 1) {
        gCount = 0;
        start = 0;
        avgRT = avgRT / 3;
        this.setState({ renderBtn: true });
        document.getElementById(
          "avgtext"
        ).innerHTML = `Average Reflex Time ${avgRT.toFixed(2)}`;
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
            background: "blue",
            height: "80vh",
          }}
        >
          <div className="row" style={{ height: "33%" }}></div>
          <div className="row" style={{ height: "34%" }}>
            <div className="col-0 col-lg-2"></div>
            <div
              className="col-12 col-lg-8"
              style={{
                font: "white",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "5vw",
                color: "white",
              }}
            >
              <div className="d-flex align-items-center flex-column bd-highlight ">
                <div
                  id="game-text"
                  className="p-2 bd-highlight"
                  style={{ textAlign: "center" }}
                >
                  Click to Start the game
                </div>
                <div id="avgtext" className="p-2 bd-highlight"></div>
                <div className="p-2 bd-highlight">
                  {this.state.renderBtn && (
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        document.getElementById("game-text").innerHTML =
                          "Click To start the game";
                        document.getElementById("avgtext").innerHTML = "";
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
          <div className="row" style={{ height: "33%" }}></div>
        </div>
        <div className="container">
          <div className="row">
            <div className="card card-body bg-light">
              <blockquote className="blockquote">
                <p>About Reflex</p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </>
    );
  }
}
