import React, { Component } from "react";
import refleximg from "../Images/reflex.png";
import history from "./History";
import { motion } from "framer-motion";
import "../Css/GameList.css";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default class GameList extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#e6e8f4" }} id="gamelist">
        <div
          className="container"
          style={{
            backgroundColor: "#e6e8f4",
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
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
