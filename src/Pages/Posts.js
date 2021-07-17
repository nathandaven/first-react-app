import React from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
import Title from "../Components/Title";
import Card from "../Components/Card";

// Contentful
import documentToReactComponents from "@contentful/rich-text-react-renderer";

const SPACE_ID = "beruqf6cwvuf";
const SECRET = process.env.REACT_APP_CONTENTFUL_SECRET;

// From contentful tool
const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
        description
      }
      content {
        json
      }
    }
  }
}
`;

const document = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Hello world!",
          marks: [],
          data: {},
        },
      ],
    },
  ],
};

function Posts() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/`.concat(SPACE_ID),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authenticate the request
            Authorization: "Bearer ".concat(SECRET),
          },
          // send the GraphQL query
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        if (data) setPosts(data.pageCollection.items);
      });
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
    <Page variant="DARK" id="contact">
      <Title text="Posts">
        <span className="text-xl">Coming soon!</span>
      </Title>

      {posts.map((post) => (
        <Card variant="DARK" key={post.title.toString()}>
          <h1 className="text-4xl font-sans py-4">
            <b>{post.title}</b>
          </h1>
          <img
            src={post.logo.url}
            className="rounded drop-shadow-md"
            alt={post.logo.description}
          />
          {/* {documentToReactComponents(document)} */}
          {/* // -> <p><b>Hello</b><u> world!</u></p> */}
        </Card>
      ))}

      <div></div>
    </Page>
  );
}

export default Posts;
