import React from "react";
import Slideshow from "../../molecules/slideshow/slideshow";
import "./portfolio.css";
const Portfolio = () => {
    return (
        <section className="portfolio" id="projets">
            <h2>Mon portfolio</h2>
            <Slideshow />
        </section>
    );
};

export default Portfolio;