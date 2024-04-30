import React from "react";
import "./about.css";
const About = ({ logo, setup, picture, title, header, text, about }) => {
    return (
        <section id="home" className="about">
            <img 
                className="setup" 
                src={setup} 
                alt="Setup de Loïc Tallec"
            />
            <figure className="about-header">
                <img 
                    className="head" 
                    src={logo} 
                    alt={title} 
                />
                <figcaption  id="about">{header}</figcaption>
            </figure>

            <figure  className="descrition">
                <h1>{about}</h1>
                <img src={picture} alt="Loïc Tallec" />
                <figcaption>{text}</figcaption>
                
            </figure>
        </section>
    );
};

export default About;