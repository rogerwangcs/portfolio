import React, { Component } from "react";

import theme from "constants/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";
import ProjectCard from "components/Projects/ProjectCard";

import liveSubtitles from "media/live-subtitles.png";
import writefast1 from "media/writefast1.jpg";
import apolloBlogImg from "media/rogersblog1.jpg";
import betterBCHousing from "media/better-bc-housing.PNG";
import dijkstras from "media/dijkstras.png";

const Projects = () => {
  return (
    <PageSection color={theme.colors.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      <ProjectCard
        title="Dijkstra's Arena"
        date="April 2019"
        image={dijkstras}
        description="Dijkstra’s Arena is a web browser game aimed to educate players on the basis of Dijkstra’s algorithm and other graph theory shortest path problems in a fun, challenging, and interactive environment."
        website="http://dijkstras-arena.rogerwangcs.com/"
        github="https://github.com/rogerwangcs/Dijkstras-Arena"
      />
      <ProjectCard
        title="Live Subtitles"
        date="April 2019"
        image={liveSubtitles}
        description="Display what people are saying as they are talking in real time! A quick app built during Hack Dartmouth V. Created by Roger Wang, David Shen, Jerry Han, and Alex Sun using React, Tensorflow.js, and Chrome's speech-to-text API."
        website="http://live-subtitles.rogerwangcs.com/"
        github="https://github.com/rogerwangcs/ar-dialogue-subtitles"
      />
      <ProjectCard
        title="React Apollo Graphql Blogging Platform"
        image={apolloBlogImg}
        date="May 2018 - Dec 2018"
        description="Blogging Platform built using React, Apollo, Express, Graphql and
            MongoDB. Features authentication and authorization with Auth0, markup blog editor and individual user profiles."
        website="http://rogers-blog.rogerwangcs.com/"
        github=""
      />
      <ProjectCard
        title="Write Fast"
        date="July 2018 - August 2018"
        image={writefast1}
        description="An attempt to relieve writers block. A clean writing interface without distractions helps you focus, while the glowy red border nudges to continue writing."
        website="https://rogerwangcs.github.io/writefast/#/"
        github="https://github.com/rogerwangcs/writefast"
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
    </PageSection>
  );
};

export default Projects;
