import React from "react";

import PhotobookHeader from "../Components/PhotobookHeader";
import Page from "../Components/Page";
import GooglePhotoList from "../Components/GooglePhotoList";
import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import { motion } from "framer-motion";

function PhotobookScreen() {
  const [currentGallery, setGallery] = React.useState("XaVbN7HVYqgGagk66");

  return (
    <>
      <main className="w-full ml-auto" role="main">
        <PhotobookHeader />
        <Page>
          <div className="my-20"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              },
            }}
          >
            <div className="my-20 w-full md:w-3/4 text-left">
              <h1 className="text-4xl pb-10">
                Welcome to my <b>Photobook.</b>
              </h1>
              <h4 className="py-2 text-2xl">Select an album:</h4>
              <div className="flex flex-col sm:flex-row justify-between py-10">
                <button
                  onClick={() => setGallery("XaVbN7HVYqgGagk66")}
                  className="text-left transform focus:scale-105"
                >
                  Random Selections
                </button>

                <button
                  onClick={() => setGallery("jA3ZRcm7KYxdYJe96")}
                  className="text-left transform focus:scale-105"
                >
                  December 2020
                </button>

                <button
                  onClick={() => setGallery("")}
                  className="text-left transform focus:scale-110"
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
          </motion.div>
          <div className=""></div>
          <GooglePhotoList galleryID={currentGallery} />{" "}
          {/* XaVbN7HVYqgGagk66 */}
        </Page>
      </main>
    </>
  );
}

export default PhotobookScreen;
