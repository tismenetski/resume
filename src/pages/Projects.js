import React from "react";
import {projects} from "../projects";

const Projects = () => {

    return(
        <section className={"section-projects"}  id={"section-projects"}>
            <h1 className={"section-title"}>My Projects</h1>
            <div className={"projects-container"}>
                {projects.map((project,index) => {
                    return <div key={index} className={"project-card"}>
                        <div className={"project-image-wrapper"}>
                            <img src={project.image} alt={project.name}/>
                        </div>
                        <div className={"project-info"}>
                            <h3>{project.name}</h3>
                            <p>Technologies Used : <span>{project.technologies}</span></p>
                            <ul>
                                {project.description.map((desc,index)=> {
                                    return <li key={index}>{desc}</li>
                                })}
                            </ul>

                            <div className={"project-links"} >
                                <a href={project.url} target="_blank" rel="noopener noreferrer">Live</a>
                                <a href={project.repo_url} target="_blank" rel="noopener noreferrer">Github</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Projects