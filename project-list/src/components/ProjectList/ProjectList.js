import React, { Component } from 'react';
import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectList extends Component {
    render() {
        return(
            <div>
                <h2>This is the project list</h2>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        );
    }
}

export default ProjectList;