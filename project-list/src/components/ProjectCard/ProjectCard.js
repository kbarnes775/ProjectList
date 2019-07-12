import React, {Component} from 'react';

class ProjectCard extends Component {

    openCard() {

    }

    render() {
        return (
            <div className="col-md-6 col-lg-3 p-2">
                <div className="card" onClick={this.openCard}>
                    <div className="card-body">
                        <h4 className="card-title text-center pb-3">
                            Project Name
                        </h4>
                        <p className="card-text pb-3">
                            Information about the project
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;