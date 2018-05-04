import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from 'components/Header/Header'
import Footer from 'components/Header/Footer'
import Nav from 'components/Header/Nav'
import MainPage from 'components/Body/MainPage'
import 'screens/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true,
      activeSection: '1'
    }
  }
  componentDidMount() {
    if (window.scrollY > 0) {
      this.setState({nav: false});
    }
    window.scrollTo(0, -100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.nav !== nextState.nav) {
      return true;
    }
    if (this.state.activeSection !== nextState.activeSection) {
      return true;
    }
    return false;
  }

  updateNav = (state) => {
    this.setState({nav: state});
  }

  handleWaypoint = (id, waypointTop) => {
    console.log(id + " " + waypointTop)
  }
  setActiveSection = (sectionID) => {
    this.setState({activeSection: sectionID});
  }

  render() {

    return (
      <div className="App">
        <Header
          nav={this.state.nav}
          updateNav={this.updateNav}
          activeSection={this.state.activeSection}/>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
            return (<MainPage
              nav={this.state.nav}
              updateNav={this.updateNav}
              setSectionID={this.setActiveSection}/>)
          }}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
