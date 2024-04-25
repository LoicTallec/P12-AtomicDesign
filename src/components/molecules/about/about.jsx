import React from "react";
import "./about.css";
const About = ({ logo, setup, picture, title, header, text }) => {
    return (
        <section className="about">
            <img className="setup" src={setup} alt="Setup de Loïc Tallec" />
            <figure className="about-header">
                <img 
                    className="head" 
                    src={logo} 
                    alt={title} 
                />
                <figcaption>{header}</figcaption>
            </figure>
            <figure className="descrition">
                <figcaption>{text}</figcaption>
                <img src={picture} alt="Loïc Tallec" />
            </figure>
        </section>
    );
};

export default About;