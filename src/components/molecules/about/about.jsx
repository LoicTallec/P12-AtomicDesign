import React from "react";
import "./about.css";
import Image from "../../atoms/image/image";
import { about } from "../../../assets/data.json";

const About = () => {
  return (
    <section id="home" className="about">
      <Image
        className="setup"
        src={about.setup}
        alt="Setup de Loïc Tallec"
      />
      <figure className="about-header">
        <Image
          className="head"
          src={about.logo}
          alt="Logo de VisuArt"
        />
        <figcaption id="about">
          {about.header}
        </figcaption>
      </figure>

      <figure className="descrition">
        <h1>{about.about}</h1>
        <Image
          src={about.picture}
          alt="Loïc Tallec"
        />
        <figcaption>
          {about.text}
        </figcaption>
      </figure>
    </section>
  );
};

export default About;