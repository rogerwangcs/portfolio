import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import DATA from 'utils/DATA';

import Header from 'Header/components/Header';
import Nav from 'Header/components/Nav';
import MainPage from 'Body/containers/MainPage';
import PageHOC from 'Body/containers/PageHOC';

import 'App.css';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const MainPageHOC = PageHOC(MainPage);
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
            return (<MainPageHOC/>)
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
