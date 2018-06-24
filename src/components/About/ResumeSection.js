import React, { Component } from "react";

import styled from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme.js";

import ResumeGraphic from "media/ResumeGraphic.png";
import RoundButton from "components/generic/RoundButton";

const ResumeButton = styled.div`
  margin-top: 50px;
  position: relative;
  z-index: 1;

  &:hover ${BlueBG} {
    background-color: green;
  }
`;

const StyledResumeSection = styled.div`
  overflow: hidden;
  position: relative;
  text-align: center;

  @media (max-width: ${viewport.MOBILE}) {
    height: 250px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    height: 350px;
  }
`;

const StyledResumeGraphic = styled.img`
  position: absolute;
  z-index: 1;

  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 25px 25px 0px 0px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.15);

  transition: transform 300ms ease-in-out;
  transform-origin: bottom;

  @media (max-width: ${viewport.MOBILE}) {
    width: 90vw;
    box-shadow: 2px 2px 10px -6px;
  }
  @media (min-width: ${viewport.MOBILE}) {
    width: 60vw;
  }
  @media (min-width: ${viewport.DESKTOP}) {
    width: 600px;
  }
`;

const BlueBG = styled.div`
  transition: all 300ms ease-in-out;
  position: absolute;
  z-index: 0;

  width: 225px;
  height: 115px;
  border-radius: 25px;

  transform: scale(20);
  background-color: red;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 0;

${ResumeButton}:hover & {
    fill: rebeccapurple;
  }
`;

class ResumeSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledResumeSection>
        <ResumeButton>
          <RoundButton text="See Resume" />
        </ResumeButton>
        <StyledResumeGraphic draggable="false" src={ResumeGraphic} />
        <BlueBG />
      </StyledResumeSection>
    );
  }
}

export default ResumeSection;
