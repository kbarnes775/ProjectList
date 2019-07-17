import React, {Component} from 'react';
import ProjectList from '../ProjectList/ProjectList';

class Main extends Component {
    render() {
        return (
            <main className='flex-shrink-0'>
                <div className="container">
                    <h2>This is the main component</h2>

                    <ProjectList/>
                </div>
            </main>
        );
    }
}

export default Main;