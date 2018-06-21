import React, {Component} from 'react';

import styled from "styled-components";
import {viewport} from 'constants/viewport';

const StyledPageContents = styled.div `
  margin: auto;

  transition: transform 500ms ease-in-out;

  transform: ${props => props.nav === true
  ? 'translateY(100vh)'
  : 'translateY(0px)'};

  @media (max-width: ${viewport.MOBILE}) {
    width: 92vw;
    h2 {
      text-align: center;
      margin: auto;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80vw;
    text-align: left;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
  }
`;

export default StyledPageContents;