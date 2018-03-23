import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import Divider from 'Body/components/Divider'
import Button from 'Body/components/Button'

import mernDesktop from 'images/mern-article-manager-desktop.PNG'
import mernMobile from 'images/mern-article-manager-mobile.PNG'

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
  box-shadow: 5px 5px 30px -10px;
  width: 70%;
`;
const MernMobileImg = styled.img `
  position: absolute;
  box-shadow: 5px 5px 30px -10px;
  margin-left: 2%;
  width: 25%;
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
          <Button type='solid'>
            <p>Demo</p>
          </Button>
        </a>
        <a
          style={{
          textDecoration: 'none'
        }}
          href="https://github.com/rogerwangcs/MERN-Article-Manager"
          target="_blank">
          <Button type='solid'>
            <p>Code</p>
          </Button>
        </a>
      </ButtonGroup>
    </StyledProjectsSection>
  );
}

export default ProjectsSection;