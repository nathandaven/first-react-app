// React
import { React, Component } from "react";
import classNames from "classnames";

// Media
import { ReactComponent as WindowButtons } from "../Media/window-buttons.svg";

const VARIANT_MAPS: Record<Variant, string> = {
  DARK: "bg-secondarygrey text-codewhite",
  LIGHT: "bg-codewhite text-primarygrey",
};

// Header Component
// DARK or LIGHT variant prop
class Card extends Component {
  render() {
    return (
      <div
        className={classNames(
          "text-left w-full rounded-md shadow-xl my-2 p-8",
          VARIANT_MAPS[this.props.variant]
        )}
      >
        <div className="z-10">
          <WindowButtons />
        </div>
        <div className=" pt-4 filter font-mono">
          {/* Content */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

Card.variant = VARIANT_MAPS;

Card.defaultProps = {
  variant: VARIANT_MAPS.DARK,
};

export default Card;
