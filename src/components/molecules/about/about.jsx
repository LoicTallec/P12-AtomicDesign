import React from "react";
import "./about.css";
import Image from "../../atoms/image/image";
import data from "../../../assets/data.json";

const About = () => {
  return (
    <section id="home" className="about">
      <Image
        className="setup"
        src={data.about.setup}
        alt="Setup de Loïc Tallec"
      />
      <figure className="about-header">
        <Image
          className="head"
          src={data.about.logo}
          alt="Logo de VisuArt"
        />
        <figcaption id="about">
          {data.about.header}
        </figcaption>
      </figure>

      <figure className="descrition">
        <h1>{data.about.about}</h1>
        <Image
          src={data.about.picture}
          alt="Loïc Tallec"
        />
        <figcaption>
          {data.about.text}
        </figcaption>
      </figure>
    </section>
  );
};

export default About;