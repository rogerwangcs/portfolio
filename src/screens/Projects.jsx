import theme from "constants/theme";
import Divider from "components/generic/Divider";
import PageSection from "components/generic/PageSection";
import ProjectCard from "components/Projects/ProjectCard";
import { projects } from "constants/content";

const Projects = () => {
  return (
    <PageSection color={theme.gray2} paddingBottom="50" paddingTop="50">
      <Divider centered={true} big={true}>
        <h2>My Projects</h2>
      </Divider>
      {projects.map((project, projectIdx) => (
        <ProjectCard key={projectIdx} {...project} />
      ))}
    </PageSection>
  );
};

export default Projects;
