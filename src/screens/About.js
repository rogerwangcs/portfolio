import React, {Component} from 'react'

import theme from 'constants/theme.js'
import Waypoint from 'react-waypoint'

import StyledPage from 'components/About/StyledPage'
import StyledPageContents from 'components/About/StyledPageContents'
import StyledPageSection from 'components/About/StyledPageSection'
import Divider from 'components/About/Divider'
import SummarySection from 'components/About/SummarySection'
import SkillsSection from 'components/About/SkillsSection'
import ProjectsSection from 'components/About/ProjectsSection'
import BlogSection from 'components/About/BlogSection'
import ResumeSection from 'components/About/ResumeSection'

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage id='element' nav={this.props.nav} updateNav={this.props.updateNav}>
        <StyledPageSection color={theme.colors.creme} paddingBottom='50' paddingTop='20'>
          <StyledPageContents>
            <h2>Hey, I'm Roger</h2>
            <Divider mobileAlign='center'/>
            <SummarySection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection
          color={theme.colors.darkblue}
          paddingBottom='50'
          paddingTop='20'>
          <StyledPageContents>
            <h2 style={{
              color: 'white'
            }}>Tech Stack</h2>
            <Divider mobileAlign='center'/>
            <SkillsSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color={theme.colors.creme} paddingBottom='50' paddingTop='20'>
          <StyledPageContents>
            <h2>Projects</h2>
            <Divider mobileAlign='center'/>
            <ProjectsSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection
          color={theme.colors.darkblue}
          paddingBottom='50'
          paddingTop='20'>
          <StyledPageContents>
            <h2 style={{
              color: 'white'
            }}>Blog</h2>
            <Divider mobileAlign='center'/>
            <BlogSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color={theme.colors.creme} paddingBottom='0' paddingTop='0'>
          <ResumeSection/>
        </StyledPageSection>
      </StyledPage>
    );
  }
}

export default About;