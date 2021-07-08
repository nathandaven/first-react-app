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
  }

  render() {
    return (
      <div className="App bg-codewhite">
        <Router>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/photobook" component={PhotobookScreen} />
        </Router>
      </div>
    );
  }
}

export default App;
