// React
import { React, Component } from "react";
import classNames from "classnames";

const VARIANT_MAPS: Record<Variant, string> = {
  DARK: "bg-primarygrey text-codewhite",
  LIGHT: "bg-codewhitedark text-primarygrey",
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
        <div className="container mx-auto xl:px-20 min-h-screen flex justify-around items-baseline text-center flex-col p-4">
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
