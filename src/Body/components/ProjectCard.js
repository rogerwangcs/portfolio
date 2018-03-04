import React, {Component} from 'react'

import {Card, Icon, Image} from 'semantic-ui-react'

import {withRouter} from 'react-router-dom';

class PostCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className='PostCard' onClick={this.handleClick}>
        <Card.Content>
          <Card.Header style={{
            fontSize: '36px'
          }}>{this.props.title}</Card.Header>
          <Card.Meta>{this.props.date}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <p>{this.props.content}</p>
          </Card.Description>
          <div>
            Continue Reading...
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default withRouter(PostCard);