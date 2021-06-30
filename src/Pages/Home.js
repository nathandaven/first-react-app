import { React, Component } from "react";
import Page from "../Components/Page";
import { motion } from "framer-motion";

// Media
import { ReactComponent as CircleBG } from "../Media/circlebg-full.svg";

class Home extends Component {
  render() {
    return (
      <section
        className="bg-circlebg bg-no-repeat bg-local bg-circle bg-top pt-20"
        id="home"
      >
        <div className="container mx-auto xl:px-40 min-h-screen flex justify-start items-center text-left flex-col p-4  ">
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
            <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold">
              Hi traveler!
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-9xl  font-bold">
              Meet Nathan Davenport:
            </h1>

            <div className="pt-20">
              <h4 className="text-3xl font-regular">Designer</h4>
              <h4 className="text-2xl font-regular">Photographer</h4>
              <h4 className="text-xl font-regular">Guitarist</h4>
              <h4 className="text-3xl font-regular">Developer</h4>
              <h4 className="text-3xl font-regular">Music Producer</h4>
              <h4 className="text-3xl font-regular">YouTuber</h4>
            </div>
          </motion.div>
          {/* </Page> */}
        </div>
      </section>
    );
  }
}

export default Home;
