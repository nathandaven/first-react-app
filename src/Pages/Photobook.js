import { React, Component } from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
import Title from "../Components/Title";
import GooglePhotoGallery from "../Components/GooglePhotoGallery";
import Card from "../Components/Card";

import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

class Photobook extends Component {
  render() {
    return (
      <>
        <Page variant="DARK" id="photobook">
          <Title text="Photobook" />
          {/* <ImageGallery items={images} /> */}
          <Card variant="DARK">
            <div className="text-center text-xl font-sans mt-4 mb-8">
              <p>
                Still working on the gallery page for this site, so enjoy this
                selection for now:
              </p>
            </div>
            <GooglePhotoGallery galleryID="AF1QipPBipqXTJd7ysp4eL7sL_jFcf6ypmASLHm6RbGZ" />
          </Card>
          <div className="py-1"></div>
        </Page>
      </>
    );
  }
}

export default Photobook;
