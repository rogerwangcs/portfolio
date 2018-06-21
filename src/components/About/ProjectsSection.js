import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'constants/viewport'
import theme from 'constants/theme.js'

import Divider from 'components/About/Divider'
import Button from 'components/About/Button'

import mernDesktop from 'media/mern-article-manager-desktop.PNG'
import mernMobile from 'media/mern-article-manager-mobile.PNG'

const ButtonGroup = styled.div `
display: flex;

  div {
    margin-right: 25px;
  }
`;
const ImageGroup = styled.div `

  margin-top: 25px;
  margin-bottom: 50px;

  width: 100%;

  @media (max-width: ${viewport.MOBILE}) {
  }
`;

const MernDesktopImg = styled.img `
  box-shadow: 3px 3px 20px -10px;
  width: 70%;
  @media (max-width: ${viewport.MOBILE}) {
    box-shadow: 2px 2px 10px -6px;
  }
`;
const MernMobileImg = styled.img `
  position: absolute;
  box-shadow: 3px 3px 20px -10px;
  margin-left: 2%;
  width: 25%;
  @media (max-width: ${viewport.MOBILE}) {
    box-shadow: 2px 2px 10px -6px;
  }
`;

const StyledProjectsSection = styled.div `

`;

const ProjectsSection = (props) => {
  return (
    <StyledProjectsSection>
      <ImageGroup>
        <MernDesktopImg src={mernDesktop}/>
        <MernMobileImg src={mernMobile}/>
      </ImageGroup>
      <h3>React Article Database Manager</h3>
      <Divider/>
      <p>A fully functional backend database article manager built with React frontend
        with a Express and MongoDB backend. Beautiful responsive UI using Google
        Material Design.</p>
      <ButtonGroup>
        <a
          style={{
          textDecoration: 'none'
        }}
          href="https://github.com/rogerwangcs/MERN-Article-Manager"
          target="_blank">
          <Button type='solid' width='70px' height='35px'>
            <p>Demo</p>
          </Button>
        </a>
        <a
          style={{
          textDecoration: 'none'
        }}
          href="https://github.com/rogerwangcs/MERN-Article-Manager"
          target="_blank">
          <Button type='solid' width='70px' height='35px'>
            <p>Code</p>
          </Button>
        </a>
      </ButtonGroup>
    </StyledProjectsSection>
  );
}

export default ProjectsSection;