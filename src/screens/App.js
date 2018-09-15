import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import withTracker from "utils/withTracker";

import styled from "styled-components";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer.js";
import About from "screens/About";
import Projects from "screens/Projects";
import ResumeView from "screens/ResumeView";
import "screens/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route
              exact
              path={process.env.PUBLIC_URL + "/"}
              component={withTracker(About)}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/projects"}
              component={withTracker(Projects)}
            />
            {/* <Route
              exact
              path={process.env.PUBLIC_URL + "/resume"}
              component={withTracker(ResumeView)}
            /> */}
            <Redirect
              from={process.env.PUBLIC_URL + "/*"}
              to={process.env.PUBLIC_URL + "/"}
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
