import { React, Component } from "react";

import Header from "../Components/Header";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Design from "../Pages/Design";
import Photobook from "../Pages/Photobook";
import Footer from "../Pages/Footer";
import Posts from "../Pages/Posts";

class Main extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <>
        <Header />

        <main className="w-full ml-auto" role="main">
          <Home />
          <About />
          <Projects />
          <Design />
          <Photobook />
          <Posts />
          <Footer />
        </main>
      </>
    );
  }
}

export default Main;
