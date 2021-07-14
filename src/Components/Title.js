// React
import { React, Component } from "react";

// Header Component
class Title extends Component {
  render() {
    return (
      <div className="py-20 pb-10">
        <div className="text-left flex">
          <h1 className="text-6xl font-bold">{this.props.text}:</h1>
        </div>
        <p className="font-mono pt-6 text-left">
          <span className="text-codepink">import</span> &#123; {this.props.text}{" "}
          &#125;
          <span className="text-codepink"> from </span>
          “nathandaven";
        </p>
        <p className="pt-6 text-left font-sans">{this.props.children}</p>
      </div>
    );
  }
}

export default Title;
