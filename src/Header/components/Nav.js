import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styled from "styled-components";
import {viewport} from 'utils/viewport';

const NavbarBg = styled.div `
  background-color: #141c30;
  position: fixed;
  z-index: -20;

  left: -20vw;

  width: 150vw;
  height: 45px;
`;

const MainStyledNavbar = styled.div `
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

const StickyStyledNavbar = styled.div `
  z-Index: 1000;
  position: fixed;

  transition: ${props => props.navSticky
  ? 'all 300ms ease'
  : 'all 0ms ease'};
  top: ${props => props.navSticky
  ? '0px'
  : '-50px'};

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

const NavUnderline = styled.div `
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

const Navbar = (props) => {
  return (
    <NavbarButtons navSticky={props.navSticky}>
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
      <NavUnderline nav={props.nav}/>
    </NavbarButtons>
  );
}

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

    console.log(rect)

    if (rect.bottom < 0) {
      this.setState({navSticky: true})
    } else if (rect.top >= 0) {
      this.setState({navSticky: false})
    }
  }

  render() {

    return (
      <div>
        <MainStyledNavbar navSticky={this.props.navSticky} nav={this.props.nav}>
          <Navbar navSticky={this.state.navSticky} nav={this.props.nav}/>
        </MainStyledNavbar>
        <StickyStyledNavbar navSticky={this.state.navSticky}>
          <NavbarBg/>
          <Navbar/>
        </StickyStyledNavbar>
      </div>
    )
  }
}

export default Nav;