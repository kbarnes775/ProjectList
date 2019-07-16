import React, {Component} from 'react';
import ProjectList from '../ProjectList/ProjectList';

class Main extends Component {
    render() {
        return (
            <main className="container">
                <h2>This is the main component</h2>

                <ProjectList/>
            </main>
        );
    }
}

export default Main;