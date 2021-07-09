import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

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
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(response.data);
        setLoadedImages(response.data.splice(0, 5));
      }
    };
    call();
    return () => (shouldCancel = true);
  }, [props.galleryID]);

  const fetchMoreData = () => {
    setLoadedImages(loadedImages.concat(images.splice(0, 5)));
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
          {console.log(images)}
          {console.log(loadedImages)}
          {loadedImages.map((src, index) => (
            <div className="flex text-center justify-center h-full" key={index}>
              <img className="py-4 w-full" src={`${src}=w1200`} alt="" />
            </div>
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
