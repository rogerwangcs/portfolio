import React, {Component} from 'react'

import styled, {keyframes} from 'styled-components'
import {viewport} from 'utils/viewport'

import cubeImg from 'images/cube.png'

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
  z-index: -200;
  position: absolute;

  left: ${props => props.x + 'px'};
  top: ${props => props.y + 'px'};

  opacity: 0;

  animation: ${cubeAnimation} 1000ms ease-in-out;
  animation-delay: ${props => props.animationDelay + 'ms'};
  animation-fill-mode: forwards;

  @media (max-width: ${viewport.MOBILE}) {
    width: 75px;
    height: 75px;
  }
`;

const generateCubeCoords = (number) => {
  let coordArray = [];

  for (var i = 0; i < number; i++) {
    var xCoord = Math.floor(Math.random() * window.innerWidth);
    var yCoord = Math.floor(Math.random() * window.innerHeight);
    coordArray.push({index: i, x: xCoord, y: yCoord});
  }

  return coordArray;
}

const generateCube = (cube) => {
  return <Cube
    src={cubeImg}
    key={cube.index}
    x={cube.x}
    y={cube.y}
    animationDelay={cube.index * 50 + 500}/>
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