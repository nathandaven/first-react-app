import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";
import Continue from "../Components/Continue";
//Media
import GWPhoto from "../Media/gw.png";
import TravelerPhoto from "../Media/traveler.png";

class Projects extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="projects">
        <Title text="Projects" />

        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <Card variant="LIGHT">
            <div className="">
              <div className="">
                <div className="py-4">
                  <img
                    className="rounded-lg drop-shadow-lg"
                    src={TravelerPhoto}
                    alt="Title screen of my Game Boy Advance game, Traveler: The Quest for Mead"
                  />
                </div>
                <h1 className="pt-1 pb-2 text-2xl font-sans">
                  <b>Traveler: The Quest for Mead</b>
                </h1>

                <p className="py-1 font-sans">
                  My final project for CS 2261 at Georgia Tech. A top down and
                  side-scrolling RPG built in C and assembly for the Game Boy
                  Advance, using all original art and designs.
                </p>
              </div>

              <div className="pt-6 flex justify-between items-center">
                <p className="font-mono ">
                  <span className="text-codepink">export default </span>
                  <span className="text-primarygrey underline">Project</span>;
                </p>
                <div className="text-right">
                  <button className="px-6 py-2 mx-2 my-1 rounded-md bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-primarygrey text-md font-sans drop-shadow-md">
                    Details >
                  </button>
                  <button className="px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white text-md font-sans drop-shadow-md">
                    Github >
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div></div>
      </Page>
    );
  }
}

export default Projects;
