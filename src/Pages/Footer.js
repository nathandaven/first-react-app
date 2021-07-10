import { React, Component } from "react";
import Page from "../Components/Page";
import Continue from "../Components/Continue";
import Socials from "../Components/Socials";
class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" bg-codewhite text-primarygrey dark:bg-secondarygrey dark:text-codewhite  py-8 px-8 sm:px-0">
          <div className="container  mx-auto xl:px-40 ">
            <div className="flex justify-between  text-left">
              <b className="">Nathan Davenport</b>
              <Socials />
            </div>
            <div className="flex justify-between  text-left">
              <p className="text-sm w-1/2">
                {" "}
                Built using{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  React JS
                </a>
                ,{" "}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Framer Motion
                </a>
                , and{" "}
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS
                </a>{" "}
                😎
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
