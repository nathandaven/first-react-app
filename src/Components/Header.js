// React
import { React, Component } from "react";
// import { motion } from "framer-motion";

// Media and Icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faEnvelopeOpen,
  faEnvelopeOpenText,
  faEnvelopeSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Router
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// Header Component
class Header extends Component {
  render() {
    return (
      <header className="sticky top-0 z-50 justify-center items-center bg-codewhite shadow-md">
        <nav className="container mx-auto xl:px-40 flex justify-center items-center h-16 px-4">
          <Router>
            {/* Logo / title */}
            <div className="flex-1 text-left">
              <div className="flex-1 flex flex-auto">
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
                to="/#home"
                className="flex-1  flex-auto text-center transform hover:scale-110"
              >
                Home
              </Link>
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
                to="/#experience"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                Experience
              </Link>
              <Link
                smooth
                to="/#contact"
                className="flex-1 flex-auto text-center transform hover:scale-110"
              >
                Contact
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex-1 text-right">
              <a
                href="https://www.instagram.com/nathandaven"
                target="_blank"
                rel="noreferrer"
                className="text-xl pl-2"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faInstagram}
                />
              </a>
              <a
                href="https://www.github.com/nathandaven"
                className="text-xl motion-safe:hover:scale-110  pl-2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faGithub}
                />
              </a>

              <a
                href="https://www.twitter.com/nathandaven"
                className="text-xl motion-safe:hover:scale-110  pl-2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faTwitter}
                />
              </a>
              <a
                href="https://www.youtube.com/user/thoseweirdpeoples"
                className="text-xl motion-safe:hover:scale-110  pl-2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faYoutube}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/nathandaven"
                className="text-xl motion-safe:hover:scale-110  pl-2"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faLinkedin}
                />
              </a>
              <a
                href="mailto:nathandaven@gmail.com"
                className="text-xl motion-safe:hover:scale-110  pl-2"
              >
                <FontAwesomeIcon
                  className="transform hover:scale-110"
                  icon={faEnvelope}
                />
              </a>
            </div>
          </Router>
        </nav>
      </header>
    );
  }
}

export default Header;
