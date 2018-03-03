import React, {Component} from 'react';
import {connect} from "react-redux";
import {actions} from "actions/index.js";

const mapStateToProps = state => {
  return {posts: state.posts, currentPostIndex: state.currentPostIndex}
}

class ConnectedPostView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.posts[this.props.currentPostIndex].title}</h1>
        <p>
          {this.props.posts[this.props.currentPostIndex].date}
        </p>
        <p>
          {this.props.posts[this.props.currentPostIndex].content}
        </p>
      </div>
    );
  }
}

const PostView = connect(mapStateToProps)(ConnectedPostView);

export default PostView;