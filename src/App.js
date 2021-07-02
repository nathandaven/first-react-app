import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { React, Component } from "react";
import Footer from "./Pages/Footer";
// Media
import { ReactComponent as CircleBG } from "./Media/circlebg-full.svg";

class App extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <div className="App bg-codewhite">
        <Header />
        {/* <div className="absolute w-full z-0z-0">
          <CircleBG preserveAspectRatio="none" className="" />
        </div> */}
        <main className="w-full ml-auto" role="main">
          {/* md:w-5/12 */}
          <Home />
          <About />
          <Projects />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
