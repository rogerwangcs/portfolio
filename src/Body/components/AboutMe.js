import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

const Portrait = styled.div `
  order: 1;

  background-color: ${mainColors.darkblue};

  width: 300px;
  height: 300px;

  @media (max-width: ${viewport.MOBILE}) {
    width: 250px;
    height: 250px;
  }
`;

const SummaryGroup = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;

  margin: 80%;
  margin: auto;

  >p {
    white-space: wrap;
    order: 2;
    width: calc(100% - 300px);

    @media (max-width: 750px) {
      width: 100%;
    }
  }
`;

const AboutMe = (props) => {
  return (
    <div>
      <h2>About Me</h2>
      <SummaryGroup>
        <Portrait/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam imperdiet
          non dolor vel elementum. Suspendisse mollis id nunc nec varius. Maecenas lacinia
          est ligula, quis fermentum mi gravida a. Nulla fringilla sapien vitae congue
          vestibulum. Quisque consectetur, felis et dignissim ullamcorper, neque dui
          tempor mauris, eget fermentum magna magna et dolor. In hac habitasse platea
          dictumst. Nam hendrerit mi non ultrices ornare. Nullam non ante quam.</p>
      </SummaryGroup>
    </div>
  );
}

export default AboutMe;