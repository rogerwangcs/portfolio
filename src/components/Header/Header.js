import React, { Component } from "react";

import { viewport } from "constants/viewport";
import styled from "styled-components";

import Background from "components/Header/Background";
import Text from "components/Header/Text";
import Navigation from "components/Navigation/Navigation";
// import SocialButtons from 'components/Header/SocialButtons'
// import OpenArrow from 'components/Header/OpenArrow'

const HeaderContent = styled.div`
  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Background />
        <HeaderContent>
          <Text />
          <Navigation />
        </HeaderContent>
      </React.Fragment>
    );
  }
}

export default Header;
