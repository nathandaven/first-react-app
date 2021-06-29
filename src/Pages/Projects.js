import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";

//Media
import GWPhoto from "../Media/gw.png";

class Projects extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="projects">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Card variant="DARK">
            <div className="">
              <h1 className="y-4">Government Window Corporate Website</h1>
              <img
                className="rounded-md shadow-md"
                src={GWPhoto}
                alt="Government Window Project Example"
              />
            </div>
          </Card>
          <Card variant="DARK">
            <div className="">
              <h1 className="py-4">Government Window Corporate Website</h1>
              <img
                className="rounded-md shadow-md"
                src={GWPhoto}
                alt="Government Window Project Example"
              />
            </div>
          </Card>
          <Card variant="DARK">
            <div className="">
              <h1 className="py-4">Government Window Corporate Website</h1>
              <img
                className="rounded-md shadow-md"
                src={GWPhoto}
                alt="Government Window Project Example"
              />
            </div>
          </Card>
          <Card variant="DARK">
            <div className="">
              <h1 className="py-4">Government Window Corporate Website</h1>
              <img
                className="rounded-md shadow-md"
                src={GWPhoto}
                alt="Government Window Project Example"
              />
            </div>
          </Card>
        </div>
      </Page>
    );
  }
}

export default Projects;
