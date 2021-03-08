import React, { Component } from "react";
import history from "./History";
import "../Css/GameList.css";

export default class GameList extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#E5E5E5" }} id="gamelist">
        <div
          className="container"
          style={{
            backgroundColor: "#E5E5E5",
            paddingTop: "5%",
            paddingBottom: "13%",
          }}
        >
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <div className="card-deck">
                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>

                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>
                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>
              </div>
              <div className="card-deck" style={{ marginTop: "3%" }}>
                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>

                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>
                <div
                  className="card card-anime"
                  onClick={() => history.push("/superhuman/reaction")}
                >
                  <div className="container" style={{ height: "100%" }}>
                    <div className="row" style={{ height: "25%" }}></div>
                    <div className="row" style={{ height: "50%" }}>
                      <div
                        className="col-12 card-text"
                        style={{ textAlign: "center" }}
                      >
                        <i
                          style={{ textAlign: "center" }}
                          className="bi bi-lightning-charge-fill icn-txt"
                        ></i>
                        <br />
                        Reaction Time
                      </div>
                    </div>
                    <div className="row" style={{ height: "25%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
