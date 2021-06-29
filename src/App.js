import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import { React, Component } from "react";

class App extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <div className="App bg-codewhite">
        <Header />
        <main className="w-full  ml-auto" role="main">
          {/* md:w-5/12 */}
          <Home />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
