import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { React, Component } from "react";
import Footer from "./Pages/Footer";
import Design from "./Pages/Design";
import Photobook from "./Pages/Photobook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import PhotobookScreen from "./Screens/PhotobookScreen";
// Media
import { ReactComponent as CircleBG } from "./Media/circlebg-full.svg";

class App extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  render() {
    return (
      <div className="App bg-codewhite dark:bg-primarygrey">
        <Router>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/photobook" component={PhotobookScreen} />
        </Router>
      </div>
    );
  }
}

export default App;
