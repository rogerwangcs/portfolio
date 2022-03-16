import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Card from "components/common/Card";
import RoundButton from "components/common/RoundButton";
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
      title={project.shortname !== undefined ? project.shortname : project.name}
      image={project.image}
    />
  ));

  return (
    <StyledProjectsSection>
      <ProjectCarousel
        components={[...projectCards, ...projectCards, ...projectCards]}
        handleClick={() => {
          navigate("/projects");
        }}
        active={1}
      />
      <RoundButton text="See All Projects" link="/projects" scroll />
    </StyledProjectsSection>
  );
};

export default ProjectsSection;
