import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import RogerPortrait from 'images/Portrait.jpg'

const PortraitGroup = styled.div `
  order: 1;

  background-color: ${mainColors.darkblue};
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
  /* align-items: center; */
  justify-content: center;

  margin-top: 0px;

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
        <p>I'm a computer science student at Boston College. I love things with elegant
          designs and things with cool features. In the future, I wish to work on apps
          that combine the two that makes our every day lives easier.<br/><br/>

          Some things I happen to do in my downtime:<br/>
          - inspecting and reverse engineering websites to see what frameworks they use
          and how they function.<br/>
          - coding apps in React.<br/>
          - creating app designs and visualizing the animations in my mind.<br/><br/>

          Since the motto of my life is making things that make our lives easier, I also
          have a deep interest in data-driven artificial intelligence. Data is the key to
          improving our lives and solving tough problems we face. I'm working on gaining
          knowledge and experience in data science so I can help pioneer the
          data-personalized life in the future.<br/></p>
      </StyledSummarySection>
  );
}

export default SummarySection;