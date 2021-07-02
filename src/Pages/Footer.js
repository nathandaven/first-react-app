import { React, Component } from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" bg-codewhite text-primarygrey p-8 ">
          <div className="container  mx-auto xl:px-40 flex justify-between  text-left ">
            <ul>
              <li className="pb-4">
                <b>Nathan Davenport</b>
              </li>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Posts</li>
              <li>Photobook</li>
            </ul>
            <ul>
              <li className="pb-4"></li>
            </ul>
            <ul>
              <li className="pb-4"></li>
            </ul>
            <ul>
              <li className="pb-4"></li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
