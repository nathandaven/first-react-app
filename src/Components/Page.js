// React
import { React, Component } from "react";
import classNames from "classnames";

const VARIANT_MAPS: Record<Variant, string> = {
  DARK: "bg-primarygrey text-codewhite",
  LIGHT: "bg-codewhite text-primarygrey",
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
        <div className="container mx-auto xl:px-40 min-h-screen flex justify-center items-center text-center flex-col p-4">
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
