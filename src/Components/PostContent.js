import React from "react";

// Contentful
import { createClient } from "contentful";
import RichContent from "../Components/RichContent";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SECRET,
});

// Header Component
function PostContent(props) {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({ content_type: "page" });
      if (!shouldCancel && response) {
        console.log(response.items);
        setPosts(response.items);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);

  if (!posts || !props.posts.fields) {
    return (
      <p className="flex justify-center w-full text-2xl text-codewhite">
        Loading...
      </p>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-sans py-4">
        <b>{props.post.fields.title}</b>
      </h1>

      <img
        src={props.post.fields.logo.fields.file.url}
        className="rounded-md drop-shadow-md py-4"
        alt={props.post.fields.logo.fields.description}
      />
      <RichContent content={props.post.fields.content} />
    </>
  );
}

export default PostContent;
