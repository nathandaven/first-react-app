import React from "react";

import PhotobookHeader from "../Components/PhotobookHeader";
import Page from "../Components/Page";
import GooglePhotoList from "../Components/GooglePhotoList";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";

function PhotobookScreen() {
  const [currentGallery, setGallery] = React.useState(null);

  React.useEffect(() => {}, [{ currentGallery }]);

  return (
    <>
      <main className="w-full ml-auto" role="main">
        <PhotobookHeader />
        <Page>
          <div className="my-20"></div>
          <div className="y-20 w-3/4 text-left">
            <h1 className="text-4xl pb-10">
              Welcome to my <b>Photobook.</b>
            </h1>
            <h4 className="py-2 text-2xl">Select an album:</h4>
            <div className="flex justify-between py-10">
              <button
                onClick={() => setGallery("XaVbN7HVYqgGagk66")}
                className="text-left transform hover:scale-110"
              >
                Random Selections
              </button>

              <button
                onClick={() => setGallery("jA3ZRcm7KYxdYJe96")}
                className="text-left transform hover:scale-110"
              >
                December 2020
              </button>

              <button
                onClick={() => setGallery("")}
                className="text-left transform hover:scale-110"
              ></button>

              <button
                onClick={() => setGallery("")}
                className="text-left transform hover:scale-110"
              ></button>

              <button
                onClick={() => setGallery("")}
                className="text-left transform hover:scale-110"
              ></button>
            </div>
          </div>
          <div className=""></div>
          <GooglePhotoList galleryID={currentGallery} />{" "}
          {/* XaVbN7HVYqgGagk66 */}
        </Page>
      </main>
    </>
  );
}

export default PhotobookScreen;
