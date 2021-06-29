import { React, Component } from "react";
import Page from "../Components/Page";

class Home extends Component {
  render() {
    return (
      /* className="container mx-auto lg:px-40 " */
      <Page variant="LIGHT" id="home">
        <h1 className="py-2 ext-5xl">
          <b className="text-5xl ">Hi traveler!</b>
        </h1>
        <h4 className="py-2">
          <b className="text-3xl">You found Nathan Davenport's Portfolio 😄</b>
        </h4>
      </Page>
    );
  }
}

export default Home;
