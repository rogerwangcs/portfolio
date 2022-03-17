import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "components/common/Card";
import RoundButton from "components/common/RoundButton";
import { animateScroll } from "react-scroll";
import ProjectCarousel from "components/About/ProjectCarousel";
import "components/About/Carousel.scss";

import { projects } from "constants/content";

const StyledProjectsSection = styled.div`
  text-align: center;
`;

const ProjectsSection = (props) => {
  const navigate = useNavigate();

  const projectCards = projects.map((project, idx) => (
    <Card
      key={idx}
      name={project.shortname !== undefined ? project.shortname : project.name}
      image={project.images[0]}
    />
  ));

  return (
    <StyledProjectsSection>
      <ProjectCarousel
        components={[...projectCards, ...projectCards]}
        handleClick={() => {
          navigate("/projects");
          animateScroll.scrollTo(window.innerHeight);
        }}
        active={projectCards.length - 1} // start halfway through to avoid buggy transitions at start
      />
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
