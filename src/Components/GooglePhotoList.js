import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { motion } from "framer-motion";

import InfiniteScroll from "react-infinite-scroll-component";

function GooglePhotosList(props) {
  const [images, setImages] = React.useState(null);
  const [loadedImages, setLoadedImages] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await axios.get(
        "https://simple-vine-knife.glitch.me/" + props.galleryID
      );
      /*       const response = await fetch(
        "https://simple-vine-knife.glitch.me/" + props.galleryID,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ); */

      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data);
        setLoadedImages(response.data.splice(0, 4));
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, [props.galleryID]);

  const fetchMoreData = () => {
    setLoadedImages(loadedImages.concat(images.splice(0, 1)));
  };

  if (props.galleryID) {
    return loadedImages && images ? (
      <div className="w-full ">
        <InfiniteScroll
          dataLength={images.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={true}
          scrollThreshold={0.95}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {loadedImages.map((src, index) => (
            <motion.div
              key={index}
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
              <div
                className="flex flex-col text-center justify-center h-full"
                key={index}
              >
                <img
                  className="py-4 w-full"
                  src={`${src}=w1200`}
                  alt="Retrieved from Google Photos"
                  loading="lazy"
                  key={index}
                />
              </div>
            </motion.div>
          ))}
        </InfiniteScroll>
      </div>
    ) : (
      <>
        <div className="flex text-center justify-center font-sans text-md py-20">
          <p>Loading...</p>
        </div>
      </>
    );
  } else {
    return <div className=""></div>;
  }
}

export default GooglePhotosList;
