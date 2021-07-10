// React
import { React, Component } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

import Photo from "../Media/traveler.png";

// Header Component
// DARK or LIGHT variant prop
class DesignCard extends Component {
  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.goToLink = this.goToLink.bind(this);
  }

  goToLink = () => {
    window.open(this.props.link, "_blank");
  };

  render() {
    return (
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
        <Card variant="LIGHT">
          <div className="font-sans ">
            <div className="">
              <div className="py-4 -full">
                <img
                  className="object-cover h-auto  md:h-96 w-full rounded-lg shadow-lg"
                  src={this.props.photo}
                  alt={this.props.title}
                />
              </div>
              <div className="py-1">
                <h1 className="text-2xl">
                  <b>{this.props.title}</b>
                </h1>
                <h2 className=" text-md">{this.props.date}</h2>
              </div>

              <p className="py-1">{this.props.children}</p>
            </div>

            <div className="pt-6 flex justify-between items-center">
              <p className="font-mono ">
                <span className="text-codepink">export default </span>
                <span className="text-primarygrey underline">Design</span>;
              </p>
              <div className="text-right">
                <button
                  onClick={this.goToLink}
                  className="px-6 py-2 mx-2 my-1 rounded-md bg-gray-300 bg-opacity-50 hover:bg-opacity-75 text-primarygrey dark:text-codewhite text-md font-sans drop-shadow-md"
                >
                  Check it out >
                </button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }
}

export default DesignCard;
