import React, {Component} from 'react';

import {connect} from "react-redux";

import PostCard from 'components/PostCard.js';
import {Card} from 'semantic-ui-react';

import 'containers/Posts.css';

const mapStateToProps = state => {
  return {posts: state.posts}
}

class ConnectedPostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const renderPosts = this
      .props
      .posts
      .map((post, index) => <PostCard post={post} key={index} index={index}/>);

    return (
      <div>
        <Card.Group itemsPerRow={1}>
          {renderPosts}
        </Card.Group>
      </div>
    );
  }
}

const PostPage = connect(mapStateToProps)(ConnectedPostPage)

export default PostPage;