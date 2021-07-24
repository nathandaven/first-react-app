import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import React from "react";
import Footer from "./Pages/Footer";
import Design from "./Pages/Design";
import Photobook from "./Pages/Photobook";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import PhotobookScreen from "./Screens/PhotobookScreen";
// Media
import { ReactComponent as CircleBG } from "./Media/circlebg-full.svg";
import Switch from "./Components/Switch";
import PostsScreen from "./Screens/PostsScreen";
import PostDetailScreen from "./Screens/PostDetailScreen";

function App() {
  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="App bg-codewhite dark:bg-primarygrey">
        <Router>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/photobook" component={PhotobookScreen} />
          <Route exact path="/posts" component={PostsScreen} />
          <Route
            path="/posts/:slug"
            component={(props) => (
              <PostDetailScreen post={props.post} {...props} />
            )}
          />
        </Router>
      </div>
      {/* <div className="fixed bottom-10 flex w-full justify-end pr-10 drop-shadow-lg"></div> */}
    </>
  );
}

export default App;
