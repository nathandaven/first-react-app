import { React, Component } from "react";

import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Design from "../Pages/Design";
import Footer from "../Pages/Footer";

import Helmet from "react-helmet";

class Main extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <>
        <Helmet>
          <meta name="theme-color" content="#cf9f74" />
        </Helmet>
        <Header isHomePage={true} />

        <main
          className="w-full ml-auto bg-codewhite dark:bg-primarygrey"
          role="main"
        >
          <Home />
          <About />
          <Projects />
          <Design />
          {/* <Photobook /> */}
          {/* <Posts /> */}
          <Footer className="dark:bg-secondarygrey" />
        </main>
      </>
    );
  }
}

export default Main;
