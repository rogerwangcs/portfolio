import React, {Component} from 'react'
import {connect} from 'react-redux'
import {actions} from "actions/index";

import {Card, Icon, Image} from 'semantic-ui-react'

import {withRouter} from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setCurrentPostIndex: (index) => {
      dispatch(actions.setCurrentPostIndex(index))
    }
  }
}

class ConnectedPostCard extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {

    this
      .props
      .history
      .push('/posts/' + this.props.post.title);
    this
      .props
      .setCurrentPostIndex(this.props.index);

    // if (window.scrollY > window.screen.height * 0.4 - 50) {
    //   window.scrollTo(0, window.screen.height * 0.4 - 50);
    // }
  }

  render() {
    return (
      <Card className='PostCard' onClick={this.handleClick}>
        <Card.Content>
          <Card.Header style={{
            fontSize: '36px'
          }}>{this.props.post.title}</Card.Header>
          <Card.Meta>{this.props.post.date}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <p>{this.props.post.content}</p>
          </Card.Description>
          <div>
            Continue Reading...
          </div>
        </Card.Content>
      </Card>
    );
  }
}

const PostCard = connect(null, mapDispatchToProps)(ConnectedPostCard)

export default withRouter(PostCard);