import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from 'Header/components/Header'
import Nav from 'Header/components/Nav'
import MainPage from 'Body/containers/MainPage'
import 'App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.nav !== nextState.nav) {
      return true;
    }
    return false;
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
            return (<MainPage nav={this.state.nav} updateNav={this.updateNav}/>)
          }}/>
        </Switch>
      </div>
    );
  }
}

export default App;
