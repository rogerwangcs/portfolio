import React, {Component} from 'react';

import {viewport} from 'utils/viewport';
import styled from "styled-components";

import Nav from 'Header/components/Nav';

const StyledHeader = styled.div `
  width: 100vw;
  height: 100vh;
  background-color: #141c30;
`;

const HeaderTextContainer = styled.div `
  margin: auto;
  padding-top: 20vh;
  width: ${viewport.DESKTOP};
  text-align: left;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <StyledHeader>
        <HeaderText/>
        <Nav/>
      </StyledHeader>
    );
  }
}

const HeaderText = () => {
  return (
    <HeaderTextContainer>
      <h1>Hey, I'm Roger</h1>
      <p>&nbsp;&nbsp; I am a Full Stack Software Engineer and AI enthusiast.</p>
    </HeaderTextContainer>
  );
};

export default Header;