import React from "react";

import styled from "styled-components";
import { viewport } from "constants/viewport.js";
import FadeIn from "components/generic/FadeIn";
import { animationTimings } from "constants/animationTimings";

const StyledText = FadeIn.extend`
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
      <StyledText  delay={animationTimings.loadDelay + 550}>
        <h1>Roger Wang</h1>
        <h4>College Student, Full Stack Developer</h4>
      </StyledText>
  );
};

export default HeaderText;
