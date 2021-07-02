import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";
import Continue from "../Components/Continue";

// Media
import ProfilePhoto from "../Media/profile.jpeg";

class About extends Component {
  render() {
    return (
      <Page variant="DARK" id="about">
        <Title text="About:" />

        <Card variant="DARK">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-2  font-mono">
            <div className="">
              <div className="pb-6">
                <p className="font-mon">
                  <span className="text-codepink">import</span> &#123; About
                  &#125;
                  <span className="text-codepink"> from </span>“nathandaven”;
                </p>
              </div>

              <div className="">
                <h1 className="py-1 text-xl">
                  <b>Hi!</b>
                </h1>

                <p className="py-1">
                  I am an aspiring front-end developer and UI/UX designer
                  located in{" "}
                  <span className="text-codepink">Midtown, Atlanta</span>.
                </p>

                <p className="py-1">
                  I currently attend the{" "}
                  <span className="text-codemustard">
                    Georgia Institute of Technology
                  </span>{" "}
                  for <span className="text-codepink">Computational Media</span>
                  , an effort to create a more applicable Computer Science
                  degree by applying creative outlets to my technical studies. I
                  am a senior and I plan to graduate{" "}
                  <span className="text-codegreen">Spring 2022</span>.
                </p>

                <p className="py-1">
                  For the past year I have been working for{" "}
                  <a
                    href="https://www.GovernmentWindow.com"
                    className="text-codeblue"
                  >
                    Government Window
                  </a>
                  , a local software company that manages payments for
                  government clients. Over the past year I have redesigned and
                  coded out our front-end design language for 2021, shipping out
                  at least a dozen websites.
                </p>

                <p className="py-1">
                  In my free time, I like to produce music, skateboard, and
                  drink coffee! Thanks for checking out my website 😄
                </p>
              </div>

              <div className="pt-6">
                <p className="font-mono text-codewhite">
                  <span className="text-codepink">export default </span>
                  <span className="text-codegreen underline">About</span>;
                </p>
              </div>
            </div>
            <div className="px-8 flex items-center justify-center">
              <img
                className="bg-white p-1 rounded-full  shadow-lg"
                src={ProfilePhoto}
                alt="Portrait of Nathan Davenport"
              />
            </div>
          </div>
        </Card>
        <Continue />
      </Page>
    );
  }
}

export default About;
