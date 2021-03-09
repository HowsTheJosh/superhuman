import React from "react";

class GuessGameInfo extends React.Component {
  render() {
    return (
      <>
        <div
          className="col-12"
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
              {this.props.iconStatus}
              <br />
              {this.props.gameText}
            </div>
            <div id="infotext">{this.props.infoText}</div>

            <div className="p-2 bd-highlight">
              {
                <button
                  id="btn-size"
                  className="btn btn-danger "
                  onClick={() => {
                    this.props.handler(false, false);
                    try {
                      var ld = document.getElementById("levelDiv").clientHeight;
                      document.getElementById("timePara").style.marginTop =
                        ld / 2 + "px";
                    } catch (err) {}
                  }}
                >
                  {this.props.buttonText}
                </button>
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default GuessGameInfo;
