import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import {Link, scroller} from 'react-scroll'

import styled from "styled-components"
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'
import {animationTimings} from 'utils/animationTimings'
import FadeIn from 'utils/FadeIn'

const NavbarBg = styled.div `
  background-color: ${mainColors.darkblue};
  position: fixed;
  z-index: -1;

  left: -20vw;

  width: 150vw;
  height: 50px;
`;

const MainStyledNavbar = styled.div `

  margin-top: 25px;

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
    ? '-2px'
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

  height: 48px;
  padding-left: 0px;
  padding-right: 20px;
  margin-top: -5px;
  margin-bottom: 3px;

  @media (max-width: ${viewport.MOBILE}){
    padding-left: 10px;
    padding-right: 10px;
  }

  h4 {
    transition: color 150ms ease-in-out;
    color: ${props => props.activeSection === props.sectionID
  ? mainColors.lightblue
  : 'white'};
  }
  :hover {
    cursor: pointer;
    > h4 {
      color: ${mainColors.lightblue};
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
      <StyledButton
        sectionID='1'
        activeSection={props.activeSection}
        onClick={() => props.handleNavButton('About', props.nav)}>
        <h4>About Me</h4>
      </StyledButton>
      <StyledButton
        sectionID='2'
        activeSection={props.activeSection}
        onClick={() => props.handleNavButton('Projects', props.nav)}>
        <h4>Projects</h4>
      </StyledButton>
      <StyledButton
        sectionID='3'
        activeSection={props.activeSection}
        onClick={() => props.handleNavButton('Journal', props.nav)}>
        <h4>Journal</h4>
      </StyledButton>
      <StyledButton
        sectionID='4'
        activeSection={props.activeSection}
        onClick={() => props.handleNavButton('Resume', props.nav)}>
        <h4>Resume</h4>
      </StyledButton>
      <NavUnderline sticky={props.sticky} nav={props.nav}/>
    </NavbarButtons>
  );
}

let navDisabler = false;

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
    if (this.props.activeSection !== nextProps.activeSection) {
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
    } else if (rect.bottom >= 48) {
      this.setState({navSticky: false})
    }
  }

  handleNavButton = (element, nav) => {
    if (!navDisabler) {

      navDisabler = true;

      if (nav) {
        this
          .props
          .updateNav(false);

        window.scrollTo(0, 3);

        setTimeout(() => {
          scroller.scrollTo(element, {
            duration: 1000,
            offset: -75,
            smooth: 'easeInOutCubic'
          });
          navDisabler = false;
        }, 500);
      } else {
        scroller.scrollTo(element, {
          duration: 1000,
          offset: -75,
          smooth: 'easeInOutCubic'
        });
        navDisabler = false;
      }
    }
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({activeSection: nextProps.activeSection})
  }

  render() {

    return (
      <div>
        <FadeIn delay={animationTimings.loadDelay + 900}>
          <MainStyledNavbar nav={this.props.nav}>
            <Navbar
              navSticky={this.state.navSticky}
              nav={this.props.nav}
              updateNav={this.props.updateNav}
              handleNavButton={this.handleNavButton}
              activeSection={this.props.activeSection}/>
          </MainStyledNavbar>
        </FadeIn>
        <StickyStyledNavbar navSticky={this.state.navSticky}>
          <NavbarBg/>
          <Navbar
            sticky={false}
            updateNav={this.props.updateNav}
            handleNavButton={this.handleNavButton}
            activeSection={this.props.activeSection}/>
        </StickyStyledNavbar>
      </div>
    )
  }
}

export default Nav;