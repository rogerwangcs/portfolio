import React, { Component } from "react";

import styled, { css } from "styled-components";
import { viewport } from "constants/viewport.js";

const StyledText = styled.div`
  margin-top: -75px;
  text-align: center;

  > * {
    display: block;
    color: white;
  }

  @media (max-width: ${viewport.MOBILE}) {
    width: 80%;
    > h1 {
      font-size: 48px;
    }
    > h4 {
      margin-top: 25px;
      font-size: 14px;
    }
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 80%;
    > h1 {
      font-size: 10vw;
    }
    > h4 {
      font-size: 18px;
      margin-top: 25px;
    }
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 75%;
    > h1 {
      font-size: 108px;
    }
    > h4 {
      font-size: 20px;
      margin-top: 50px;
    }
  }
`;

const HeaderText = props => {
  return (
    <StyledText>
      <h1>Roger Wang</h1>
      <h4>College Student, Full Stack Developer</h4>
    </StyledText>
  );
};

export default HeaderText;
