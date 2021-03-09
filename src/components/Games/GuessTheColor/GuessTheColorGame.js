import React, { Component } from "react";
var nameArr = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Orange",
    "White",
    "Violet",
    "Purple",
    "Pink",
    "Maroon",
    "Black",
  ],
  colorArr = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "white",
    "violet",
    "purple",
    "pink",
    "maroon",
    "black",
  ],
  namei,
  colori,
  dummyi,
  counter = 0,
  level = 0,
  gameChance = true,
  clearTimer = null;

export default class GuessTheColorGame extends Component {
  componentDidMount() {
    this.gameStart();
    try {
      clearTimer = setInterval(function () {
        try {
          document.getElementById(
            "timePara"
          ).innerHTML = `<i class="bi bi-alarm-fill"></i> ${counter} seconds`;
          counter = counter + 1;
        } catch (err) {
          counter = 0;
          clearInterval(clearTimer);
        }
      }, 1000);
    } catch (err) {}
  }
  gameOver = () => {
    clearInterval(clearTimer);
    document.getElementById("timePara").innerHTML = "";
    level = 0;
    gameChance = true;
    this.props.handler(false, true, counter - 1);
    counter = 0;
    document.getElementById("levelPara").innerHTML = "";
  };
  userClicked = (id) => {
    try {
      if (!gameChance) {
        var userClickedBtn = document.getElementById(id).innerHTML;
        if (colorArr[colori] === userClickedBtn.toLowerCase()) {
          level = level + 1;
          if (level === 10) {
            this.gameOver();
          } else {
            this.computerPlays();
          }
        } else {
        }
      }
    } catch (err) {}
  };

  computerPlays = () => {
    try {
      document.getElementById("levelPara").innerHTML = `Level : ${level + 1}`;
      gameChance = true;
      while (true) {
        namei = Math.floor(Math.random() * 10).toString();
        colori = Math.floor(Math.random() * 10).toString();
        dummyi = Math.floor(Math.random() * 10).toString();
        if (namei !== colori && colori !== dummyi && namei !== dummyi) {
          break;
        }
      }

      //generating random number to assign actual color to button but in random manner
      var randomColorAssign = Math.floor(Math.random() * 3);

      if (randomColorAssign === 0) {
        document.getElementById("colorBtn1").innerHTML = nameArr[
          namei
        ].toUpperCase();
        document.getElementById("colorBtn2").innerHTML = colorArr[
          colori
        ].toUpperCase();
        document.getElementById("colorBtn3").innerHTML = nameArr[
          dummyi
        ].toUpperCase();
      } else if (randomColorAssign === 1) {
        document.getElementById("colorBtn2").innerHTML = nameArr[
          namei
        ].toUpperCase();
        document.getElementById("colorBtn3").innerHTML = colorArr[
          colori
        ].toUpperCase();
        document.getElementById("colorBtn1").innerHTML = nameArr[
          dummyi
        ].toUpperCase();
      } else {
        document.getElementById("colorBtn3").innerHTML = nameArr[
          namei
        ].toUpperCase();
        document.getElementById("colorBtn1").innerHTML = colorArr[
          colori
        ].toUpperCase();
        document.getElementById("colorBtn2").innerHTML = nameArr[
          dummyi
        ].toUpperCase();
      }
      document.getElementById("colorDisplay").innerHTML = nameArr[
        namei
      ].toUpperCase();
      document.getElementById("colorDisplay").style.color = colorArr[colori];
      gameChance = false;
    } catch (err) {}
  };
  gameStart = () => {
    try {
      this.computerPlays();
    } catch (err) {}
  };
  render() {
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
        <div className="container" style={{ height: "100%" }}>
          <div className="row" style={{ height: "50%" }}>
            <div className="col-0 col-lg-2"></div>
            <div className="col-12 col-lg-8" id="colorDisplayDiv">
              <p
                id="colorDisplay"
                style={{ backgroundColor: "#333", borderRadius: "5px" }}
              ></p>
            </div>
            <div className="col-0 col-lg-2"></div>
          </div>

          <div className="row" style={{ height: "50%" }}>
            <div className="col-0 col-lg-3"></div>
            <div className="col-4 col-lg">
              <div
                className="colorOptnBtn"
                id="colorBtn1"
                onClick={() => this.userClicked("colorBtn1")}
              ></div>
            </div>
            <div className="col-4 col-lg">
              <div
                className="colorOptnBtn"
                id="colorBtn2"
                onClick={() => this.userClicked("colorBtn2")}
              ></div>
            </div>
            <div className="col-4 col-lg">
              <div
                className="colorOptnBtn"
                id="colorBtn3"
                onClick={() => this.userClicked("colorBtn3")}
              ></div>
            </div>
            <div className="col-0 col-lg-3"></div>
          </div>
        </div>
      </div>
    );
  }
}
