import React, {Component} from 'react';

import styled from "styled-components";
import {viewport} from 'utils/viewport';

const StyledPageContents = styled.div `
  margin: auto;

  transition: transform 500ms ease-in-out;

  transform: ${props => props.nav === true
  ? 'translateY(100vh)'
  : 'translateY(0px)'};

  @media (max-width: ${viewport.MOBILE}) {
    width: 96vw;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80vw;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: ${viewport.DESKTOP_CONTENT_WIDTH + 'px'};
  }
`;

export default StyledPageContents;