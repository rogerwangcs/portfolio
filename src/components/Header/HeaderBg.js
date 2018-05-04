import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'
import {animationTimings} from 'utils/animationTimings'
import FadeIn from 'utils/FadeIn'

import Cubes from 'components/Header/Cubes'

import logoFg from 'images/bg-logo-foreground.png'
import logoBg from 'images/bg-logo-background.png'

const StyledHeaderBg = styled.div `
  overflow-x: hidden;
  z-index: -100;
  position: absolute;
  background-color: ${mainColors.darkblue};
  top: 0;
  left: 0;
  
  width: 100vw;
  height: 130vh;

`;

const StyledLogoBg = styled.img `
  position: absolute;
  z-index: -99;

  @media (max-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;

    width: 350px;
    height: 350px;

  }
  @media (min-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;

    width: 50vw;
    height: 50vw;

  }
  @media (min-width: ${viewport.DESKTOP}){
    top: 80px;
    left: 80px;

    width: 500px;
    height: 500px;
  }
`;

const StyledLogoFg = styled.img `
  position: absolute;
  z-index: -98;

  @media (max-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;
    padding-top: 10px;
    padding-left: 10px;

    width: 350px;
    height: 350px;

  }
  @media (min-width: ${viewport.MOBILE}){
    top: 20px;
    left: 20px;
    padding-top: 1.2vw;
    padding-left: 1.2vw;

    width: 50vw;
    height: 50vw;
  }
  @media (min-width: ${viewport.DESKTOP}){
    top: 80px;
    left: 80px;
    padding-top: 16px;
    padding-left: 16px;

    width: 500px;
    height: 500px;
  }
`;

class HeaderBg extends Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    return (
      <StyledHeaderBg>
        <Cubes/>
        <FadeIn delay={animationTimings.loadDelay + 0}>
          <StyledLogoBg src={logoBg}/>
        </FadeIn>
        <FadeIn delay={animationTimings.loadDelay + 50}>
          <StyledLogoFg src={logoFg}/>
        </FadeIn>
      </StyledHeaderBg>
    );
  }
}

export default HeaderBg;