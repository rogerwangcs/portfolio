import React, {Component} from 'react'

import {viewport} from 'utils/viewport'
import styled from "styled-components"
import {animationTimings} from 'utils/animationTimings'
import FadeIn from 'utils/FadeIn'

import HeaderBg from 'components/Header/HeaderBg'
import HeaderText from 'components/Header/HeaderText'
import Nav from 'components/Header/Nav'
import SocialButtons from 'components/Header/SocialButtons'
import OpenArrow from 'components/Header/OpenArrow'

const OverflowContainer = styled.div `
  overflow: hidden;
  width: 100vw;
  
  /* transition: padding-bottom 300ms ease-in-out;

  padding-bottom: ${props => props.nav === true
  ? '60vh'
  : '0px'}; */

`;

const HeaderGroup = styled.div `

  /* transition: transform 300ms ease-in-out;

  transform: ${props => props.nav === true
  ? 'translateY(50px)'
  : 'translateY(0px)'}; */
}
`;

const StyledHeader = styled.div `

  @media (max-width: ${viewport.MOBILE}){
    width: 90vw;
    margin: auto;
  }
  @media (min-width: ${viewport.MOBILE}){
    width: 80vw;
    margin: auto;
  }
  @media (min-width: ${viewport.DESKTOP}){
    width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
    margin: auto;
  }

`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleDrawer = () => {
    if (this.props.nav) {
      this
        .props
        .updateNav(false)
      window.scrollTo(0, 3);
    }
    // else {
    //   this
    //     .props
    //     .updateNav(true)
    //   window.scrollTo(0, 0);
    // }
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this
        .props
        .updateNav(false)
    }
    else {
      this
        .props
        .updateNav(true)
    }
  }

  /** Code for one way nav opening */
  // handleScroll = () => {
  //   if (window.scrollY > 0 && this.props.nav) {
  //     this
  //       .props
  //       .updateNav(false)
  //     window.scrollTo(0, 1)
  //   }
  // }

  render() {
    return (
      <div>
        <OverflowContainer nav={this.props.nav}>
          <StyledHeader nav={this.props.nav}>
            <HeaderBg/>
            <HeaderGroup nav={this.props.nav}>
              <FadeIn delay={animationTimings.loadDelay + 600}>
                <HeaderText nav={this.props.nav}/>
              </FadeIn>
              <FadeIn delay={animationTimings.loadDelay + 700}>
                <SocialButtons/>
              </FadeIn>
            </HeaderGroup>
            <Nav
              nav={this.props.nav}
              updateNav={this.props.updateNav}
              activeSection={this.props.activeSection}/>
          </StyledHeader>
        </OverflowContainer>
        <FadeIn delay={animationTimings.loadDelay + 1200}>
          <OpenArrow handleDrawer={this.handleDrawer} nav={this.props.nav}/>
        </FadeIn>
      </div>
    );
  }
}

export default Header;