import React, {Component} from 'react';

import {viewport} from 'utils/viewport';
import styled, {keyframes} from "styled-components";

import Nav from 'Header/components/Nav';
import SocialButtons from 'Header/components/SocialButtons';
import OpenArrow from 'Header/components/OpenArrow';

const HeaderBg = styled.div `
  width: 100vw;
  background-color: #141c30;
`;

const HeaderGroup = styled.div `
  :after {
    clear:both;
    content:" ";
    display:block;
}
`;

const StyledHeader = styled.div `
  background-color: #141c30;

  transition: height 300ms ease;
  height: ${props => props.navDrawer === 'open'
  ? '100vh'
  : 'auto'};

  @media (max-width: ${viewport.MOBILE}){
    width: 90vw;
    left: 5vw;
    right: 5vw;
    margin: 0;
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
  @media (max-height: ${viewport.MIN_HEIGHT}){
    height: ${props => props.navDrawer === 'open'
    ? viewport.MIN_HEIGHT
    : 'calc(' + viewport.MIN_HEIGHT * 0.30 + 'px ' + viewport.MIN_HEIGHT * 0.10 + 'px + 48px)'};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawer: 'open'
    }
    if (window.scrollY > 0) 
      this.setState({navdrawer: 'closed'})
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleDrawer = () => {
    this.state.navDrawer === 'open'
      ? this.setState({navDrawer: 'closed'})
      : this.setState({navDrawer: 'open'})
  }

  handleScroll = () => {
    if (window.scrollY <= 300) {
      console.log(window.scrollY);
      console.log(this.state.navDrawer);
      if (window.scrollY > 0) {
        this.setState({navDrawer: 'closed'})
      } else {
        this.setState({navDrawer: 'open'})
      }
    }

  }

  render() {
    return (
      <HeaderBg>
        <StyledHeader navDrawer={this.state.navDrawer}>
          <HeaderGroup>
            <HeaderText/>
            <SocialButtons/>
          </HeaderGroup>
          <Nav navDrawer={this.state.navDrawer}/>
          <OpenArrow handleDrawer={this.handleDrawer} navDrawer={this.state.navDrawer}/>
        </StyledHeader>
      </HeaderBg>
    );
  }
}

const HeaderText = () => {

  const HeaderTextContainer = styled.div `

    float: left;
    width: 70%;  
    text-align: left;
    
    @media (max-width: ${viewport.MOBILE}) {
      padding-top: 5vh;
      > h1 {
        font-size: 48px;
      }
      > h2 {
        font-size: 14px;
      }
    }
    @media (min-width: ${viewport.MOBILE}) {
      padding-top: 8vh;
      > h1 {
        font-size: 62px;
      }
      > h2 {
        font-size: 14px;
      }
    }
    @media (min-width: ${viewport.DESKTOP}) {
      padding-top: 10vh;
      > h1 {
        font-size: 72px;
      }
      > h2 {
        font-size: 16px;
      }
    }
`;

  return (
    <HeaderTextContainer>
      <h1>Hey, I'm Roger</h1>
      <h2>I am a Full Stack Software Engineer and AI enthusiast.</h2>
    </HeaderTextContainer>
  );
};

export default Header;