import React, {Component} from 'react';
import './ProjectCard.scss'

class ProjectCard extends Component {

    openCard() {
        console.log('Click!');
    };

    render() {
        return (
            <div className="col-md-6 col-lg-3 p-2">
                <div className="card text-white" onClick={this.openCard}>
                    <div className="card-body">
                        <h4 className="card-title text-center pb-3 mb-4">
                            Project Name
                        </h4>
                        <p className="card-text mb-3">
                            Information about the project
                        </p>
                    </div>
                    <small className='text-right text-secondary p-2'>
                        Number of todos
                    </small>
                </div>
            </div>
        );
    }
}

export default ProjectCard;