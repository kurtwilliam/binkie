import React from "react";
import Chunk from "../../shared/Chunk";

import { withGesture } from "react-with-gesture";
import { Spring, animated } from "react-spring";

import HandShake from "./HandShake";
import Hand from "./Hand";

const LinkedIn = () => (
  <Chunk>
    LinkedIn
    <HandShake>
      <Hand />
      <Hand />
    </HandShake>
  </Chunk>
);

export default LinkedIn;
