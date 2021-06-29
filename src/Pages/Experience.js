import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";

class Experience extends Component {
  render() {
    return (
      /* className="container mx-auto lg:px-40 " */
      <Page variant="DARK" id="experience">
        <Title text="Experience" />

        <Card variant="DARK">
          <div className="">
            <h1 className="y-4">Something something</h1>
          </div>
        </Card>
      </Page>
    );
  }
}

export default Experience;
