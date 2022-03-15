import styled from "styled-components";

import Card from "components/generic/Card";
import RoundButton from "components/generic/RoundButton";
import ProjectCarousel from "components/About/ProjectCarousel";
import "components/About/Carousel.scss";

import liveSubtitles from "media/live-subtitles.png";
import apolloBlogImg from "media/rogersblog1.jpg";
import betterBCHousing from "media/better-bc-housing.png";
import dijkstras from "media/dijkstras.png";

const StyledProjectsSection = styled.div`
  text-align: center;
`;

let projects = [
  <Card title="Dijkstra's Arena" image={dijkstras} />,
  <Card title="Live AR Subtitles" image={liveSubtitles} />,
  <Card title="React Blog Platform" image={apolloBlogImg} />,
  <Card title="Better BC Housing" image={betterBCHousing} />,
];

const ProjectsSection = (props) => {
  return (
    <StyledProjectsSection>
      <ProjectCarousel
        components={[...projects, ...projects, ...projects]}
        active={0}
      />
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
