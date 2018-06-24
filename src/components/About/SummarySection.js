import React, { Component } from "react";

import styled from "styled-components";
import ReactSVG from "react-svg";
import PixelBg from "media/square-pixel-bg.svg";

import RogerPortrait from "media/Portrait.jpg";

const StyledSummarySection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 10px;

  > .textWrapper {
    white-space: wrap;
    order: 2;
    max-width: 400px;
    margin-right: 25px;

    > p {
      font-size: 24px;
      @media (max-width: 775px) {
        font-size: 22px;
      }
    }

    @media (max-width: 775px) {
      padding-top: 25px;
      max-width: 100%;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

const Portrait = styled.img`
  order: 1;
  width: 225px;
  height: 225px;

  border-radius: 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 10px rgba(0, 0, 0, 0.22);

  @media (max-width: 750px) {
    width: 175px;
    height: 175px;
  }
`;

const SummarySection = () => {
  return (
    <StyledSummarySection>
      <div className="textWrapper">
        <p>
          Hi, I'm Roger, a computer science student at Boston College and I love
          creating things with elegant designs and with cool features.
        </p>
      </div>
      <Portrait src={RogerPortrait} />
    </StyledSummarySection>
  );
};

export default SummarySection;
