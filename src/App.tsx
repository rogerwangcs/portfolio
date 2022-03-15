import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer.js";
import About from "screens/About";
import Projects from "screens/Projects";
import "screens/App.scss";

// add google analytics

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<About />} />
          <Route
            path={process.env.PUBLIC_URL + "/projects"}
            element={<Projects />}
          />
          {/* <Route
            path={process.env.PUBLIC_URL + "/*"}
            element={<Navigate replace to={process.env.PUBLIC_URL + "/"} />}
          /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
