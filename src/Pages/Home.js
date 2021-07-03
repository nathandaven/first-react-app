import { React, Component } from "react";
import Page from "../Components/Page";
import { motion } from "framer-motion";
import Continue from "../Components/Continue";

// Media
import { ReactComponent as CircleBG } from "../Media/circlebg-full.svg";

class Home extends Component {
  render() {
    return (
      <section
        className="bg-circlebgfull bg-no-repeat bg-local bg-circle bg-top"
        id="home"
      >
        {/* <div className="container mx-auto xl:px-40 min-h-screen flex justify-start items-center text-left flex-col p-4  "> */}
        <Page>
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
            <div className="pt-10 pb:20 my-10 md:pt-10 md:pb-0 ">
              <div className="flex text-left pt-5">
                <h2 className="text-3xl  md:text-4xl lg:text-5xl font-bold">
                  Hi traveler!
                </h2>
              </div>
              <div className="flex text-left">
                <h1 className="text-5xl md:text-7xl lg:text-9xl  font-bold">
                  Meet Nathan Davenport:
                </h1>
              </div>
            </div>

            <div className="pt-20">
              <div className="flex align-middle	 justify-end">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.5,
                  }}
                >
                  <h4 className="md:text-5xl sm:text-3xl text-xl  font-regular">
                    YouTuber
                  </h4>
                </motion.div>
              </div>
              <div className="pt-5 sm:pt-10 flex align-middle	 justify-around">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.8,
                  }}
                >
                  <h4 className="md:text-5xl sm:text-3xl text-xl  font-regular">
                    Designer
                  </h4>
                </motion.div>
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.2,
                  }}
                >
                  <h4 className="pt-5 sm:pt-10 md:text-3xl sm:text-2xl text-xl  font-regular">
                    Guitarist
                  </h4>
                </motion.div>
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                >
                  <h4 className="pt-20 md:text-5xl sm:text-3xl text-xl  font-regular">
                    Developer
                  </h4>
                </motion.div>
              </div>
              <div className="pt-0 sm:pt-5 flex align-middle	 justify-left">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                  }}
                >
                  <h4 className="md:text-4xl sm:text-2xl text-xl  font-regular">
                    Photographer
                  </h4>
                </motion.div>
              </div>

              <div className="pt-10 sm:pt-10 flex align-middle	 justify-end">
                <motion.div
                  animate={{ scale: 1.2 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2.3,
                  }}
                >
                  <h4 className="md:text-4xl sm:text-2xl text-xl  font-regular">
                    Music Producer
                  </h4>
                </motion.div>
              </div>
              <Continue />
            </div>
          </motion.div>
        </Page>
        {/* </div> */}
      </section>
    );
  }
}

export default Home;
