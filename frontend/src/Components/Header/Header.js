import React, { Component } from "react";
import { messages } from "./data";

import Binkie from "./Binkie";

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

  render() {
    const { message, shadow } = this.state;
    console.log(shadow);
    return (
      <header style={{ minHeight: "90vh" }}>
        <h2>{message}</h2>
        <Binkie style={{ textShadow: shadow }}>binkie</Binkie>
      </header>
    );
  }
}

export default Header;
