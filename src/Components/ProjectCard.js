// React
import { React, Component } from "react";
import classNames from "classnames";
import Card from "./ProjectCard";
import TravelerPhoto from "../Media/traveler.png";

// Header Component
// DARK or LIGHT variant prop
class ProjectCard extends Component {
  render() {
    return (
      <Card variant="LIGHT">
        <div className="">
          <div className="">
            <div className="py-4">
              <img
                className="rounded-lg drop-shadow-lg"
                src={this.props.photo}
                alt={this.props.title}
              />
            </div>
            <h1 className="py-1 text-xl">
              <b>{this.props.title}</b>
            </h1>

            <p className="py-1">{this.props.description}</p>
          </div>

          <div className="pt-6 flex justify-between items-center">
            <p className="font-mono ">
              <span className="text-codepink">export default </span>
              <span className="text-primarygrey underline">Project</span>;
            </p>
            <div className="text-right">
              <button className="px-6 py-2 mx-2 my-1 rounded-md bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-primarygrey text-md font-sans drop-shadow-md">
                <a href={this.props.link}>Details ></a>
              </button>
              <button className="px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white text-md font-sans drop-shadow-md">
                <a href={this.props.github}>Github ></a>
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProjectCard;
