import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import Divider from 'Body/components/Divider'

const StyledSkillsSection = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div `

  /* background-color: ${mainColors.darkblue}; */

  width: 30%;

  padding-left: 10px;
  margin-bottom: 35px;

  h3 {
    color: white;
  }
  p {
    color: white;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsSection = (props) => {
  return (
    <StyledSkillsSection>
      <SkillBox>
        <h3>Web Development</h3>
        <Divider/>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React.js + Redux.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
        </div>
      </SkillBox>
      <SkillBox>
        <h3>Machine Learning</h3>
        <Divider/>
        <div>
          <p>Python</p>
          <p>SciPy</p>
          <p>Pandas + Numpy</p>
          <p>SciKit Learn</p>
          <p>MatPlotLib</p>
          <p>Seaborn</p>
        </div>
      </SkillBox>
      <SkillBox>
        <h3>Tools</h3>
        <Divider/>
        <div>
          <p>VS Code</p>
          <p>Git</p>
          <p>Postman</p>
          <p>Photoshop</p>
        </div>
      </SkillBox>
    </StyledSkillsSection>
  );
}

export default SkillsSection;