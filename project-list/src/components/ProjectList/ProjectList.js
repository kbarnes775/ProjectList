import React, {Component} from 'react';
import {Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { getProjects } from '../../actions/project';

import ProjectCard from "../ProjectCard/ProjectCard";

class ProjectList extends Component {

    constructor(props){
        super(props);
        this.state = {
            myProjects: []
        }
    }

    componentDidMount(){
        //TODO - Fetch all Projects
        let projs = this.props.getProjects();
        console.log('This is the project array being returned', projs);
       this.setState({
           myProjects: projs
       });
    }

    render() {
        return (
            <div>
                <Link to='/create-project'>Create Project</Link>
                <div className="projects row">
                    {/*{this.state.myProjects.map((project) => {*/}
                    {/*    return (*/}
                    {/*        <ProjectCard key={project.id}/>*/}
                    {/*    )*/}
                    {/*})}*/}
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

ProjectList.propTypes = {
    getProjects: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ getProjects })(withRouter(ProjectList));