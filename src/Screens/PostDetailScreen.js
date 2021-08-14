import React from "react";
import PhotobookHeader from "../Components/PhotobookHeader";
import Page from "../Components/Page";

// Contentful
import { createClient } from "contentful";
import RichContent from "../Components/RichContent";
import Footer from "../Pages/Footer";
import { motion } from "framer-motion";

import Helmet from "react-helmet";

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
      <Helmet>
        <title>{data.title} | Nathan Davenport's Portfolio</title>
        <meta name="description" content={data.description} />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={data.title + " | Nathan Davenport's Portfolio"}
        />
        <meta property="og:description" content={data.description} />
        <meta
          property="og:image"
          content="https://nathandaven.com/static/media/profile.ee3ff26a.jpeg"
        />
        <meta
          property="og:site_name"
          content={data.title + " | Nathan Davenport's Portfolio"}
        />

        <meta
          name="twitter:title"
          content={data.title + " | Nathan Davenport's Portfolio"}
        />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.logo.fields.file.url} />
        <meta name="twitter:site" content="@nathandaven" />
        <meta name="twitter:creator" content="@nathandaven" />
      </Helmet>
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
              <h4 className="py-2 text-2xl">{data.description}</h4>
            </div>
          </motion.div>

          <div className="container text-left ">
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
