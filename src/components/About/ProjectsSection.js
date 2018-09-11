import React, { Component } from "react";

import styled from "styled-components";

import Card from "components/generic/Card";
import RoundButton from "components/generic/RoundButton";

import apolloBlogImg from "media/apollo-graphql-blog.PNG";
import articleManagerImg from "media/mern-article-manager-desktop.PNG";

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
        <Card title="React Blog Platform" image={apolloBlogImg} />
        <Card title="Crud Article Manager" image={articleManagerImg} />
      </div>
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
