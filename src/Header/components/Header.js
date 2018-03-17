import React, {Component} from 'react'

import {viewport} from 'utils/viewport'
import styled from "styled-components"
import {animationTimings} from 'utils/animationTimings'
import FadeIn from 'utils/FadeIn'

import HeaderBg from 'Header/components/HeaderBg'
import HeaderText from 'Header/components/HeaderText'
import Nav from 'Header/components/Nav'
import HeaderCover from 'Header/components/HeaderCover'
import SocialButtons from 'Header/components/SocialButtons'
import OpenArrow from 'Header/components/OpenArrow'

const OverflowContainer = styled.div `
  overflow: hidden;
  /* background-color: rgba(255,0,0,.2); */
  width: 100vw;

  padding-bottom: 80px;

`;

const HeaderGroup = styled.div `
  transition: transform 300ms ease-in-out;

  transform: ${props => props.nav === true
  ? 'translateY(50px)'
  : 'translateY(0px)'};
}
`;

const StyledHeader = styled.div `

  @media (max-width: ${viewport.MOBILE}){
    width: 90vw;
    left: 5vw;
    right: 5vw;
    margin: auto;
  }
  @media (min-width: ${viewport.MOBILE}){
    width: 80vw;
    margin: auto;
  }
  @media (min-width: ${viewport.DESKTOP}){
    width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
    left: 0;
    right: 0;
    margin: auto;
  }

`;

class Header extends Component {
  constructor(props) {
    super(props);
    if (window.scrollY > 0) 
      this.setState({nav: false})
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
    } else {
      this
        .props
        .updateNav(true)
      window.scrollTo(0, 0);
    }
  }

  handleScroll = () => {
    if (window.scrollY <= 300) {
      // console.log(window.scrollY); console.log(this.props.nav);
      if (window.scrollY > 0) {
        this
          .props
          .updateNav(false)
      } else {
        this
          .props
          .updateNav(true)
      }
    }

  }

  render() {
    return (
      <OverflowContainer>
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
          <Nav nav={this.props.nav}/>
          <HeaderCover nav={this.props.nav}/>
          <OpenArrow handleDrawer={this.handleDrawer} nav={this.props.nav}/>
        </StyledHeader>
      </OverflowContainer>
    );
  }
}

export default Header;