import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import styled from "styled-components"
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'
import {animationTimings} from 'utils/animationTimings'
import FadeIn from 'utils/FadeIn'

const NavbarBg = styled.div `
  background-color: ${mainColors.darkblue};
  position: fixed;
  z-index: -20;

  left: -20vw;

  width: 150vw;
  height: 50px;
`;

const MainStyledNavbar = styled.div `

  transition: all 300ms ease-in-out;

  transform: ${props => props.nav
  ? 'translateY(50px)'
  : 'translateY(0px)'};

  @media (max-width: ${viewport.MOBILE}){
    text-align: center;
  }
`;

const StickyStyledNavbar = styled.div `
  z-Index: 1000;
  position: fixed;

  transition: ${props => props.navSticky
  ? 'all 300ms ease-in-out'
  : 'all 0ms ease-in-out'};
  top: ${props => props.navSticky
    ? '0px'
    : '-60px'};

  @media (max-width: ${viewport.MOBILE}){
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const NavbarButtons = styled.div `
  display: inline-block;
`;

const StyledButton = styled.div `

  display: inline-block;
  user-select: none;

  height: 48px;
  padding-left: 0px;
  padding-right: 20px;
  margin-top: -5px;
  margin-bottom: 3px;

  @media (max-width: ${viewport.MOBILE}){
    padding-left: 10px;
    padding-right: 10px;
  }

  :hover {
    cursor: pointer;
    > h4 {
      color: red;
    }
  }
`;

const NavUnderline = styled.div `
  width: 100%;
  height: 5px;

  background-color: ${mainColors.lightblue};
  
  transition: transform 700ms ease-in-out;
  transform-origin: 30% 50%;
  transform: scaleX(${props => props.nav && !props.sticky
  ? '1'
  : '8'});
  
`;

const Navbar = (props) => {
  return (
    <NavbarButtons navSticky={props.navSticky}>
      <StyledButton>
        <h4>About Me</h4>
      </StyledButton>
      <StyledButton>
        <h4>My Work</h4>
      </StyledButton>
      <StyledButton>
        <h4>Journal</h4>
      </StyledButton>
      <StyledButton>
        <h4>Resume</h4>
      </StyledButton>
      <NavUnderline sticky={props.sticky} nav={props.nav}/>
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
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.navSticky !== nextState.navSticky) {
      return true;
    }
    if (this.props.nav !== nextProps.nav) {
      return true;
    }
    return false;
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

    // console.log(window.scrollX)

    if (rect.bottom < 0) {
      this.setState({navSticky: true})
    } else if (rect.bottom >= 50) {
      this.setState({navSticky: false})
    }
  }

  render() {

    return (
      <div>
        <FadeIn delay={animationTimings.loadDelay + 900}>
            <MainStyledNavbar nav={this.props.nav}>
              <Navbar navSticky={this.state.navSticky} nav={this.props.nav}/>
            </MainStyledNavbar>
        </FadeIn>
        <StickyStyledNavbar navSticky={this.state.navSticky}>
          <NavbarBg/>
          <Navbar sticky = {false} />
        </StickyStyledNavbar>
      </div>
    )
  }
}

export default Nav;