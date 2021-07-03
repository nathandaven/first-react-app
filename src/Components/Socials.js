// React
import { React, Component } from "react";

// Media and Icons
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// React Router
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// Header Component
class Socials extends Component {
  render() {
    return (
      <div className="flex-1 text-right">
        <Router>
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
        </Router>
      </div>
    );
  }
}

export default Socials;
