import React from "react";
import { about } from "../../../assets/data.json";
import About from "../../molecules/about/about";
const Worker = () => {
    return (
        <About
            logo={about.logo}
            header={about.header}
            text={about.text}
            picture={about.picture}
            setup={about.setup}
        />
    );
};

export default Worker;