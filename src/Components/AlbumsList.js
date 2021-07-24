// React
import React from "react";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SECRET,
});

function AlbumsList(props) {
  const [contentfulAlbums, setContentfulAlbums] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({ content_type: "album" });
      if (!shouldCancel && response) {
        console.log(response.items);
        setContentfulAlbums(response.items);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);

  if (!contentfulAlbums) {
    return <p>Loading..</p>;
  }

  function updateCurrentAlbum(id) {
    props.setGallery(id);
  }

  // Header Component
  return (
    <>
      {contentfulAlbums.map((album) => (
        <button
          onClick={() => updateCurrentAlbum(album.fields.googlePhotosId)}
          className="text-left transform focus:scale-105 pb-2 pr-6"
          key={album.fields.slug}
        >
          {album.fields.title}
          {console.log(contentfulAlbums)}
        </button>
      ))}
    </>
  );
}

export default AlbumsList;
