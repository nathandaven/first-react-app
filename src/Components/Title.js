// React
import { React, Component } from "react";

// Header Component
class Title extends Component {
  render() {
    return (
      <div className="py-8 pb-10 text-left flex w-full">
        <h1 className="text-7xl font-bold">{this.props.text}</h1>
      </div>
    );
  }
}

export default Title;
