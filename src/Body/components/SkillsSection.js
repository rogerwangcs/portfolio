import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

const StyledSkillsSection = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 25px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillBox = styled.div `
  background-color: ${mainColors.darkblue};

  width: 150px;
  height: 150px;

  margin-right: 25px;
  margin-bottom: 25px;

`;

const SkillsSection = (props) => {
  return (
      <StyledSkillsSection>
        <SkillBox/>
        <SkillBox/>
        <SkillBox/>
      </StyledSkillsSection>
  );
}

export default SkillsSection;