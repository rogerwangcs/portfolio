import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import DATA from 'utils/DATA'

import Header from 'Header/components/Header'
import Nav from 'Header/components/Nav'
import MainPage from 'Body/containers/MainPage'
import StyledPage from 'Body/containers/StyledPage'
import 'App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true
    }
  }

  updateNav = (state) => {
    this.setState({nav: state});
  }

  render() {

    return (
      <div className="App">
        <Header nav={this.state.nav} updateNav={this.updateNav}/>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
            return (
              <StyledPage nav={this.state.nav} updateNav={this.updateNav}>
                <MainPage/>
              </StyledPage>
            )
          }}/>
          <Route
            path='/posts/'
            render={() => {
            return (
              <div>
                depreciated post view page
              </div>
            )
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
