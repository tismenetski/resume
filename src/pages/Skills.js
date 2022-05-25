import React from 'react'
import {skills} from "../skills";
const Skills = () => {

    return (
        <section className={"section-skills"}  id={"section-skills"}>
            <h1 className={"section-title"}>My Skills</h1>
            <div className={"skills-container"}>
                {skills.map((skill)=> {
                    return <div className={"skill"}>{skill.icon} <span>{skill.name}</span> </div>
                })}



            </div>
        </section>
    )

}

export default Skills