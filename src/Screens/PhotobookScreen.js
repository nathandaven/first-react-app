import { React, Component } from "react";

import PhotobookHeader from "../Components/PhotobookHeader";
import Page from "../Components/Page";
import GooglePhotoList from "../Components/GooglePhotoList";
import { Link } from "react-router-dom";

class PhotobookScreen extends Component {
  componentDidMount() {
    document.title = "Nathan Davenport";
  }

  render() {
    return (
      <>
        <main className="w-full ml-auto" role="main">
          <PhotobookHeader />
          <Page>
            <div></div>
            <h1 className="text-4xl">
              Welcome to my <b>Photobook.</b>
            </h1>
            <GooglePhotoList galleryID="AF1QipPBipqXTJd7ysp4eL7sL_jFcf6ypmASLHm6RbGZ" />
          </Page>
        </main>
      </>
    );
  }
}

export default PhotobookScreen;
