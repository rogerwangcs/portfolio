import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer.js";
import About from "screens/About";
import "screens/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <About />;
            }}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
