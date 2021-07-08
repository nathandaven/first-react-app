import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import { JustifiedLayout } from "@egjs/infinitegrid";

function getItems(nextGroupKey, nextKey, count) {
  const nextItems = [];

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const shuffle = (array) => {
  // loop all elements
  for (let i = array.length - 1; i > 0; i--) {
    // pickup a random element
    const j = Math.floor(Math.random() * i);
    const temp = array[i];

    // swap it with the current element
    array[i] = array[j];
    array[j] = temp;
  }
};

const GooglePhotoList = () => {
  const [images, setImages] = React.useState(null);
  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await axios.get(
        "https://simple-vine-knife.glitch.me/XaVbN7HVYqgGagk66"
      );
      shuffle(response);
      if (!shouldCancel && response.data && response.data.length > 0) {
        setImages(
          response.data.map((url) => ({
            original: `${url}=w1200-h800-c`,
            thumbnail: `${url}=w120-h80-c`,
          }))
        );
      }
    };
    call();
    return () => (shouldCancel = true);
  }, []);
  return images ? (
    <div className="container ">
      {/* https://www.npmjs.com/package/react-infinite-scroll-component */}
      {/* https://github.com/naver/egjs-infinitegrid/tree/master/packages/react-infinitegrid */}
      {/*       <JustifiedLayout
            className="justifiedlayout container"
            groupBy={item => item.props["data-groupkey"]}
            options={{
                isOverflowScroll: false,
                useFit: true,
                useRecycle: true,
                horizontal: false,
            }}
            layoutOptions={{
                margin: 5,
                column: [1,8],
                row: 0,
                minSize: 0,
                maxSize: 0,
            }}
            onAppend={e => {
                const nextGroupKey = (+e.groupKey! || 0) + 1;
                const nextKey = items.length;

                setItems([
                    ...items,
                    ...getItems(nextGroupKey, nextKey, 10),
                ]);
            }}>
            {items.map(item => <Item data-groupkey={item.groupKey} key={item.key} num={item.key} />)}
        </JustifiedLayout> */}
    </div>
  ) : null;
};

export default GooglePhotoList;
