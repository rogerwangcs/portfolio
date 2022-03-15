import styled from "styled-components";
import theme from "constants/theme";
import PageSection from "components/common/PageSection";
import Divider from "components/common/Divider";
import SummarySection from "components/About/SummarySection";
import SkillsSection from "components/About/SkillsSection";
import ProjectsSection from "components/About/ProjectsSection";
import ResumeSection from "components/About/ResumeSection";

import { CSSTransition } from "react-transition-group";

const StyledPage = styled.div`
  text-align: center;
`;

const StyledTransition = styled.div`
  /* .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: all 350ms ease-in;
  } */
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: all 350ms ease-in;
  }
`;

const About = () => {
  return (
    <StyledTransition>
      <CSSTransition classNames="fade" timeout={1000}>
        {(state) => (
          <StyledPage>
            <PageSection color={theme.gray2} paddingBottom="50" paddingTop="50">
              <SummarySection />
            </PageSection>
            <PageSection color={theme.creme} paddingBottom="50" paddingTop="50">
              <Divider centered={true} big={true}>
                <h2>My Tech Stack</h2>
              </Divider>
              <SkillsSection />
            </PageSection>
            <PageSection
              fullwidth={true}
              color={theme.gray2}
              paddingBottom="50"
              paddingTop="50"
            >
              <Divider centered={true} big={true}>
                <h2>Projects</h2>
              </Divider>
              <ProjectsSection />
            </PageSection>
            <PageSection
              fullwidth={true}
              color={theme.creme}
              paddingBottom="0"
              paddingTop="0"
            >
              <ResumeSection />
            </PageSection>
          </StyledPage>
        )}
      </CSSTransition>
    </StyledTransition>
  );
};

export default About;
