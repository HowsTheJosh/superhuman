import React, { Component } from "react";
import refleximg from "../Images/reflex.png";
import history from "./History";
export default class GameList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="card-deck" id="gamelist">
              <div
                className="card"
                onClick={() => history.push("/superhuman/reflex")}
              >
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>
            </div>
            <div
              className="card-deck"
              id="gamelist"
              style={{ marginTop: "2%" }}
            >
              <div className="card">
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>
              <div className="card">
                <img
                  className="card-img-top"
                  src={refleximg}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    );
  }
}
