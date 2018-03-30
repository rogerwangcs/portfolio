import React, {Component} from 'react'

import {mainColors} from 'utils/theme'
import {Element} from 'react-scroll'
import Waypoint from 'react-waypoint'
import NavLocation from 'Header/components/NavLocation'

import StyledPage from 'Body/containers/StyledPage'
import StyledPageContents from 'Body/containers/StyledPageContents'
import StyledPageSection from 'Body/containers/StyledPageSection'
import Divider from 'Body/components/Divider'
import AboutMe from 'Body/components/AboutMe'
import SummarySection from 'Body/components/SummarySection'
import SkillsSection from 'Body/components/SkillsSection'
import ProjectsSection from 'Body/components/ProjectsSection'
import BlogSection from 'Body/components/BlogSection'
import ResumeSection from 'Body/components/ResumeSection'

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
            <SummarySection/>
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