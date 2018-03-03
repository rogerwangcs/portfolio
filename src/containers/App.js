import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from 'components/Header';
import Nav from 'components/Nav';
import PostPage from 'containers/PostPage';
import PostView from 'containers/PostView';
import toPage from 'components/Page';

import 'semantic-ui-css/semantic.min.css';
import 'containers/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const PostPageHOC = toPage(PostPage);
    const PostViewHOC = toPage(PostView);
    return (
      <div className="App">
        <Header/>
        <Nav/>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
            return (<PostPageHOC posts={this.props.posts}/>)
          }}/>
          <Route
            path='/posts/'
            render={() => {
            return (
              <div>
                <PostViewHOC/>
              </div>
            )
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
