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

function PostDetailScreen(props) {
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
                <b>Post.</b>
              </h1>
              <h4 className="py-2 text-2xl">Bada bing</h4>
            </div>
          </motion.div>

          <PostContent post={props.post} />

          <div className=""></div>
        </Page>
        <Footer />
      </main>
    </>
  );
}

export default PostDetailScreen;
