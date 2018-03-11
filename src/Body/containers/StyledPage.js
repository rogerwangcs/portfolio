import React, {Component} from 'react';

import styled from "styled-components";
import {viewport} from 'utils/viewport';

const StyledPage = styled.div `
  background-color: gray;
  z-index: 10;

  position: relative;
  top: 20px;
  margin: auto;

  transition: transform 400ms ease;

  transform: ${props => props.nav === true
  ? 'translateY(80vh)'
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

export default StyledPage;