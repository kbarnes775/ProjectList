import axios from 'axios';
import { GET_ERRORS } from './types';

export const createProject = (project, user, history) => dispatch => {
    console.log('Hello from the project action');
    axios.post('/api/projects/create', project, user)
        .then(res => {
            console.log('Project Added Successfully!');
            history.push('/')
        })
        .catch(err => {
            console.log('Error in createProject Post Method');
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};
