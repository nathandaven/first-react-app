// React
import { React, Component } from "react";
import classNames from "classnames";
import Card from "./ProjectCard";

// Header Component
// DARK or LIGHT variant prop
class ProjectCard extends Component {
  render() {
    return (
      <Card variant="DARK">
        <div className="">
          <p className="pb-4 font-mon">
            <span className="text-codepink">import </span>
            <span className="text-codesand">&#123; </span>
            {this.props.name}
            <span className="text-codesand"> &#125;</span>
            <span className="text-codepink"> from </span>
            <span className="text-codeyellow">“nathandaven/projects”</span>;
          </p>

          {this.props.children}

          {/* <img
          className="rounded-md shadow-md"
          src={GWPhoto}
          alt="Government Window Project Example"
        /> */}
          <div className="flex justify-center pt-4">
            <form action="">
              <button className="transition duration-200 bg-green-600 bg-opacity-75 hover:bg-opacity-100  px-12 py-2 text-codewhite font-sans font-bold rounded-lg filter shadow-lg">
                More >
              </button>
            </form>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;
