import React, { Component } from "react";
import styled from "styled-components";

import theme from "constants/theme.js";

import PageSection from "components/generic/PageSection";
import Divider from "components/generic/Divider";
import SummarySection from "components/About/SummarySection";
import SkillsSection from "components/About/SkillsSection";
import ProjectsSection from "components/About/ProjectsSection";
import ResumeSection from "components/About/ResumeSection";

const StyledPage = styled.div`
  text-align: center;
`;

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage>
        <PageSection
          color={theme.colors.gray2}
          paddingBottom="50"
          paddingTop="50"
        >
          <SummarySection />
        </PageSection>
        <PageSection
          color={theme.colors.creme}
          paddingBottom="50"
          paddingTop="50"
        >
          <Divider centered={true} big={true}>
            <h2>My Tech Stack</h2>
          </Divider>
          <SkillsSection />
        </PageSection>
        <PageSection
          color={theme.colors.gray2}
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
          color={theme.colors.creme}
          paddingBottom="0"
          paddingTop="0"
        >
          <ResumeSection />
        </PageSection>
      </StyledPage>
    );
  }
}

export default About;
