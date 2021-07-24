import { React, Component } from "react";

import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Design from "../Pages/Design";
import Footer from "../Pages/Footer";

class Main extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <>
        <Header isHomePage={true} />

        <main className="w-full ml-auto" role="main">
          <Home />
          <About />
          <Projects />
          <Design />
          {/* <Photobook /> */}
          {/* <Posts /> */}
          <Footer />
        </main>
      </>
    );
  }
}

export default Main;
