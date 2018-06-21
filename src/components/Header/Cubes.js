import React, { Component } from "react";

import styled, { keyframes } from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme";

import cubeImg from "media/cube.png";
import FadeIn from "utils/FadeIn";

const Cube = styled.div`
  z-index: -101;
  position: absolute;

  width: 75px;
  height: 75px;
  background-color: ${theme.colors.blue};

  left: ${props => props.x + "vw"};
  top: ${props => props.y + "vh"};

  @media (max-width: ${viewport.MOBILE}) {
    width: 65px;
    height: 65px;
  }
`;

const generateCubeCoords = number => {
  let coordArray = [];

  for (var i = 0; i < number; i++) {
    let xCoord = Math.random() * 100;
    let yCoord = Math.random() * 100;
    coordArray.push({ index: i, x: xCoord, y: yCoord });
  }

  return coordArray;
};

const generateCube = cube => {
  return (
    <FadeIn delay={cube.index * 50 + 500}>
      <Cube src={cubeImg} key={cube.index} x={cube.x} y={cube.y} />
    </FadeIn>
  );
};

class Cubes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cubes: generateCubeCoords(15)
    };
  }

  render() {
    return <div>{this.state.cubes.map(cube => generateCube(cube))}</div>;
  }
}

export default Cubes;
