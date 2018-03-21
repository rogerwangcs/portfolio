import React, {Component} from 'react'

import styled from 'styled-components'
import {viewport} from 'utils/viewport'
import {mainColors} from 'utils/theme'

import Divider from 'Body/components/Divider'

const PortraitGroup = styled.div `
  background-color: ${mainColors.darkblue};

  margin-top: 10px;

  width: 100%;
  height: 400px;

  @media (max-width: ${viewport.MOBILE}) {
    height: 250px;
  }
`;

const StyledProjectsSection = styled.div `

  p {
    width: 100%;
    margin-top: 50px;
  }
`;

const ProjectsSection = (props) => {
  return (
    <StyledProjectsSection>
      <PortraitGroup></PortraitGroup>
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
    </StyledProjectsSection>
  );
}

export default ProjectsSection;