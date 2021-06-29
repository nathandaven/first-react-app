import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";

//Media
import GWPhoto from "../Media/gw.png";

class Projects extends Component {
  render() {
    return (
      <Page variant="DARK" id="projects">
        <Title text="Projects" />

        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Card variant="DARK">
            <div className="">
              <p className="pb-4 font-mon">
                <span className="text-codepink">import </span>
                <span className="text-codesand">&#123; </span>
                GW
                <span className="text-codesand"> &#125;</span>
                <span className="text-codepink"> from </span>
                <span className="text-codeyellow">“nathandaven/projects”</span>;
              </p>

              <img
                className="rounded-md shadow-md"
                src={GWPhoto}
                alt="Government Window Project Example"
              />
              <div className="flex justify-center pt-4">
                <form action="">
                  <button className="bg-codeorange bg-opacity-75 hover:bg-opacity-100  px-12 py-2 text-primarygrey font-sans font-bold rounded-lg filter shadow-lg">
                    More >
                  </button>
                </form>
              </div>
            </div>
          </Card>
          <Card variant="DARK">
            <div className=""></div>
          </Card>
        </div>
      </Page>
    );
  }
}

export default Projects;
