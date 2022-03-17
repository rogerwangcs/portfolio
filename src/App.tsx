import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import About from "screens/About";
import Projects from "screens/Projects";
import "App.scss";

// add google analytics

const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-56570124-2");
  }, []);

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
