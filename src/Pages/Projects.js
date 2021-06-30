import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";

//Media
import GWPhoto from "../Media/gw.png";

class Projects extends Component {
  render() {
    return (
      <Page variant="DARK" id="projects">
        <Title text="Projects" />

        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2">
          <Card variant="DARK">
            <div className=""></div>
          </Card>
        </div>
      </Page>
    );
  }
}

export default Projects;
