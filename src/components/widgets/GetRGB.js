import React, { Component } from "react";

export default class GetRGB extends Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    };
  }

  updateRed(e) {
    this.setState({ red: e.target.value });
  }

  updateGreen(e) {
    this.setState({ green: e.target.value });
  }

  updateBlue(e) {
    this.setState({ blue: e.target.value });
  }

  render() {
    return (
      <div
        className="rgb-sliders"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          className="color-box"
          style={{
            width: "150px",
            height: "150px",
            backgroundColor:
              "rgb(" +
              this.state.red +
              "," +
              this.state.green +
              "," +
              this.state.blue +
              ")",
          }}
        ></div>
        <label>
          RGB ({this.state.red},{this.state.green},{this.state.blue})
        </label>

        <div className="inputs">
          <input
            id="red"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.red}
            onChange={(e) => this.updateRed(e)}
          />

          <input
            id="green"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.green}
            onChange={(e) => this.updateGreen(e)}
          />

          <input
            id="blue"
            type="range"
            min="0"
            max="255"
            steps="1"
            value={this.state.blue}
            onChange={(e) => this.updateBlue(e)}
          />
        </div>
      </div>
    );
  }
}
