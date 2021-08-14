import "./App.css";

import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import MainScreen from "./Screens/MainScreen";
import PhotobookScreen from "./Screens/PhotobookScreen";
// Media
import PostsScreen from "./Screens/PostsScreen";
import PostDetailScreen from "./Screens/PostDetailScreen";
import Switch from "./Components/Switch";

import { Helmet } from "react-helmet";

function App() {
  const [isDark, setDark] = React.useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false
  );

  React.useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <>
      <div className="App bg-codewhitedark dark:bg-primarygrey">
        <Helmet>
          <title>Nathan Davenport's Portfolio</title>
          {/*<meta
            name="theme-color"
            content=
            
            {window
              .getComputedStyle(document.getElementsByClassName("App")[0], null)
              .getPropertyValue("background-color")}
            />*/}

          <meta
            name="description"
            content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta. "
          />

          <link rel="canonical" href="https://nathandaven.com/" />
          <meta name="robots" content="index, follow" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content="Nathan Davenport's Portfolio" />
          <meta
            property="og:description"
            content="DESCRIPTION OF PAGE CONTENT"
          />
          <meta
            property="og:image"
            content="https://nathandaven.com/static/media/profile.ee3ff26a.jpeg"
          />
          <meta property="og:url" content="https://nathandaven.com/" />
          <meta
            property="og:site_name"
            content="Nathan Davenport's Portfolio"
          />

          <meta name="twitter:title" content="Nathan Davenport's Portfolio" />
          <meta
            name="twitter:description"
            content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta."
          />
          <meta
            name="twitter:image"
            content="https://nathandaven.com/static/media/profile.ee3ff26a.jpeg"
          />
          <meta name="twitter:site" content="@nathandaven" />
          <meta name="twitter:creator" content="@nathandaven" />

          <meta property="profile:first_name" content="Nathan" />
          <meta property="profile:last_name" content="Davenport" />
        </Helmet>

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
        <div className="fixed bottom-10 right-4 md:right-8">
          <Switch />
        </div>
      </div>
      {/* <div className="fixed bottom-10 flex w-full justify-end pr-10 drop-shadow-lg"></div> */}
    </>
  );
}

export default App;
