import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styled from "styled-components";
import {viewport} from 'utils/viewport';

const NavbarBg = styled.div `
  background-color: #141c30;
  position: fixed;
  z-index: -20;

  left: -20vw;

  width: 100vw;
  height: 45px;
  display: ${props => props.navSticky
  ? 'block'
  : 'none'};
`;

const Navbar = styled.div `
  z-Index: 1000;

  transition: all 300ms ease;

  transform: ${props => props.nav
  ? 'translateY(100px)'
  : 'translateY(0px)'};
  position: ${props => props.navSticky
    ? 'fixed'
    : 'relative'};
  width: ${props => props.navSticky
      ? '100vw'
      : '100%'};
  top: ${props => props.navSticky
        ? '0px'
        : '0px'};

`;

const NavbarButtons = styled.div `
  display: inline-block;
`;

const StyledButton = styled.div `

  display: inline-block;
  user-select: none;

  height: 48px;
  padding-left: 0px;
  padding-right: 15px;

  :hover {
    cursor: pointer;
    > h2 {
      color: red;
    }
  }
`;

const NavUnderlineBar = styled.div `
  width: 100%;
  height: 5px;
  margin-top: -5px;
  background-color: #4c6bba;
  
  transition: transform 700ms ease;
  transform-origin: 30% 50%;
  transform: scaleX(${props => props.nav
  ? '1'
  : '8'});
  
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, {passive: true});
  }

  handleScroll = () => {
    var rect = ReactDOM
      .findDOMNode(this)
      .getBoundingClientRect()

    if (window.scrollY >= window.innerHeight / 2) {
      this.setState({navSticky: true})
    } else if (window.scrollY < window.innerHeight / 2 - 80) {
      this.setState({navSticky: false})
    }
  }

  render() {

    return (
      <Navbar navSticky={this.state.navSticky} nav={this.props.nav}>
        <NavbarBg navSticky={this.state.navSticky}/>
        <NavbarButtons navSticky={this.state.navSticky}>
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
          <NavUnderlineBar nav={this.props.nav}/>
        </NavbarButtons>
      </Navbar>
    )
  }
}

export default Nav;