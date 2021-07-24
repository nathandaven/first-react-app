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

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_SECRET,
});

function PostDetailScreen(props) {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let shouldCancel = false;
    const call = async () => {
      const response = await client.getEntries({
        content_type: "page",
        "fields.slug[match]": props.match.params.slug,
      });
      if (!shouldCancel && response) {
        console.log(response.items);
        setData(response.items[0].fields);
      }
    };
    call();
    return () => {
      shouldCancel = true;
    };
  }, []);

  if (!data) {
    return (
      <Page variant="LIGHT">
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
            <img
              className="rounded-lg shadow-lg"
              src={data.logo.fields.file.url}
              alt="Post logo"
            />
            <div className="my-10 w-full text-left">
              <h1 className="text-6xl pb-5">
                <b>{data.title}</b>
              </h1>
              <h4 className="py-2 text-2xl">Bada bing</h4>
            </div>
          </motion.div>

          <div className="text-left">
            <RichContent content={data.content} />
          </div>

          <div className="pt-20"></div>
        </Page>
        <Footer />
      </main>
    </>
  );
}

export default PostDetailScreen;
