import React from "react";
import Header from "../Components/Header";
import Page from "../Components/Page";
import GooglePhotoList from "../Components/GooglePhotoList";
import Footer from "../Pages/Footer";
import { motion } from "framer-motion";
import AlbumsList from "../Components/AlbumsList";

import Helmet from "react-helmet";

function PhotobookScreen() {
  const [currentGallery, setGallery] = React.useState(null);

  return (
    <>
      <Helmet>
        <title>Photobook | Nathan Davenport's Portfolio</title>

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Photobook | Nathan Davenport's Portfolio"
        />
        <meta
          property="og:image"
          content="https://nathandaven.com/static/media/profile.ee3ff26a.jpeg"
        />
        <meta
          property="og:site_name"
          content="Photobook | Nathan Davenport's Portfolio"
        />

        <meta
          name="twitter:title"
          content="Photobook | Nathan Davenport's Portfolio"
        />
        <meta
          name="twitter:description"
          content="Nathan Davenport is an aspiring front-end developer, UI/UX designer, and Georgia Tech student located in Midtown, Atlanta."
        />
        <meta
          name="twitter:image"
          content="https://nathandaven.com/static/media/profile.ee3ff26a.jpeg"
        />
      </Helmet>
      <main
        className="w-full ml-auto text-primarygrey dark:text-codewhite"
        role="main"
      >
        <Header solid={true} />
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
            <div className="my-20 text-left">
              <div className=" w-full md:w-3/4">
                <h1 className="text-4xl pb-10">
                  Welcome to my <b>Photobook!</b>
                </h1>
                <h4 className="py-2 text-2xl">Select an album:</h4>
              </div>

              <div className="flex flex-col md:flex-row justify-between py-10">
                <AlbumsList setGallery={setGallery} />
              </div>
            </div>
          </motion.div>
          <div className=""></div>
          <GooglePhotoList galleryID={currentGallery} />
        </Page>
        <Footer />
      </main>
    </>
  );
}

export default PhotobookScreen;
