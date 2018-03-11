import React, {Component} from 'react';

import DATA from 'utils/DATA.js';

import ProjectCard from 'Body/components/ProjectCard';
import {Card} from 'semantic-ui-react';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = DATA;
    console.log(DATA);
  }

  render() {

    return (
      <div>
        <Card.Group itemsPerRow={1}>
          <ProjectCard
            title={this.state.projects[0].title}
            content={this.state.projects[0].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[0].title}
            content={this.state.projects[0].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
          <ProjectCard
            title={this.state.projects[1].title}
            content={this.state.projects[1].content}></ProjectCard>
        </Card.Group>
      </div>
    );
  }
}

export default MainPage;