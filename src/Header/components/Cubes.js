import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components'
import {viewport} from 'utils/viewport'

import cubeImg from 'images/cube.png'
import FadeIn from 'utils/FadeIn'

const cubeAnimation = keyframes `
  from {
    opacity: 0;
    transform: translateY(-200px);
  }

  to {
    opacity: 1;
    transform: translateY(-0px);
  }
`;

const Cube = styled.img `
  z-index: -101;
  position: absolute;

  left: ${props => props.x + 'vw'};
  top: ${props => props.y + 'vh'};

  /* opacity: 0;

  animation: ${cubeAnimation} 1000ms ease-in-out;
  animation-delay: ${props => props.delay + 'ms'};
  animation-fill-mode: forwards; */

  @media (max-width: ${viewport.MOBILE}) {
    width: 65px;
    height: 65px;
  }
`;

const generateCubeCoords = (number) => {
  let coordArray = [];

  for (var i = 0; i < number; i++) {
    var xCoord = Math.random() * 100;
    var yCoord = Math.random() * 100;
    coordArray.push({index: i, x: xCoord, y: yCoord});
  }

  return coordArray;
}

const generateCube = (cube) => {
  return <FadeIn delay={cube.index * 50 + 500}><Cube
    src={cubeImg}
    key={cube.index}
    x={cube.x}
    y={cube.y}
    delay={cube.index * 50 + 500}/></FadeIn>
}

class Cubes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cubes: generateCubeCoords(10)
    }
  }

  render() {
    return (
      <div>
        {this
          .state
          .cubes
          .map((cube) => generateCube(cube))}
      </div>
    );
  }
}

export default Cubes;