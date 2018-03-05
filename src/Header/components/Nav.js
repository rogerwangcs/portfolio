import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styled from "styled-components";
import {viewport} from 'utils/viewport';

const Navbar = styled.div `
  transition: all 300ms ease;
  width: ${viewport.DESKTOP};
  margin: auto;
  z-Index: 100;

`;

const NavbarButtons = styled.div `
  display: inline-block;
`;

const StyledButton = styled.div `

  transition: 0.1s ease-in-out;

  display: inline-block;
  height: 48px;
  padding-left: 15px;
  padding-right: 15px;

  :hover {
    background-color: darkblue;
  }

`;

const NavUnderlineBar = styled.div `
  width: 100%;
  height: 5px;
  background-color: #4c6bba;
  transition: transform 500ms ease;
  transform: scaleX(${props => props.navDrawer === 'open'
  ? '1'
  : '8'});
  
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'relative'
    };
  }

  render() {

    return (
      <Navbar position={this.state.position}>
        <NavbarButtons>
          <StyledButton>
            <h2>About Me</h2>
          </StyledButton>
          <StyledButton>
            <h2>My Work</h2>
          </StyledButton>
          <StyledButton>
            <h2>Journal</h2>
          </StyledButton>
          <StyledButton>
            <h2>Resume</h2>
          </StyledButton>
          <NavUnderlineBar navDrawer={this.props.navDrawer}/>
        </NavbarButtons>
      </Navbar>
    )
  }
}

export default Nav;