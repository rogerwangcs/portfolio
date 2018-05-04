import React, {Component} from 'react'

import {mainColors} from 'utils/theme'
import {Element} from 'react-scroll'
import Waypoint from 'react-waypoint'
import NavLocation from 'components/Header/NavLocation'
import Fade from 'react-reveal/Fade';

import StyledPage from 'components/Body/StyledPage'
import StyledPageContents from 'components/Body/StyledPageContents'
import StyledPageSection from 'components/Body/StyledPageSection'
import Divider from 'components/Body/Divider'
import SummarySection from 'components/Body/SummarySection'
import SkillsSection from 'components/Body/SkillsSection'
import ProjectsSection from 'components/Body/ProjectsSection'
import BlogSection from 'components/Body/BlogSection'
import ResumeSection from 'components/Body/ResumeSection'

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage id='element' nav={this.props.nav} updateNav={this.props.updateNav}>
        <StyledPageSection color={mainColors.creme} paddingBottom='50' paddingTop='20'>
          <StyledPageContents>
            <NavLocation
              waypointID='About'
              sectionID='1'
              setSectionID={this.props.setSectionID}/>
            <Element name='About' className='element'/>
            <h2>Hey, I'm Roger</h2>
            <Divider mobileAlign='center'/>
            <Fade top>
            <SummarySection/>
            </Fade>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection
          color={mainColors.darkblue}
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
        <StyledPageSection color={mainColors.creme} paddingBottom='50' paddingTop='20'>
          <StyledPageContents>
            <NavLocation
              waypointID='Projects'
              sectionID='2'
              setSectionID={this.props.setSectionID}/>
            <Element name='Projects' className='element'/>
            <h2>Projects</h2>
            <Divider mobileAlign='center'/>
            <ProjectsSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection
          color={mainColors.darkblue}
          paddingBottom='50'
          paddingTop='20'>
          <StyledPageContents>
            <NavLocation
              waypointID='Blog'
              sectionID='3'
              setSectionID={this.props.setSectionID}/>
            <Element name='Blog' className='element'/>
            <h2 style={{
              color: 'white'
            }}>Blog</h2>
            <Divider mobileAlign='center'/>
            <BlogSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color={mainColors.creme} paddingBottom='0' paddingTop='0'>
          <NavLocation
            waypointID='Resume'
            sectionID='3'
            setSectionID={this.props.setSectionID}/>
          <Element name='Resume' className='element'/>
          <ResumeSection/>
        </StyledPageSection>
      </StyledPage>
    );
  }
}

export default MainPage;