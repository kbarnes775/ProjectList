import React, {Component} from 'react';
import ProjectList from '../ProjectList/ProjectList';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <h2>This is the main component</h2>

                <ProjectList/>
            </div>
        );
    }
}

export default Main;