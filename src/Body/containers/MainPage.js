import React, {Component} from 'react'

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

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage id='element' nav={this.props.nav} updateNav={this.props.updateNav}>
        <StyledPageSection color='white'>
          <StyledPageContents>
            <NavLocation
              waypointID='About'
              sectionID='1'
              setSectionID={this.props.setSectionID}/>
              <Element name='About' className='element'/>
            <h2>Hey, I'm Roger</h2>
            <Divider/>
            <SummarySection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color='#141c30'>
          <StyledPageContents>
            <h2 style={{
              color: 'white'
            }}>Tech Stack</h2>
            <Divider/>
            <SkillsSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color='lightgray'>
          <StyledPageContents>
            <NavLocation
              waypointID='Projects'
              sectionID='2'
              setSectionID={this.props.setSectionID}/>
            <Element name='Projects' className='element'/>
            <h2>Projects</h2>
            <Divider/>
            <ProjectsSection/>
          </StyledPageContents>
        </StyledPageSection>
      </StyledPage>
    );
  }
}

export default MainPage;