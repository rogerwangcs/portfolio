import React, { Component } from "react";

import styled from "styled-components";

import Card from "components/generic/Card";
import RoundButton from "components/generic/RoundButton";

import mernDesktop from "media/mern-article-manager-desktop.PNG";
import mernMobile from "media/mern-article-manager-mobile.PNG";

const StyledProjectsSection = styled.div`
  text-align: center;

  .project-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-bottom: 25px;
  }
`;

const ProjectsSection = props => {
  return (
    <StyledProjectsSection>
      <div className="project-cards">
        <Card title="React Article Manager" image={mernDesktop} />
        <Card title="Blog Platform App" image={mernMobile} />
      </div>
      <RoundButton text="See All Projects" link="/projects" />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
