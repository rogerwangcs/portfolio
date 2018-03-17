import React, {Component} from 'react';

import StyledPage from 'Body/containers/StyledPage'
import StyledPageContents from 'Body/containers/StyledPageContents'
import StyledPageSection from 'Body/containers/StyledPageSection'
import AboutMe from 'Body/components/AboutMe'
import SummarySection from 'Body/components/SummarySection'
import SkillsSection from 'Body/components/SkillsSection'

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage nav={this.props.nav} updateNav={this.props.updateNav}>
        <StyledPageSection color='white'>
          <StyledPageContents>
            <h2>Hey, I'm Roger</h2>
            <SummarySection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color='#1b1c1e'>
          <StyledPageContents>
            <h2 style={{color: 'white'}}>Tech Stack</h2>
            <SkillsSection/>
          </StyledPageContents>
        </StyledPageSection>
        <StyledPageSection color='lightgray'>
          <StyledPageContents>
            <h2>Projects</h2>
          </StyledPageContents>
        </StyledPageSection>
      </StyledPage>
    );
  }
}

export default MainPage;