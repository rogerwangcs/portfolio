import styled from "styled-components";

import Card from "components/common/Card";
import RoundButton from "components/common/RoundButton";
import ProjectCarousel from "components/About/ProjectCarousel";
import "components/About/Carousel.scss";

import liveSubtitles from "assets/live-subtitles.png";
import apolloBlogImg from "assets/rogersblog1.jpg";
import betterBCHousing from "assets/better-bc-housing.png";
import dijkstras from "assets/dijkstras.png";

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
