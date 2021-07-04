// React
import { React, Component } from "react";
// import { motion } from "framer-motion";
import Socials from "./Socials";

// Media and Icons

// React Router
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import classNames from "classnames";

// Header Component
class Header extends Component {
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
          "fixed top-0 left-0 right-0 z-50 justify-center items-center",
          this.state.color
        )}
      >
        {/* bg-codewhite shadow-md */}
        <nav className="container mx-auto px-4 xl:px-40 flex justify-center items-center h-16  ">
          <Router>
            {/* Logo / title */}
            <div className="flex-1 text-left  hidden sm:contents">
              <div className="flex-1 flex ">
                <Link
                  smooth
                  to="/#home"
                  className="text-xl text-left transform hover:scale-110"
                >
                  <b>Nathan Davenport</b>
                </Link>
              </div>
            </div>

            {/* Sections */}
            <div className="flex-1 flex flex-auto">
              <Link
                smooth
                to="/#about"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                About
              </Link>
              <Link
                smooth
                to="/#projects"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                Projects
              </Link>
              <Link
                smooth
                to="/#design"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                Design
              </Link>
              <Link
                smooth
                to="/#photobook"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                Photobook
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex-1 text-right hidden md:contents">
              <Socials />
            </div>
          </Router>
        </nav>
      </header>
    );
  }
}

export default Header;
