import React, { Component } from 'react'

import styled, {css} from 'styled-components'
import {viewport} from 'utils/viewport.js'

const StyledText = styled.div `

  @media (max-width: ${viewport.MOBILE}) {
    float: none;
    text-align: center;

    width: 100%;

    > h1 {
      font-size: 48px;
    }
    > h2 {
      font-size: 14px;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    float: left; 

    width: 75%;

    > h1 {
      font-size: 8vw;
    }
    > h2 {
      font-size: 14px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    float: left; 

    width: 75%;

    > h1 {
      font-size: 96px;
    }
    > h2 {
      font-size: 16px;
    }
  }
`;

const HeaderText = (props) => {

  return (
    <StyledText nav={props.navDrawer}>
      <h1>Hey, I'm Roger</h1>
      <h2>I am a Full Stack Software Engineer.</h2>
    </StyledText>
  );
};

export default HeaderText;
