import React, {Component} from 'react';
import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectList extends Component {
    render() {
        return (
            <div id="projects" className="row">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        );
    }
}

export default ProjectList;