// React
import React from "react";

import "./Switch.css";

import Helmet from "react-helmet";

// Header Component
function Switch(props) {
  const [active, setActive] = React.useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? true
      : false
  );

  const toggleDarkMode = () => {
    setActive(!active);
  };

  React.useEffect(() => {
    if (active) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [active]);

  return (
    <>
      <Helmet>
        <meta name="theme-color" content={active ? "#171815" : "#eaeae5"} />
      </Helmet>
      <label className="switch" htmlFor="checkbox">
        <input
          type="checkbox"
          checked={active}
          onChange={toggleDarkMode}
          id="checkbox"
        />
        <div className="slider round"></div>
      </label>
    </>
  );
}

export default Switch;
