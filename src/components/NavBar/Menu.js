import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme.js";
import { animationTimings } from "constants/animationTimings";
import FadeIn from "utils/FadeIn";

import Navigation from "components/Navigation/Bar";

const NavbarBg = styled.div`
  background-color: ${theme.colors.darkblue};
  position: fixed;
  z-index: -1;

  left: -20vw;

  width: 150vw;
  height: 50px;
`;

const MainStyledNavbar = styled.div`

  margin-top: 75px;

  /* transition: all 300ms ease-in-out;

  transform: ${props =>
    props.nav ? "translateY(50px)" : "translateY(0px)"}; */

  @media (max-width: ${viewport.MOBILE}){
    text-align: center;
  }
`;

const StickyStyledNavbar = styled.div`
  z-index: 1000;
  position: fixed;

  transition: ${props =>
    props.navSticky ? "all 300ms ease-in-out" : "all 0ms ease-in-out"};
  top: ${props => (props.navSticky ? "-2px" : "-60px")};

  @media (max-width: ${viewport.MOBILE}) {
    text-align: center;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const NavbarButtons = styled.div`
  display: inline-block;
`;

const StyledButton = styled.div`
  display: inline-block;

  height: 48px;
  padding-left: 0px;
  padding-right: 20px;
  margin-top: -5px;
  margin-bottom: 3px;

  @media (max-width: ${viewport.MOBILE}) {
    padding-left: 10px;
    padding-right: 10px;
  }

  h4 {
    transition: color 150ms ease-in-out;
    color: ${props =>
      props.activeSection === props.sectionID
        ? theme.colors.lightblue
        : "white"};
  }
  :hover {
    cursor: pointer;
    > h4 {
      color: ${theme.colors.lightblue};
    }
  }
`;

const NavUnderline = styled.div`
  width: 100%;
  height: 5px;

  background-color: ${theme.colors.lightblue};

  transition: transform 700ms ease-in-out;
  transform-origin: 30% 50%;
  transform: scaleX(${props => (props.nav && !props.sticky ? "1" : "8")});
`;

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
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, { passive: true });
  }

  handleScroll = () => {
    var rect = ReactDOM.findDOMNode(this).getBoundingClientRect();

    // console.log(window.scrollX)

    if (rect.bottom < 0) {
      this.setState({ navSticky: true });
    } else if (rect.bottom >= 48) {
      this.setState({ navSticky: false });
    }
  };

  handleRoute = url => {
    this.props.history.push(url);
  };

  componentWillReceiveProps = nextProps => {
    this.setState({ activeSection: nextProps.activeSection });
  };

  render() {
    return (
      <div>
        <MainStyledNavbar nav={this.props.nav}>
          <FadeIn delay={animationTimings.loadDelay + 900}>
            <Navigation
              navSticky={this.state.navSticky}
              nav={this.props.nav}
              updateNav={this.props.updateNav}
              handleRoute={this.handleRoute}
              activeSection={this.props.activeSection}
            />
          </FadeIn>
        </MainStyledNavbar>
        <StickyStyledNavbar navSticky={this.state.navSticky}>
          <NavbarBg />
          <Navigation
            sticky={false}
            updateNav={this.props.updateNav}
            handleRoute={this.handleRoute}
            activeSection={this.props.activeSection}
          />
        </StickyStyledNavbar>
      </div>
    );
  }
}

export default withRouter(Nav);
