import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'constants/viewport'
import theme from 'constants/theme.js'

import RogerPortrait from 'media/Portrait.jpg'

const PortraitGroup = styled.div `
  order: 1;

  background-color: ${theme.colors.darkblue};
  margin-top: 10px;

  width: 300px;
  height: 300px;

  @media (max-width: ${viewport.MOBILE}) {
    width: 250px;
    height: 250px;
  }

  >img {
    position: absolute;
    margin-top: 12px;
    margin-left: 12px;

    width: 300px;
    height: 300px;

    box-shadow: 5px 5px 30px -10px;

    @media (max-width: ${viewport.MOBILE}) {
      width: 250px;
      height: 250px;
    }
  }


`;

const StyledSummarySection = styled.div `
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 10px;

  >p {
    white-space: wrap;
    order: 2;
    width: calc(100% - 335px);
    margin-right: 25px;

    @media (max-width: 750px) {
      width: 100%;
      margin-top: 50px;
    }
  }
`;

const SummarySection = (props) => {
  return (
    <StyledSummarySection>
      <PortraitGroup>
        <img src={RogerPortrait}/>
      </PortraitGroup>
      <p>
        <p>I'm a computer science student at Boston College. I love things with elegant
          designs and things with cool features.<br/></p>
      </p>
    </StyledSummarySection>
  );
}

export default SummarySection;