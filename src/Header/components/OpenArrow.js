import React, {Component} from 'react';

import {viewport} from 'utils/viewport';
import styled from 'styled-components';

import downArrow from 'images/down-arrow.png';

const StyledOpenArrow = styled.img `

  position: absolute;
  display: block;
  margin: auto;
  top: 400px;
  left: 0;
  right: 0;

  padding: 50px;

  :hover {
    cursor: pointer;
  }

  transition: all 300ms ease-in-out;
  transition-property: transform, opacity;
  opacity: ${props => props.nav
  ? 1
  : 0};
  transform-origin: 50% 50%;
  transform: scale(0.2,0.2) translateY(${props => props.nav
    ? 0
    : '-50vh'});
  @media (max-height: 500px) {
    top: 300px;
  }
`;

class OpenArrow extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <StyledOpenArrow
          src={downArrow}
          onClick={this.props.handleDrawer}
          nav={this.props.nav}></StyledOpenArrow>
      </div>
    );
  }
}

export default OpenArrow;