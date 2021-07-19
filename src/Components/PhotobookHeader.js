// React
import { React, Component } from "react";
// import { motion } from "framer-motion";
import Socials from "./Socials";

// Media and Icons

// React Router
import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames";

import { HashLink } from "react-router-hash-link";

// Header Component
class PhotobookHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let tag = "";
    if (window.pageYOffset > 600) {
      tag = "text-codewhite mix-blend-exclusion ";
    } else {
      tag = "text-primarygrey";
    }
    this.setState({
      color: tag,
    });
  }

  render() {
    return (
      <header
        className={classNames(
          "fixed top-0 left-0 right-0 z-50 justify-center items-center text-primarygrey dark:text-codewhite",
          this.state.color
        )}
      >
        {/* bg-codewhite shadow-md */}
        <nav className="container mx-auto px-4 xl:px-40 flex justify-center items-center h-16  ">
          {/* Logo / title */}
          <div className="flex-1 text-left  ">
            <div className="flex-1 flex ">
              <button
                onClick={() => {
                  window.history.back();
                }}
                className="text-left text-xl transform hover:scale-110"
              >
                <span className="text-lg">{"<"}</span> back
              </button>
            </div>
          </div>

          {/* Sections */}
          <div className="flex-1 flex flex-auto">
            <HashLink
              smooth
              to="/#home"
              className="flex-1 flex-auto text-center transform hover:scale-110"
            >
              About
            </HashLink>
            <Link
              to="/photobook"
              className="flex-1 flex-auto text-center transform hover:scale-110"
            >
              Photobook
            </Link>
            <Link
              to="/posts"
              className="flex-1 flex-auto text-center transform hover:scale-110"
            >
              Blog
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex-1 text-right hidden md:contents">
            <Socials />
          </div>
        </nav>
      </header>
    );
  }
}

export default PhotobookHeader;
