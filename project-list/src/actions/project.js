import axios from 'axios';
import { GET_ERRORS } from './types';

export const createProject = (project, history) => dispatch => {
    console.log('Hello from the project action');
    axios.post('/project/create', project)
        .then(res => {
            console.log('WHAT IS HAPPENING 1');
            history.push('/')
        })
        .catch(err => {
            console.log('WHAT IS HAPPENING 2');
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};
