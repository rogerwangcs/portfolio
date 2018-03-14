import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'

import logoFg from 'images/bg-logo-foreground.png'
import logoBg from 'images/bg-logo-background.png'

const StyledHeaderBg = styled.div `
  z-index: -100;
  position: absolute;
  background-color: #141c30;
  top: 0;
  left: 0;
  
  width: 100vw;
  height: 130vh;

`;

const StyledLogoBg = styled.img `
  position: absolute;
  z-index: -102;

  @media (max-width: ${viewport.MOBILE}){
    top: -70px;
    left: -60px;

    transform: scale(0.7)
  }
  @media (min-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;

    transform: scale(0.7)
  }
  @media (min-width: ${viewport.DESKTOP}){
    top: 80px;
    left: 80px;

    transform: scale(1.2)
  }
`;

const StyledLogoFg = styled.img `
  position: absolute;
  z-index: -101;

  @media (max-width: ${viewport.MOBILE}){
    top: -70px;
    left: -60px;
    padding-top: 15px;
    padding-left: 15px;

    transform: scale(0.7)
  }
  @media (min-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;
    padding-top: 1vw;
    padding-left: 1vw;

    transform: scale(0.7)
  }
  @media (min-width: ${viewport.DESKTOP}){
    top: 80px;
    left: 80px;
    padding-top: 15px;
    padding-left: 15px;

    transform: scale(1.2)
  }
`;

class HeaderBg extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <StyledHeaderBg>
        <StyledLogoBg src={logoBg}/>
        <StyledLogoFg src={logoFg}/>
      </StyledHeaderBg>
    );
  }
}

export default HeaderBg;