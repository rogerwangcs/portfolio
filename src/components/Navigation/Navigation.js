import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme.js";
import { animationTimings } from "constants/animationTimings";
import FadeIn from "components/generic/FadeIn";

import Menu from "components/Navigation/Menu";

const NavbarWrapper = styled.div`
  text-align: center;
  @media (max-width: ${viewport.MOBILE}) {
    margin-top: 50px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    margin-top: 100px;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    margin-top: 125px;
  }
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSticky: false
    };
  }

  handleRoute = url => {
    this.props.history.push(url);
  };

  render() {
    return (
      <React.Fragment>
        <NavbarWrapper nav={this.props.nav}>
          <Menu handleRoute={this.handleRoute} />
        </NavbarWrapper>
      </React.Fragment>
    );
  }
}

export default withRouter(Nav);
