import React from "react";
import PhotobookHeader from "../Components/PhotobookHeader";
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
import Footer from "../Pages/Footer";
import { motion } from "framer-motion";
import { Link, Route } from "react-router-dom";
import PostDetailScreen from "./PostDetailScreen";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SECRET,
});

function PostsScreen() {
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
    <>
      <main
        className="w-full ml-auto text-primarygrey dark:text-codewhite"
        role="main"
      >
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
                <b>Posts.</b>
              </h1>
              <h4 className="py-2 text-2xl">Bada bing</h4>
            </div>
          </motion.div>
          {posts.map((post) => (
            <Card variant="LIGHT" key={post.fields.title.toString()}>
              <div className="flex justify-between py-6">
                <div className="text-left font-sans">
                  <h1 className="text-2xl">
                    <b>{post.fields.title}</b>
                  </h1>
                </div>
                <button className="px-6 py-2 mx-2 my-1 rounded-md bg-green-600 hover:bg-green-700  text-white  text-md font-sans drop-shadow-md">
                  {/* <Route
                    exact
                    path={"/posts/" + post.fields.title}
                    component={PostDetailScreen(post)}
                  /> */}
                  <Link
                    to={"/posts/" + post.fields.title}
                    post={post}
                    title={post.fields.title}
                  >
                    Read More >
                  </Link>
                </button>
              </div>
            </Card>
          ))}
          <div className=""></div>
        </Page>
        <Footer />
      </main>
    </>
  );
}

export default PostsScreen;
