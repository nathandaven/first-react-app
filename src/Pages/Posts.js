import React from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
import Title from "../Components/Title";
import Card from "../Components/Card";

// Contentful
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import RichContent from "../Components/RichContent";
import PostContent from "../Components/PostContent";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SECRET,
});

function Posts() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({ content_type: "page" });
      if (!shouldCancel && response) {
        setPosts(response.items);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);

  if (!posts) {
    return (
      <Page variant="DARK">
        <p className="flex justify-center w-full text-2xl text-codewhite">
          Loading...
        </p>
      </Page>
    );
  }

  return (
    <Page variant="DARK" id="posts">
      <Title text="Posts"></Title>

      {posts.map((post) => (
        <Card variant="DARK" key={post.fields.title.toString()}>
          <h1 className="text-4xl font-sans py-4">
            <b>{post.fields.title}</b>
          </h1>
        </Card>
      ))}

      <div></div>
    </Page>
  );
}

export default Posts;
