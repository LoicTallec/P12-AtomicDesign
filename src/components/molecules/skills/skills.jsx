import React from "react";
import Icon from "../../atoms/icon/icon";
import data from "../../../assets/data.json";
import "./skills.css";
const Skills = () => {
    return (
        <section className="skills">
            <h2>Mes compétences</h2>
            <ul>
                {data.skills.map((skill) => (
                    <li key={skill.name}>
                        <p>{skill.name}</p>
                        <Icon cat={skill.cat} name={skill.icon} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills;