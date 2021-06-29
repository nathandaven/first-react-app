import { React, Component } from "react";
import Page from "../Components/Page";

class Contact extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="contact">
        <h1 className="py-2">
          <b className="text-5xl ">😄 What are you waiting for? 😄</b>
        </h1>
        <h4 className="py-2">
          <b className="text-3xl">
            <a href="mailto:nathandaven@gmail.com">nathandaven@gmail.com</a>
          </b>
        </h4>
      </Page>
    );
  }
}

export default Contact;
