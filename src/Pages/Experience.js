import { React, Component } from "react";
import Page from "../Components/Page";

class Experience extends Component {
  render() {
    return (
      /* className="container mx-auto lg:px-40 " */
      <Page variant="DARK" id="experience">
        <div className="py-40 mx-auto text-center">
          <h1 className="py-2">
            <b className="text-5xl text-codewhite">Experience</b>
          </h1>
          <h4 className="py-2">
            <b className="text-3xl text-codewhite">Something something</b>
          </h4>
        </div>
      </Page>
    );
  }
}

export default Experience;
