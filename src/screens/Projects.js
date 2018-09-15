import React, { Component } from "react";

import theme from "constants/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";
import ProjectCard from "components/Projects/ProjectCard";

import writefast1 from "media/writefast1.PNG";
import apolloBlogImg from "media/apollo-graphql-blog.PNG";
import betterBCHousing from "media/better-bc-housing.PNG";
import articleManagerImg from "media/mern-article-manager-desktop.PNG";

const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      <ProjectCard
        title="Write Fast"
        date="July 2018 - August 2018"
        image={writefast1}
        description="An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing."
        website="https://rogerwangcs.github.io/writefast/#/"
        github="https://github.com/rogerwangcs/writefast"
      />
      <ProjectCard
        title="React Apollo Graphql Blogging Platform"
        image={apolloBlogImg}
        date="May 2018 - June 2018"
        description="Blogging Platform built using React, Apollo, Express, Graphql and
            MongoDB. Features authentication and authorization with Auth0, markup blog editor and individual user profiles."
        website=""
        github="https://github.com/rogerwangcs/React-Personal-Website"
      />
      <ProjectCard
        title="Better BC Housing"
        date="April 2018"
        image={betterBCHousing}
        description="Reinvents the obsolete housing selection system at Boston College with a React, Node, and MongoDB single page web application. Features Beautiful and interactive map interface where students can navigate to buildings and rooms of choice. Accommodates live room picking, giving students real time feedback during the selection process. 🏆 Won best UI/UX at BC's Hack The Heights 2018 hackathon.
        "
        website=""
        github="https://github.com/MikeN64/Better-BC-Housing"
      />
      <ProjectCard
        title="Crud Article Manager"
        date="December 2017 - January 2018"
        image={articleManagerImg}
        description="Crud project built using React, Express, and MongoDB. Features create, read, write, and delete functions wrapped in a material design UI."
        website=""
        github="https://github.com/rogerwangcs/MERN-Article-Manager"
      />
    </PageSection>
  );
};

export default Projects;
