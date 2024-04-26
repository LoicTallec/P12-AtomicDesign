import React from "react";
import { about } from "../../../assets/data.json";
import About from "../../molecules/about/about";
import Skills from "../../molecules/skills/skills";
const Worker = () => {
    return (
        <section>
        <About
            logo={about.logo}
            header={about.header}
            text={about.text}
            picture={about.picture}
            setup={about.setup}
            about={about.about}
        />

        <Skills />
        </section>
    );
};

export default Worker;