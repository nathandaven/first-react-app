import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";
import DesignCard from "../Components/DesignCard";
import Continue from "../Components/Continue";

//Media
import GWPhoto from "../Media/gw-site-photo.png";
import GWCardPadPhoto from "../Media/card-pad-photo.png";
import PauldingPhoto from "../Media/paulding-photo.png";
import MaconBibbPhoto from "../Media/maconbibb-photo.png";
import AxiomaticPhoto from "../Media/axiomatic-photo.png";
import BlindPhoto from "../Media/blind-photo.png";

class Design extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="design">
        <Title text="Design" />
        <div className="pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <DesignCard
            title="Macon-Bibb County Tax"
            photo={MaconBibbPhoto}
            link="http://www.govtwindow.net/"
          >
            <p>
              One of the sites I developed through my internship at Government
              Window. Designed, developed, and shipped all myself, using Figma,
              Bootstrap 4 and JQuery.
            </p>
          </DesignCard>

          <DesignCard
            title="Paulding County Tax"
            photo={PauldingPhoto}
            link="http://www.pauldingcountytax.com/index.html"
          >
            <p>
              One of the sites I developed through my internship at Government
              Window. Designed, developed, and shipped all myself, using Figma,
              Bootstrap 4 and JQuery.
            </p>
          </DesignCard>

          <DesignCard
            title="Government Window Homepage"
            photo={GWPhoto}
            link="https://www.governmentwindow.com/"
          >
            <p>
              Redesigned the Government Window corporate homepage. Hired a
              freelancer through my internship to create the templates, and then
              I customized these templates. Designed in Figma and developed in
              Bootstrap.
            </p>
          </DesignCard>

          <DesignCard
            title="Government Window Stationary"
            photo={GWCardPadPhoto}
            link="https://www.governmentwindow.com/"
          >
            <p>
              Redesigned the business cards for the whole company, as well as
              notepads, brochures, pens, letterheads, power points, and more.
              All in use in the company by employees today. Designed in Adobe
              Illustrator for printing.
            </p>
          </DesignCard>

          <DesignCard
            title="Ethics of Axiomatic Design"
            photo={AxiomaticPhoto}
            link="https://drive.google.com/file/d/1q1UCfAxZFIDYwymI4vHIUr1rvA1uQrFq/view?usp=sharing"
          >
            <p>
              An essay about Axiomatic Design when it comes to user interface
              and user experience. Touches on the problems with addictive, "hook
              model" design, found in apps such as TikTok, Instagram, and other
              social media apps.
            </p>
          </DesignCard>

          <DesignCard
            title="Blind Style Guide"
            photo={BlindPhoto}
            link="https://drive.google.com/file/d/129HrQ5LrOe5QZlsJDLEu0YHb7Q4oNDXY/view"
          >
            <p>
              Mockup style guide for a brand redesign of skateboard brand Blind.
              Follows a primary color scheme and features several different
              examples. Made for LMC 2720 at Georgia Tech.{/*  */}
            </p>
          </DesignCard>
        </div>
        <div></div>
      </Page>
    );
  }
}

export default Design;
