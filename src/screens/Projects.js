import React, { Component } from "react";

import theme from "constants/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";
import ProjectCard from "components/Projects/ProjectCard";

import apolloBlogImg from "media/apollo-graphql-blog.PNG";
import articleManagerImg from "media/mern-article-manager-desktop.PNG";
import writefast1 from "media/writefast1.PNG";

const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      <ProjectCard
        title="React Apollo Graphql Blogging Platform"
        image={apolloBlogImg}
        date="May 2018 - June 2018"
        description="Blogging Platform built using React, Apollo, Express, Graphql and
            MongoDB. Features authentication and authorization with Auth0, markup blog editor and individual user profiles."
        github="https://github.com/rogerwangcs/React-Personal-Website"
      />
      <ProjectCard
        title="Crud Article Manager"
        date="December 2017 - January 2018"
        image={articleManagerImg}
        description="Crud project built using React, Express, and MongoDB. Features create, read, write, and delete functions wrapped in a material design UI."
        github="https://github.com/rogerwangcs/MERN-Article-Manager"
      />
      <ProjectCard
        title="Write Fast"
        date="July 2018 - August 2018"
        image={writefast1}
        description="An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing."
        github="https://github.com/rogerwangcs/writefast"
      />
    </PageSection>
  );
};

export default Projects;
