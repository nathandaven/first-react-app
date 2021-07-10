// React
import { React, Component } from "react";
import classNames from "classnames";

const VARIANT_MAPS: Record<Variant, string> = {
  DARK: "bg-primarygrey text-codewhite",
  LIGHT:
    "bg-codewhitedark text-primarygrey dark:bg-primarygrey dark:text-codewhite",
  CIRCLE: "bg-circlebgfull bg-no-repeat bg-local bg-contain bg-top",
};

// Header Component
class Page extends Component {
  render() {
    return (
      /* className="container mx-auto lg:px-40 " */
      <section
        className={classNames("", VARIANT_MAPS[this.props.variant])}
        id={this.props.id}
      >
        {/*min-h-screen*/}
        <div className="container mx-auto px-4 xl:px-40 min-h-screen flex justify-around items-baseline text-center flex-col">
          {this.props.children}
        </div>
      </section>
    );
  }
}

Page.variant = VARIANT_MAPS;

Page.defaultProps = {
  variant: VARIANT_MAPS.DARK,
};

export default Page;
