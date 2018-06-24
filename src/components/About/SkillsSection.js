import React, { Component } from "react";

import styled from "styled-components";
import { viewport } from "constants/viewport";
import theme from "constants/theme.js";

import Divider from "components/generic/Divider";

const StyledSkillsSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 20px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div`
  width: 30%;

  padding-left: 10px;
  margin-bottom: 40px;

  text-align: left;

  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    > p {
      margin-right: 10px;
    }
  }

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SkillsSection = props => {
  return (
    <StyledSkillsSection>
      <SkillBox>
        <Divider>
          <h3>Web Development</h3>
        </Divider>
        <div className="items">
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React.js + Apollo.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Graphql</p>
          <p>MongoDB</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Machine Learning</h3>
        </Divider>
        <div className="items">
          <p>Python</p>
          <p>SciPy</p>
          <p>Pandas + Numpy</p>
          <p>SciKit Learn</p>
          <p>MatPlotLib</p>
          <p>Seaborn</p>
        </div>
      </SkillBox>
      <SkillBox>
        <Divider>
          <h3>Tools</h3>
        </Divider>
        <div className="items">
          <p>Git</p>
          <p>Ubuntu</p>
          <p>Heroku</p>
          <p>Postman</p>
          <p>Photoshop CC</p>
          <p>Illustrator CC</p>
        </div>
      </SkillBox>
    </StyledSkillsSection>
  );
};

export default SkillsSection;
