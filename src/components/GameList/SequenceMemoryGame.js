import React, { Component } from "react";
var seqGameHeight = 0,
  seqGameWidth = 0,
  compArr = [],
  counter = 0,
  level = 0,
  gameChance = true;
export default class SequenceMemoryGame extends Component {
  state = { rendered: false };
  componentDidMount() {
    seqGameHeight = document.getElementById("SeqGame").clientHeight;
    seqGameWidth = document.getElementById("SeqGame").clientWidth;
    seqGameWidth = seqGameWidth > seqGameHeight ? seqGameHeight : seqGameWidth;
    this.setState({ rendered: true });
  }
  userClicked = (id) => {
    if (!gameChance) {
      if (compArr[counter] === id) {
        // document.getElementById(id).style.background = "white";
        // await this.sleep(200);
        // document.getElementById(id).style.background = "rgb(100,100,100)";
        counter = counter + 1;

        if (counter === compArr.length) {
          level = counter;
          counter = 0;
          this.computerPlays();
          console.log(compArr);
        }
      } else {
        //Game Over Logic
        document.getElementById("turnPara").innerHTML = "";
        document.getElementById("levelPara").innerHTML = "";
        this.props.handler(false, true, level);
        compArr = [];
        level = 0;
        counter = 0;
        gameChance = true;
      }
    }
  };

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  computerPlays = async () => {
    document.getElementById(
      "turnPara"
    ).innerHTML = `<h1>Wait for your turn!</h1>`;
    document.getElementById("levelPara").innerHTML = `<h1>Level : ${
      level + 1
    }</h1>`;
    gameChance = true;
    var tile = Math.floor(Math.random() * 9).toString();
    compArr.push(tile);

    for (var i = 0; i < compArr.length; i++) {
      await this.sleep(500);
      document.getElementById(compArr[i]).classList.remove("greydiv");
      document.getElementById(compArr[i]).classList.add("reddiv");
      await this.sleep(500);
      document.getElementById(compArr[i]).classList.remove("reddiv");
      document.getElementById(compArr[i]).classList.add("greydiv");
      //   document.getElementById(compArr[i]).style.backgroundColor =
      //     "rgb(100,100,100)";
    }
    gameChance = false;
    document.getElementById("turnPara").innerHTML = `<h1>It's your turn!</h1>`;
  };
  gameStart = () => {
    document.getElementById("levelPara").innerHTML = `Level : ${counter + 1}`;
    compArr = [];
    if (this.state.rendered) {
      this.computerPlays();
    }
  };
  render() {
    this.gameStart();
    return (
      <div
        id="SeqGame"
        className="col-12"
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          id="SeqGameArea"
          style={{
            height: seqGameWidth,
            width: seqGameWidth,
          }}
        >
          <div className="container" style={{ height: "100%" }}>
            <div
              className="row"
              style={{
                marginTop: "2%",
                height: "31%",
              }}
            >
              <div
                className="col greydiv"
                id="0"
                onClick={() => this.userClicked("0")}
                style={{
                  marginLeft: "2%",
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
              <div
                className="col greydiv"
                id="1"
                onClick={() => this.userClicked("1")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>

              <div
                className="col greydiv"
                id="2"
                onClick={() => this.userClicked("2")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
            <div
              className="row"
              style={{
                marginTop: "2%",
                height: "31%",
              }}
            >
              <div
                className="col greydiv"
                id="3"
                onClick={() => this.userClicked("3")}
                style={{
                  marginLeft: "2%",
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
              <div
                className="col greydiv"
                id="4"
                onClick={() => this.userClicked("4")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>

              <div
                className="col greydiv"
                id="5"
                onClick={() => this.userClicked("5")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
            <div
              className="row"
              style={{
                marginTop: "2%",
                height: "31%",
              }}
            >
              <div
                className="col greydiv"
                id="6"
                onClick={() => this.userClicked("6")}
                style={{
                  marginLeft: "2%",
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
              <div
                className="col greydiv"
                id="7"
                onClick={() => this.userClicked("7")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>

              <div
                className="col greydiv"
                id="8"
                onClick={() => this.userClicked("8")}
                style={{
                  marginRight: "2%",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
