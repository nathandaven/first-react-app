// React
import { React, Component } from "react";
import { motion } from "framer-motion";
import { ReactComponent as DownArrow } from "../Media/down-arrow.svg";
import { ReactComponent as DownArrowLight } from "../Media/down-arrow-light.svg";

const VARIANT_MAPS: Record<Variant, string> = {
  DARK: "bg-primarygrey text-codewhite",
  LIGHT:
    "bg-codewhite text-primarygrey dark:bg-primarygrey dark:text-codewhite",
  CIRCLE: "bg-circlebgfull bg-no-repeat bg-local bg-contain bg-top",
};

// Header Component
class Continue extends Component {
  render() {
    return (
      <div className="w-full sm:pt-10 pb-10">
        <div className="flex justify-center items-center text-center pt-10">
          <p>Continue your quest below:</p>
        </div>
        <div className="flex justify-center items-center text-center py-3 mix-blend-difference">
          <motion.div
            animate={{ y: 20 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
            }}
          >
            <DownArrowLight />
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Continue;
