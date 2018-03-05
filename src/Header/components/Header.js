import React, {Component} from 'react';

import {viewport} from 'utils/viewport';
import styled, {keyframes} from "styled-components";

import Nav from 'Header/components/Nav';
import OpenArrow from 'Header/components/OpenArrow';

const StyledHeader = styled.div `

transition: all 300ms ease;
width: 100vw;
height: ${props => props.navDrawer === 'open'
  ? '100vh'
  : 'calc(30vh + 10vh + 48px + 5px)'};
transform: scale(1);
background-color: #141c30;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navDrawer: 'open'
    }
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
    if (window.scrollY <= 2) {
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
      <StyledHeader navDrawer={this.state.navDrawer}>
        <HeaderText/>
        <Nav navDrawer={this.state.navDrawer}/>
        <OpenArrow handleDrawer={this.handleDrawer} navDrawer={this.state.navDrawer}/>
      </StyledHeader>
    );
  }
}

const HeaderText = () => {

  const HeaderTextContainer = styled.div `
  margin: auto;
  padding-top: 10vh;
  width: ${viewport.DESKTOP};
  height: 30vh;
  text-align: left;
`;

  return (
    <HeaderTextContainer>
      <h1>Hey, I'm Roger</h1>
      <p>&nbsp;&nbsp; I am a Full Stack Software Engineer and AI enthusiast.</p>
    </HeaderTextContainer>
  );
};

export default Header;