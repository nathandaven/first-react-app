import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";

class Projects extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="projects">
        <div class=" w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <Card variant="DARK">
            <p className="font-mono">hey</p>
          </Card>
          <Card variant="DARK">
            <p className="font-mono">hey</p>
          </Card>
          <Card variant="DARK">
            <p className="font-mono">hey</p>
          </Card>
          <Card variant="DARK">
            <p className="font-mono">hey</p>
          </Card>
        </div>
      </Page>
    );
  }
}

export default Projects;
