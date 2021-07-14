import { React, Component } from "react";
import Page from "../Components/Page";
import Card from "../Components/Card";
import Title from "../Components/Title";
import ProjectCard from "../Components/ProjectCard";
import Continue from "../Components/Continue";

//Media
import GWPhoto from "../Media/gw.png";
import TravelerPhoto from "../Media/traveler.png";
import BarsPhoto from "../Media/bars-photo.png";
import RayTracerPhoto from "../Media/jsraytracer-photo.png";
import HearatalePhoto from "../Media/hearatale-photo.png";
import AxiomaticPhoto from "../Media/axiomatic-photo.png";
import BlindPhoto from "../Media/blind-photo.png";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Projects extends Component {
  render() {
    return (
      <Page variant="LIGHT" id="projects">
        <Title text="Projects" />

        <div className="pb-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-2 ">
          <ProjectCard
            title="Traveler: The Quest for Mead"
            date="Fall 2020"
            photo={TravelerPhoto}
            github="https://github.com/nathandaven/traveller-gba"
            link="https://github.com/nathandaven/traveller-gba"
          >
            <p>
              My final project for CS 2261 at Georgia Tech. A top down and
              side-scrolling RPG built in C and assembly for the Game Boy
              Advance, using all original art and designs.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Audio Responsive Bars"
            date="Fall 2019"
            photo={BarsPhoto}
            github="https://github.com/nathandaven/audio-responsive-bars"
            link="https://nathandaven.com/works/aframe/"
          >
            <p>
              A reactive audio engine for the aframe.io framework. The bars will
              react to the amplitude of three selected music tracks. Created for
              the class LMC 2700.
            </p>
          </ProjectCard>

          <ProjectCard
            title="jsRayTracer"
            date="Spring 2021"
            photo={RayTracerPhoto}
            github="https://github.com/nathandaven/jsRayTracer"
            link="https://github.com/nathandaven/jsRayTracer"
          >
            <p>
              This is my Ray Tracer project for CS 3451 Computer Graphics at
              Georgia Tech. This project implements ray tracing implementations
              for spheres and disks, and adds functionality for diffuse
              lighting, soft shadows, point lights, area lights, anti aliased
              sub sampling, and jitter shadow math.
            </p>
          </ProjectCard>

          <ProjectCard
            title="Third Grade Contractions"
            date="Fall 2020 - Spring 2021"
            photo={HearatalePhoto}
            github="https://github.com/penalverbj/3rdGradeLiteracyApp"
            link="https://drive.google.com/file/d/1Ca44nozhrrNWHe663-N_DIC3KSULpymz/view?usp=sharing"
          >
            <p>
              My GT Junior Design developed an iOS/Android application for Hear
              a Tale, a teaching non-profit. Using React-Native, we built the
              third grade portion of the app. This app teaches contractions
              using visual and auditory cues, with challenging quizzes and
              informative lessons.
            </p>
          </ProjectCard>
        </div>
        <div className="flex w-full justify-center text-center ">
          <a
            className="transform hover:scale-105 py-5 "
            href="https://www.github.com/nathandaven"
            target="_blank"
            rel="noreferrer"
          >
            Check out my{" "}
            <b className="text-green-900 dark:text-green-400">
              <FontAwesomeIcon className="" icon={faGithub} /> Github{"  "}
            </b>{" "}
            for more >
          </a>
        </div>
        <Continue />
      </Page>
    );
  }
}

export default Projects;
