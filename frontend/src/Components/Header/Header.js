import React, { Component } from "react";
import { messages } from "./data";

import Binkie from "./Binkie";

const colors = [
  "#5F6460",
  "#AC836B",
  "#C5E199",
  "#5DC99F",
  "#3B6D81",
  "#6F677F",
  "#812A3A",
  "#79341A",
  "#504235",
  "#7c7153",
  "#604041",
  "#7b7247",
  "#3d3938",
  "#847766",
  "#7d464b"
];

const randomInt = max => Math.floor(Math.random() * Math.floor(max));

class Header extends Component {
  state = {
    message: messages[randomInt(messages.length)],
    shadow: "0 0 0 #fff"
  };

  componentDidMount() {
    const shadow =
      "0 0 0 #5F6460, 0 3px 3px #AC836B, 0 6px 6px #C5E199, 0 9px 9px #5DC99F, 0 12px 12px #3B6D81, 0 15px 15px #6F677F, 0 18px 18px #812A3A, 0 21px 21px  #79341A, 0 24px 24px #504235";
    setTimeout(() => this.setState({ shadow }), 10);
  }

  reRainbow = () => {
    const shadow = `0 0 0 ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      3
    )}px ${randomInt(3)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      6
    )}px ${randomInt(6)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      9
    )}px ${randomInt(9)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      12
    )}px ${randomInt(12)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      15
    )}px ${randomInt(15)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      18
    )}px ${randomInt(18)}px ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      21
    )}px ${randomInt(21)}px  ${colors[randomInt(colors.length)]}, 0 ${randomInt(
      24
    )}px ${randomInt(24)}px ${colors[randomInt(colors.length)]}`;

    console.log(shadow);

    this.setState({ shadow });
  };

  render() {
    const { message, shadow } = this.state;
    console.log(shadow);
    return (
      <header style={{ minHeight: "90vh" }}>
        <h2>{message}</h2>
        <Binkie
          style={{ textShadow: shadow }}
          onClick={this.reRainbow}
          onMouseOver={this.reRainbow}
        >
          binkie
        </Binkie>
      </header>
    );
  }
}

export default Header;
