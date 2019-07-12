import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectList extends Component {
    render() {
        return (
            <div>

                <Link to='/create-project'>Create Project</Link>

                <div className="projects row">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        );
    }

}

export default ProjectList;