import React from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
import Title from "../Components/Title";
import Card from "../Components/Card";

// Contentful
import documentToReactComponents from "@contentful/rich-text-react-renderer";

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
      .fetch(`https://graphql.contentful.com/content/v1/spaces/beruqf6cwvuf/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer PaAlZ8Lk6fYxrDwKKmm8qDgHbYYF5WQiV0l9EQvmuf4",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPosts(data.pageCollection.items);
      });
  }, []);

  if (!posts) {
    return "Loading...";
  }

  return (
    <Page variant="DARK" id="contact">
      <Title text="Posts">
        <span className="text-xl">Coming soon!</span>
      </Title>

      {posts.map((post) => (
        <>
          <Card variant="DARK">
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
        </>
      ))}

      <div></div>
    </Page>
  );
}

export default Posts;
