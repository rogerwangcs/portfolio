import React, {Component} from 'react';

import StyledPage from 'Body/containers/StyledPage'
import StyledPageContents from 'Body/containers/StyledPageContents'
import StyledPageSection from 'Body/containers/StyledPageSection'
import AboutMe from 'Body/components/AboutMe'

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledPage nav={this.props.nav} updateNav={this.props.updateNav}>
        <StyledPageSection color='white'>
          <StyledPageContents>
            <AboutMe/>
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